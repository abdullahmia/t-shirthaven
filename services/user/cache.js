import { revalidateTag } from "next/cache";

export const userCache = {
  tag: {
    byId(id) {
      return `users-${id}`;
    },
    byEmail(email) {
      return `users-${email}`;
    },
  },
  revalidate({ id, email }) {
    if (id) {
      revalidateTag(this.tag.byId(id));
    }

    if (email) {
      revalidateTag(this.tag.byEmail(email));
    }
  },
};
