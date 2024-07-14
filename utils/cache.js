import { unstable_cache } from "next/cache";
import { parse, stringify } from "superjson";

export { revalidateTag } from "next/cache";

export const cache = (fn, keys, opts) => {
  const wrap = async (params) => {
    const result = await fn(...params);
    return stringify(result);
  };

  const cachedFn = unstable_cache(wrap, keys, opts);

  return async (...params) => {
    const result = await cachedFn(params);
    return parse(result);
  };
};
