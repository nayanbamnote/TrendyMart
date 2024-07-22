import React from 'react'
import {
    House,
    Menu,
    Shirt,
    ShoppingCart,
  } from "lucide-react"
   
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'

const NavMobileDropdown = () => {
  return (
    <div className='z-[110] centerDiv gap-5 '>
            <DropdownMenu>

                <DropdownMenuTrigger asChild>
                  <Menu />
                </DropdownMenuTrigger>
                
                <DropdownMenuContent className="w-44 flex justify-center z-[100]">
                  <DropdownMenuGroup>
                  <DropdownMenuSeparator className=''/>
                    <DropdownMenuItem>
                      <House  className="mr-2 h-4 w-4" />
                      <Link href='/'>Home</Link >
                    </DropdownMenuItem>

                    <DropdownMenuSeparator/>

                    <DropdownMenuItem>
                      <Shirt className="mr-2 h-4 w-4" />
                      <Link href='/product'>Product</Link >
                    </DropdownMenuItem>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem>
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      <Link href='/cart'>Cart</Link >
                    </DropdownMenuItem>
                    <DropdownMenuSeparator/>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>

            <div className=' sm:hidden centerDiv'>
              <UserButton />
            </div>
            </div>
  )
}

export default NavMobileDropdown