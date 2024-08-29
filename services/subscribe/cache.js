import { revalidateTag } from 'next/cache';

export const subscribeCache = {
  tags: {
    byCount() {
      return `subscribes`;
    },
  },
  revalidate({ count = true }) {
    if (count) {
      revalidateTag(this.tags.byCount());
    }
  },
};
