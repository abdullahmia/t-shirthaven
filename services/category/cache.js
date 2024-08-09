import { revalidateTag } from "next/cache";

export const categoryCache = {
  tags: {
    byId(id) {
      return `category-${id}`;
    },
    byCount() {
      return "categories";
    },
  },
  revalidate({ id, count = true }) {
    if (id) {
      revalidateTag(this.tags.byId(id));
    }

    if (count) {
      revalidateTag(this.tags.byCount());
    }
  },
};
