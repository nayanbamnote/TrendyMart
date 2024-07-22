"use client";
import { useCart } from "@/contexts/CartContext";
import React, { useState } from "react";
import Image from "next/image";
import { Cross, Trash2 } from "lucide-react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { count } from "console";

const Cart = () => {
  const { cart, setCart} = useCart();
  const [price, setPrice] = useState<number | null>(null);

  const updateQuantity = (id: number, newQuantity: number) =>{
    setCart(prevCart=>{
      return prevCart.map((item)=>{
        return(
          item.id === id ? {...item, quantity: Math.max(1, newQuantity)} : item
        )
      })
    })
  }

  return (
    <MaxWidthWrapper>
      <div>
        <div className="text-4xl font-bold text-[#3e4c59] mb-4">My Cart</div>
        <button
          className="text-red-500 hover:text-red-700 transition-colors mb-4"
          onClick={() => {
            setCart([]);
          }}>
          Remove All
        </button>
        <div className="space-y-4">
          {cart.map((item, ind) => {
            return (
              <div key={ind} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg shadow-sm">
                <div className="flex items-center">
                  <Image
                    src={item.image}
                    width={70}
                    height={70}
                    alt="cart-img"
                    className="rounded-md"
                  />
                  <div className="ml-4 w-48">
                    <p className="text-lg font-semibold truncate">{item.title}</p>
                    <p className="text-gray-500">By Nxt Trendz</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 transition"
                    onClick={() => updateQuantity(item.id, item.quantity! - 1)}>
                    -
                  </button>
                  <p className="text-lg text-[#616e7c]">{item.quantity}</p>
                  <button
                    className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 transition"
                    onClick={() => updateQuantity(item.id, item.quantity! + 1)}>
                    +
                  </button>
                </div>
                <p className="text-lg font-semibold">{Math.floor(item.price * item.quantity!)} $</p>
                <button
                  className="ml-4 p-2 text-red-500 hover:text-red-700 transition"
                  onClick={() => {
                    setCart((prevItems) => {
                      return prevItems.filter((_, idx) => idx !== ind);
                    });
                  }}>
                  <Trash2 />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Cart;
