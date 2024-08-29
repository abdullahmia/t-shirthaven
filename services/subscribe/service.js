import connectDB from '@/lib/db';
import { cache } from '@/utils/cache';
import { replaceMeta } from '@/utils/convert-data';
import { validateInputs } from '@/utils/validate';
import { cache as reactCache } from 'react';
import 'server-only';
import { subscribeCache } from './cache';
import { Subscribe } from './subscribe.model';
import { ZSubscribe } from './types';

export const getNewsletters = reactCache(() =>
  cache(
    async () => {
      await connectDB();
      return replaceMeta(
        await Subscribe.find({}).sort({ createdAt: -1 }).lean(),
      );
    },
    [subscribeCache.tags.byCount()],
    {
      tags: [subscribeCache.tags.byCount()],
    },
  )(),
);

export const addSubscribe = async (data) => {
  validateInputs([data, ZSubscribe]);

  try {
    const isExist = await Subscribe.findOne({ email: data.email });
    if (isExist) {
      return;
    }

    await Subscribe.create(data);

    subscribeCache.revalidate({ count: true });
  } catch (error) {
    throw new Error(error.message);
  }
};
