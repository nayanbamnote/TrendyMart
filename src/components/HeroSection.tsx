import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <MaxWidthWrapper>
    <div className=' mt-20'>
        <div className=' grid grid-cols-7 max-sm:grid-cols-1 max-lg:grid-cols-2'>
            <div className='col-span-4 pr-10 max-sm:order-2'>
                <p className=' text-5xl font-semibold my-10 text-[#1e293b]'>Clothes That Get YOU Noticed</p>
                <p className=' text-lg text-gray-500'>Fashion is part of the daily air and it does not quite help that it changes all the time. Clothes have always been a marker of the era and we are in a revolution. Your fashion makes you been seen and heard that way you are. So, celebrate the seasons new and exciting fashion in your own way.</p>
                <Button asChild className='my-10'>
                    <Link href="/product">Shop Now</Link>
                </Button>
            </div> 
        

            <div className='col-span-3 max-sm:order-1 flex justify-center'>
                <Image width={450} height={467} src='/nxt-trendz-home-img.png' alt='homeimg'/>
            </div>
        </div>
    </div>
    </MaxWidthWrapper>
  )
}

export default HeroSection