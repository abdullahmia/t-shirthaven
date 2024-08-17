import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_NAME,
} from "@/constants";

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

export const uploadToCloudinary = (fileUri, fileName) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload(fileUri, {
        invalidate: true,
        resource_type: "auto",
        filename_override: fileName,
        folder: "fashion-store",
        use_filename: true,
      })
      .then((result) => {
        resolve({ success: true, result });
      })
      .catch((error) => {
        reject({ success: false, error });
      });
  });
};

export const deleteImageFromCloudinary = async (publicId) => {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.error("Error deleting image:", error);
  }
};

export const updateFileFromCloudinary = async (data, publicId) => {
  let newImageResult;
  try {
    // Step 1: Upload the new image with a temporary public ID
    const uploadImage = await uploadToCloudinary(data, `${publicId}_temp`);
    if (uploadImage.success) {
      newImageResult = uploadImage.result;
    }

    // Step 2: Delete the old image
    const deleteResult = await cloudinary.uploader.destroy(publicId);
    if (deleteResult.result !== "ok") {
      throw new Error("Failed to delete the old image");
    }

    return {
      success: true,
      publicId: newImageResult.public_id,
      url: newImageResult.secure_url,
    };
  } catch (error) {
    // Rollback: Delete the new image if the old image couldn't be deleted
    if (newImageResult) {
      await cloudinary.uploader.destroy(`${publicId}_temp`);
    }

    throw error;
  }
};

export { cloudinary };
