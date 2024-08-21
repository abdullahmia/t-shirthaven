import { deleteImageFromCloudinary } from "@/lib/cloudinary";
import { ZId, ZSlug } from "@/types/common";
import { ZCreateProduct, ZUpdateProduct } from "@/types/product";
import { cache } from "@/utils/cache";
import { transformObject } from "@/utils/convert-data";
import { extractPublicId } from "@/utils/file";
import { validateInputs } from "@/utils/validate";
import { cache as reactCache } from "react";
import "server-only";
import { Category } from "../category/category.model";
import { productCache } from "./cache";
import { Product } from "./product.model";

export const getProducts = reactCache(() =>
  cache(
    async () => {
      return transformObject(
        await Product.find({})
          .populate({
            path: "category",
            model: Category,
          })
          .sort({ createdAt: -1 })
          .lean()
      );
    },
    [productCache.tag.byCount()],
    {
      tags: [productCache.tag.byCount()],
    }
  )()
);

export const getProductById = reactCache((id) =>
  cache(
    async () => {
      validateInputs([id, ZId]);

      try {
        const product = await Product.findOne({ _id: id })
          .populate({
            path: "category",
            model: Category,
          })
          .lean();
        return transformObject(product);
      } catch (error) {
        throw new Error("Failed to get product");
      }
    },
    [productCache.tag.byId(id)],
    {
      tags: [productCache.tag.byId(id)],
    }
  )()
);

export const getProductBySlug = reactCache((slug) =>
  cache(
    async () => {
      validateInputs([slug, ZSlug]);

      try {
        const product = await Product.findOne({ slug: slug })
          .populate({
            path: "category",
            model: Category,
          })
          .lean();
        if (!product) {
          throw new Error("Product not found");
        }
        return transformObject(product);
      } catch (error) {
        console.log(error);
        throw new Error(error?.message);
      }
    },
    [productCache.tag.bySlug(slug)],
    {
      tags: [productCache.tag.bySlug(slug)],
    }
  )()
);

export const addProduct = async (data) => {
  validateInputs([data, ZCreateProduct]);

  try {
    await Product.create(data);

    productCache.revalidate({ count: true });
  } catch (error) {
    throw new Error(error?.message);
  }
};

export const deleteProduct = async (id) => {
  validateInputs([id, ZId]);

  try {
    const product = await Product.findByIdAndDelete(id);

    // delete the images from the cloudinary
    product?.images?.map(async (image) => {
      const publicId = extractPublicId(image?.url);
      // delete the image from cloudinary
      await deleteImageFromCloudinary(publicId);
    });

    productCache.revalidate({ count: true });
  } catch (error) {
    throw new Error(error?.message);
  }
};

export const updateProduct = async (id, data) => {
  validateInputs([id, ZId], [data, ZUpdateProduct]);

  try {
    const product = await Product.findById(id);
    if (!product) {
      throw new Error("Product not found");
    }

    // dalete the deletedImages from the data
    const deletedImages = data.deletedImages;
    if (deletedImages?.length > 0) {
      const deletedImagesIds = deletedImages.map((image) => image.id);
      // delete the images from the cloudinary
      deletedImages?.map(async (image) => {
        const publicId = extractPublicId(image?.url);
        // delete the image from cloudinary
        await deleteImageFromCloudinary(publicId);
      });

      await Product.updateOne(
        { _id: id },
        {
          $pull: {
            images: {
              _id: {
                $in: deletedImagesIds,
              },
            },
          },
        }
      );
    }

    delete data.deletedImages;

    product.title = data.title;
    product.price = data.price;
    product.category = data.category;
    product.sku = data.sku;
    product.stockStatus = product.stockStatus;
    product.description = data.description;
    product.availableQuantity = data.availableQuantity;
    product.size = data.size;
    product.images = data.images;
    product.slug = product.slug;

    await product.save();

    productCache.revalidate({ id: id, count: true });
  } catch (error) {
    throw new Error(error?.message);
  }
};
