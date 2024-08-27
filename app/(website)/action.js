"use server";

import { addSubscribe } from "@/services/subscribe/service";

export const addNewSubscriberAction = async (data) => {
  await addSubscribe(data);
};
