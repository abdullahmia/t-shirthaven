import { deleteImageFromCloudinary } from "@/lib/cloudinary";
import connectDB from "@/lib/db";
import { ZCategoryInput } from "@/types/category";
import { ZId } from "@/types/common";
import { cache } from "@/utils/cache";
import { transformObject } from "@/utils/convert-data";
import { validateInputs } from "@/utils/validate";
import { extractPublicId } from "cloudinary-build-url";
import { cache as reactCache } from "react";
import "server-only";
import { categoryCache } from "./cache";
import { Category } from "./category.model";

export const getCategories = reactCache(() =>
  cache(
    async () => {
      await connectDB();
      return transformObject(
        await Category.find({}).sort({ createdAt: -1 }).lean()
      );
    },
    [categoryCache.tags.byCount()],
    {
      tags: [categoryCache.tags.byCount()],
    }
  )()
);

export const getCategoryById = reactCache((id) =>
  cache(
    async () => {
      validateInputs([id, ZId]);

      try {
        await connectDB();
        const category = await Category.findOne({ _id: id }).lean();
        if (!category) {
          throw new Error("Category not found");
        }
      } catch (error) {
        throw new Error("Failed to get category");
      }
    },
    [categoryCache.tags.byId(id)],
    {
      tags: [categoryCache.tags.byId(id)],
    }
  )()
);

export const addCategory = async (data) => {
  validateInputs([data, ZCategoryInput]);

  try {
    const category = await Category.create(data);
    categoryCache.revalidate({ count: true });
    return transformObject(category);
  } catch (error) {
    throw new Error(error?.message);
  }
};

export const updateCategory = async (id, data) => {
  validateInputs([id, ZId], [data, ZCategoryInput.partial()]);

  try {
    const category = await Category.findOneAndUpdate({ _id: id }, data, {
      new: true,
    });

    categoryCache.revalidate({ id: id, count: true });
    return transformObject(category);
  } catch (error) {
    throw new Error(error?.message);
  }
};

export const deleteCategory = async (id) => {
  validateInputs([id, ZId]);

  try {
    const deletedCategory = await Category.findByIdAndDelete(id);
    const publicId = extractPublicId(deletedCategory?.image);

    //  Delete the image from cloudinary
    await deleteImageFromCloudinary(publicId);

    categoryCache.revalidate({ id: id, count: true });
  } catch (error) {
    throw new Error(error?.message);
  }
};
