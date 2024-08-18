/**
 * @function isFileObject
 * @description Determines whether the given input is a File object or a URL string.
 * @param {File|string} input - The input to check, which can either be a File object or a string representing a URL.
 * @returns {boolean} - Returns true if the input is a File object, and false if it's a valid URL or an invalid input.
 *
 * @example
 * // Check if the input is a File object
 * const fileInput = new File(["content"], "example.txt", { type: "text/plain" });
 * console.log(isFile(fileInput)); // Output: true
 *
 * // Check if the input is a URL string
 * const urlInput = "https://example.com";
 * console.log(isFile(urlInput)); // Output: false
 *
 * // Check if the input is an invalid string (not a URL)
 * const invalidInput = "not a url";
 * console.log(isFile(invalidInput)); // Output: false
 */
export function isFileObject(input) {
  if (typeof File !== "undefined" && input instanceof File) {
    return true;
  }

  try {
    const url = new URL(input);
    return false;
  } catch (e) {
    return false;
  }
}

/**
 * @name extractPublicId
 * @description Extracts the public ID from a Cloudinary URL and prepends it with a folder path.
 * @param {string} cloudinaryUrl - The Cloudinary URL from which to extract the public ID.
 * @returns {string} The public ID prepended with the folder path `fashion-store/`.
 * @example
 * // Example usage:
 * const url = 'https://res.cloudinary.com/demo/image/upload/v1630000000/sample.jpg';
 * const publicId = extractPublicId(url);
 * console.log(publicId); // Output: 'fashion-store/sample'
 */
export function extractPublicId(cloudinaryUrl) {
  const parts = cloudinaryUrl.split("/");

  const fileNameWithExtension = parts[parts.length - 1];
  const publicId = fileNameWithExtension.split(".").slice(0, -1).join(".");

  return `fashion-store/${publicId}`;
}
