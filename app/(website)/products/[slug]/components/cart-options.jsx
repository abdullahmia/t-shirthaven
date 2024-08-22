"use client";

import { store } from "@/redux/store";
import { Provider } from "react-redux";
import AddToCart from "./add-to-cart";

export default function CartOptions({ product }) {
  return (
    <Provider store={store}>
      <AddToCart product={product} />
    </Provider>
  );
}
