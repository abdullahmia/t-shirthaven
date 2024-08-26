import { revalidateTag } from "next/cache";

export const wishlistCache = {
  tag: {
    byId(id) {
      return `orders-${id}`;
    },
    byUser(userId) {
      return `wishlists-${userId}`;
    },
    byCount() {
      return `wishlists`;
    },
  },
  revalidate({ id, count, userId }) {
    if (id) {
      revalidateTag(this.tag.byId(id));
    }

    if (userId) {
      revalidateTag(this.tag.byUser(userId));
    }

    if (count) {
      revalidateTag(this.tag.byCount());
    }
  },
};
