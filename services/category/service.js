import { deleteImageFromCloudinary } from "@/lib/cloudinary";
import { ZCreateCategory } from "@/types/category";
import { ZId } from "@/types/common";
import { cache } from "@/utils/cache";
import { transformObject } from "@/utils/convert-data";
import { validateInputs } from "@/utils/validate";
import { extractPublicId } from "cloudinary-build-url";
import { revalidatePath } from "next/cache";
import { cache as reactCache } from "react";
import "server-only";
import { categoryCache } from "./cache";
import { Category } from "./category.model";

export const getCategories = reactCache(
  () =>
    cache(async () => {
      return transformObject(
        await Category.find({}).sort({ createdAt: -1 }).lean()
      );
    })(),
  [`get-categories`],
  {
    tags: [categoryCache.tags.byCount()],
  }
);

export const addCategory = async (data) => {
  validateInputs([data, ZCreateCategory]);

  try {
    const category = await Category.create(data);
    revalidatePath("/admin/categories");
    // categoryCache.revalidate({ count: true });
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

    // categoryCache.revalidate({ id: id, count: true });
    revalidatePath("/admin/categories");
  } catch (error) {
    throw new Error(error?.message);
  }
};
