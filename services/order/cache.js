import { revalidateTag } from "next/cache";

export const orderCache = {
  tag: {
    byId(id) {
      return `orders-${id}`;
    },
    byUser(userId) {
      return `orders-${userId}`;
    },
    bySession(sessionId) {
      return `orders-${sessionId}`;
    },
    byCount() {
      return `orders`;
    },
  },
  revalidate({ id, count, userId, sessionId }) {
    if (id) {
      revalidateTag(this.tag.byId(id));
    }

    if (userId) {
      revalidateTag(this.tag.byUser(userId));
    }

    if (sessionId) {
      revalidateTag(this.tag.bySession(sessionId));
    }

    if (count) {
      revalidateTag(this.tag.byCount());
    }
  },
};
