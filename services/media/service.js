import { transformObject } from "@/utils/convert-data";
import { Media } from "./media.model";

export const addMedia = async (media) => {
  const newMedia = await Media.create(media);
  return transformObject(newMedia);
};
