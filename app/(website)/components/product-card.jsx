"use client";

import { store } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import { Provider } from "react-redux";
import ProductAddToCart from "./product-add-to-cart";

export default function ProductCard({ product }) {
  return (
    <div className="group">
      <Link href={`/products/${product?.slug}`}>
        <Image
          src={product?.images[0]?.url}
          width={400}
          height={312}
          alt={product?.title}
          className="w-full h-[312px] object-cover aspect-auto"
        />
      </Link>

      <div className="mt-5 space-y-2">
        <Link href={`/products/${product?.slug}`}>
          <p className="text-secondary text-xs">{product?.category?.name}</p>
          <h2 className="text-primary text-md group-hover:underline h-12">
            {product?.title?.slice(0, 31)}
            {product?.title?.length > 31 && "..."}
          </h2>
        </Link>

        <div className="text-sm flex items-center justify-between">
          <Provider store={store}>
            <ProductAddToCart product={product} />
          </Provider>
          <p className="text-secondary">$ {product?.price}</p>
        </div>
      </div>
    </div>
  );
}
