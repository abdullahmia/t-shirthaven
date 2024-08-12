/**
 * @name encodeString
 * @description Encodes a given string into a Base64 format.
 * @param {string} str - The string to be encoded.
 * @returns {string} The Base64 encoded version of the input string.
 * @example
 * const encoded = encodeString("Hello, World!");
 * console.log(encoded); // Outputs: "SGVsbG8sIFdvcmxkIQ=="
 */
export const encodeString = (str) => {
  return Buffer.from(str).toString("base64");
};

/**
 * @name decodeString
 * @description Decodes a Base64 encoded string back to its original format.
 * @param {string} encodedStr - The Base64 encoded string to be decoded.
 * @returns {string} The original string after decoding.
 * @example
 * const decoded = decodeString("SGVsbG8sIFdvcmxkIQ==");
 * console.log(decoded); // Outputs: "Hello, World!"
 */
export const decodeString = (encodedStr) => {
  return Buffer.from(encodedStr, "base64").toString("utf8");
};
