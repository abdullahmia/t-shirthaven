/**
 * @name transformObject
 * @description Transforms a MongoDB document object by:
 *  - Replacing `_id` with `id` (string representation)
 *  - Removing properties named `__v` and `password`
 *  - Recursively applying the same transformation to nested objects and arrays
 * @params {Object} obj - The MongoDB document object to be transformed
 * @returns {Object} The transformed object with the specified changes
 * @example
 * const document = {
 *   _id: new mongoose.Types.ObjectId('...'),
 *   name: 'John Doe',
 *   email: 'john.doe@example.com',
 *   nested: {
 *     data: 'some data',
 *     __v: 1,
 *     password: 'secret'
 *   }
 * };
 *
 * const transformedDoc = transformObject(document);
 * console.log(transformedDoc);
 * // Output:
 * // {
 * //   id: '...',  // String representation of original _id
 * //   name: 'John Doe',
 * //   email: 'john.doe@example.com',
 * //   nested: {
 * //     data: 'some data'
 * //   }
 * // }
 */

// export function transformObject(obj) {
//   if (Array.isArray(obj)) {
//     return obj.map((item) => transformObject(item));
//   } else if (obj !== null && typeof obj === "object") {
//     const transformedObj = {};
//     for (const key in obj) {
//       if (obj.hasOwnProperty(key)) {
//         if (key === "_id") {
//           // transformedObj["id"] = transformObject(obj[key]);
//           transformedObj["id"] = obj[key].toString();
//         } else if (key !== "__v" && key !== "password") {
//           transformedObj[key] = transformObject(obj[key]);
//         }
//       }
//     }
//     return transformedObj;
//   } else {
//     return obj;
//   }
// }
export function transformObject(obj) {
  if (Array.isArray(obj)) {
    return obj.map((item) => transformObject(item));
  } else if (obj instanceof Date) {
    // Convert Date object to string
    return obj.toISOString();
  } else if (obj !== null && typeof obj === "object") {
    const transformedObj = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (key === "_id") {
          transformedObj["id"] = obj[key].toString();
        } else if (key !== "__v" && key !== "password") {
          transformedObj[key] = transformObject(obj[key]);
        }
      }
    }
    return transformedObj;
  } else {
    return obj;
  }
}
