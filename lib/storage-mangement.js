import { encodeString } from "@/utils/string-utils";

export const fileUpload = async (file) => {
  if (!file) return { error: "No file provided", url: "" };

  if (!file.type.startsWith("image/")) {
    return { error: "Please upload an image file.", url: "" };
  }

  if (file.size > 1 * 1024 * 1024) {
    return {
      error: "File size must be less than 1 MB.",
      url: "",
    };
  }

  const form = new FormData();
  form.set("file", file);
  const res = await fetch("/api/storage", {
    method: "POST",
    body: form,
    headers: {
      // add token
      // content-type will be auto-handled and set to multipart/form-data
    },
  });

  const response = await res.json();

  if (response.message !== "success") {
    // throw new Error(`Upload failed with status: ${response.status}`);
    return {
      error: "Upload failed. Please try again.",
      url: "",
    };
  }

  return { url: response.imgUrl, error: null };
};

export const updateFile = async (file, publicId) => {
  if (!file) return { error: "No file provided", url: "" };

  if (!file.type.startsWith("image/")) {
    return { error: "Please upload an image file.", url: "" };
  }

  if (file.size > 1 * 1024 * 1024) {
    return {
      error: "File size must be less than 1 MB.",
      url: "",
    };
  }
  // replace / to - in the publicId
  publicId = encodeString(publicId);

  const form = new FormData();
  form.set("file", file);
  form.set("publicId", publicId);

  const res = await fetch(`/api/storage/${publicId}`, {
    method: "PATCH",
    body: form,
    headers: {
      // add token
      // content-type will be auto-handled and set to multipart/form-data
    },
  });

  const response = await res.json();

  if (response.message !== "success") {
    // throw new Error(`Upload failed with status: ${response.status}`);
    return {
      error: "Upload failed. Please try again.",
      url: "",
    };
  }

  return { url: response.url, error: null };
};
