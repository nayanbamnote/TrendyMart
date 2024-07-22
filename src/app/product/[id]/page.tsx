"use client";
import React, { useEffect, useState } from "react";
import { Product } from "../page";
import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCart } from "@/contexts/CartContext";

const EachProduct = ({ params }: { params: { id: number } }) => {
  const router = useRouter();
  const { id } = params;
  const { setCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [count, setCount] = useState<number>(1);

  const fetchdata = async () => {
    const res = await fetch(`/api/product/${id}`);
    const resJson = await res.json();
    setProduct(resJson);
    return resJson;
  };

  // if already present in the cart then just add the count
  // if not present then append into cart

  useEffect(() => {
    fetchdata();
  }, [id]);


  const gotocart = async () => {
    const res = await fetch(`/api/product/${id}`);
    const resJson: Product = await res.json();
    resJson.quantity = count;
    setCart((prevCart) => {
      const alreadyInCart = prevCart.findIndex(
        (eachCart) => eachCart.id === id
      );

      if (alreadyInCart !== -1) {
        console.log('if statement')
        const updateCart = [...prevCart];
        const currentQuantity = updateCart[alreadyInCart].quantity
        updateCart[alreadyInCart] = { ...updateCart[alreadyInCart], quantity: currentQuantity! + count};
        return updateCart;
      } else {
        console.log('else statement')
        return [...prevCart, resJson];
     }
    });
    return resJson;
  };

  return (
    <MaxWidthWrapper>
      <div>
        <div className=" grid grid-cols-2 my-9">
          <div>
            {product && (
              <Image
                className="imgset size-auto"
                src={product.image}
                alt="product-image"
                width={350}
                height={350}
              />
            )}
          </div>
          <div>
            <p className=" text-4xl text-[#3e4c59] text-bold">
              {product?.title}
            </p>
            <p className=" text-xl text-[#171f46] pt-4 pb-7">
              {product?.price} $
            </p>
            <div className=" flex gap-4 items-center pb-7">
              <p className=" px-5 py-2 bg-[#3b82f6] rounded-md centerDiv gap-1 text-white">
                <p>{product?.rating.rate}</p>
                <Star className="size-4" />
              </p>
              <p>{product?.rating.count} Reviews</p>
            </div>
            <p className=" text-lg text-[#616e7c] pb-7">
              {product?.description}
            </p>
            <p className=" text-lg  ">
              Available : <span className="text-[#616e7c]">In Stock</span>
            </p>
            <p className=" text-lg pb-7">
              Brand : <span className="text-[#616e7c]">Mufti</span>
            </p>
            <div className="border border-solid border-gray-300" />
            <div className="flex  gap-4 py-7">
              <button
                className="p-1 size-6 centerDiv bg-slate-100"
                onClick={() => {
                  if (count < 2) {
                    setCount(1);
                  } else {
                    setCount(count - 1);
                  }
                }}>
                -
              </button>
              <p className=" text-lg text-[#616e7c]">{count}</p>
              <button
                className="p-1 size-6 centerDiv bg-slate-100"
                onClick={() => {
                  setCount(count + 1);
                }}>
                +
              </button>
            </div>
            <Button onClick={gotocart} className="bg-[#3b82f6] px-6">
              Add To Card
            </Button>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default EachProduct;
