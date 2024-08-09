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
    console.log("Image deleted:", result);
  } catch (error) {
    console.error("Error deleting image:", error);
  }
};

export { cloudinary };

// import cloudinary from "cloudinary";

// cloudinary.v2.config({
//   cloud_name: CLOUDINARY_NAME,
//   api_key: CLOUDINARY_API_KEY,
//   api_secret: CLOUDINARY_API_SECRET,
// });

// export const PATH = "fashion-store";

// export const uploadMedia = async (fileUri, fileName) => {
//   try {
//     const result = await cloudinary.v2.uploader.upload(fileUri, {
//       folder: PATH,
//       public_id: fileName,
//       resource_type: "auto",
//     });
//     console.log("Result --> ", result);
//     return { result: result.url, success: true };
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const updateMedia = async (file, public_id = "") => {
//   try {
//     if (public_id) {
//       await deleteMedia(public_id);
//     }
//     const result = await cloudinary.uploader.upload(file, {
//       folder: PATH,
//       resource_type: "auto",
//     });
//     return result;
//   } catch (error) {
//     throw error;
//   }
// };

// export default cloudinary;
