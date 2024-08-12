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
