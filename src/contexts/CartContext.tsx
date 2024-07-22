'use client'
import { Product } from "@/app/product/page";
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

type CartContentType = {
    cart: Product[]
    setCart: Dispatch<SetStateAction<Product[]>>
    countCart: number
    setCountCart:React.Dispatch<React.SetStateAction<number>>
}

const CartContext = createContext<CartContentType | undefined>(undefined)

export default function CartProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const [cart, setCart] = useState<Product[]>([])
    const [countCart, setCountCart] = useState<number>(1)

  return (
    <CartContext.Provider value={{cart, setCart, countCart, setCountCart}}>
        {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
    const context = useContext(CartContext)
    if (context === undefined) {
      throw new Error('useCart must be used within a CartProvider')
    }
    return context
  }