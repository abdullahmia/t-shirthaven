// /**
//  * @name transformObject
//  * @description Transforms a MongoDB document object by:
//  *  - Replacing `_id` with `id` (string representation)
//  *  - Removing properties named `__v` and `password`
//  *  - Recursively applying the same transformation to nested objects and arrays
//  * @params {Object} obj - The MongoDB document object to be transformed
//  * @returns {Object} The transformed object with the specified changes
//  * @example
//  * const document = {
//  *   _id: new mongoose.Types.ObjectId('...'),
//  *   name: 'John Doe',
//  *   email: 'john.doe@example.com',
//  *   nested: {
//  *     data: 'some data',
//  *     __v: 1,
//  *     password: 'secret'
//  *   }
//  * };
//  *
//  * const transformedDoc = transformObject(document);
//  * console.log(transformedDoc);
//  * // Output:
//  * // {
//  * //   id: '...',  // String representation of original _id
//  * //   name: 'John Doe',
//  * //   email: 'john.doe@example.com',
//  * //   nested: {
//  * //     data: 'some data'
//  * //   }
//  * // }
//  */

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

export function replaceMeta(data) {
  // Check if data is an array
  if (Array.isArray(data)) {
    data.forEach((item) => {
      if (typeof item === "object" && item !== null) {
        replaceMeta(item);
      }
    });
  }
  // Check if data is an object
  else if (typeof data === "object" && data !== null) {
    Object.keys(data).forEach((key) => {
      // Delete 'password' and '__v'
      if (key === "password" || key === "__v") {
        delete data[key];
      }

      // Replace '_id' with 'id'
      if (key === "_id") {
        data.id = data[key];
        delete data._id;
      }

      // If the property is an array, check each item
      if (Array.isArray(data[key])) {
        data[key].forEach((item) => {
          if (typeof item === "object" && item !== null) {
            replaceMeta(item);
          }
        });
      }

      // If the property is an object, recursively apply replaceMeta
      if (typeof data[key] === "object" && data[key] !== null) {
        replaceMeta(data[key]);
      }
    });
  }

  return data;
}
