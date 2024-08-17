import { revalidateTag } from "next/cache";

export const productCache = {
  tag: {
    byId(id) {
      return `products-${id}`;
    },
    bySlug(slug) {
      return `products-${slug}`;
    },
    byCount() {
      return `products`;
    },
  },
  revalidate({ id, slug, count = true }) {
    if (id) {
      revalidateTag(this.tag.byId(id));
    }

    if (slug) {
      revalidateTag(this.tag.slug(slug));
    }

    if (count) {
      revalidateTag(this.tag.byCount());
    }
  },
};
