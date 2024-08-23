import { SITE_NAME } from "@/constants";
import "server-only";

import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  appInfo: {
    name: SITE_NAME,
    version: "1.0.0",
  },
});
