'use client'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Star } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export type Product = {
    category: string,
    description: string,
    id: number,
    image: string,
    price: number,
    quantity?: number,
    rating: {
        count: number,
        rate: number
    },
    title: string,
}

const Product = () => {
    const router = useRouter();
    const [productsAll, setProductAll] = useState<Product[]>([])

    const fetchproduct = async () =>{
        const res= await fetch('/api/getAllProduct');
        const resJson = await res.json()
        setProductAll(resJson);
        return resJson;
    }

    useEffect(() => {
        fetchproduct()
    }, [])

    const redirectId = (id: number) =>{
        router.push(`/product/${id}`)
    }
    

  return (
    <MaxWidthWrapper>
    <div className="bg-gray-100 p-6">
    <h1 className='text-[#475569] text-3xl text-center my-6 font-bold'>All Products</h1>
    <div className='grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6'>
        {productsAll.map((product, ind) => {
            return (
                <div key={product.id} className='transform transition duration-300 hover:scale-105 hover:shadow-xl bg-white rounded-lg overflow-hidden'>
                    <div onClick={() => redirectId(product.id)} className='relative'>
                        <div className='w-full h-64 flex justify-center items-center bg-gray-200 p-4'>
                            <Image className='imgset object-contain max-h-full' src={product.image} alt='product-image' width={200} height={200} />
                        </div>
                        <div className='p-4'>
                            <p className='truncate text-xl font-semibold text-[#171f46] mb-2'>{product.title}</p>
                            <div className='flex justify-between items-center'>
                                <p className='text-2xl text-[#171f46] font-bold'>${product.price.toFixed(2)}</p>
                                <div className='flex items-center bg-[#3b82f6] text-white font-semibold py-1 px-3 rounded-full gap-1'>
                                    <p>{product.rating.rate}</p>
                                    <Star width={16}/>
                                </div>
                            </div>
                        </div>
                        <div className='absolute top-3 right-3 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded-full'>
                            {Math.floor(Math.random() * 30)}% OFF
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
</div>
    </MaxWidthWrapper>
  )
}

export default Product