'use client'
import Image from 'next/image'
import React from 'react'
import { UserButton } from '@clerk/nextjs'
import MaxWidthWrapper from './MaxWidthWrapper'
import NavMobileDropdown from './NavMobileDropdown'
import Link from 'next/link'
import { useCart } from '@/contexts/CartContext'


const Navbar = () => {
  const {cart} = useCart();

  return (
    <nav className='sticky z-[100] h-16 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all '>
    <MaxWidthWrapper>
        <div className=' h-16 flex items-center justify-between max-sm:mx-10 border-solid border-slate-100'> 
            <Link href='/'>
            <Image 
            className=' sm:w-[150px] sm:h-[35px]'
            src='/nxt-trendz-logo-img.png' 
            alt='Home Logo'
            width={110}
            height={15}
            />
            </Link>

            <div className='flex gap-7 text-gray-700  centerDiv max-sm:hidden'>
                <Link href='/'>Home</Link >
                <Link href='/product'>Product</Link >
                <div className='relative'>
                    {cart.length > 0 && (
                    <span className='absolute -top-2 -right-5 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full'>
                      {cart.length}
                    </span>
                  )}
                  <Link href='/cart'>Cart</Link >
                </div>
                <div className=' p-1 bg-slate-200 centerDiv'>
                  <UserButton />
                </div>
            </div>

            <div className='sm:hidden'>
              <NavMobileDropdown />
            </div>

            
        </div>
    </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar