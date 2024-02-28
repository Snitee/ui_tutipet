'use client'
import Button from '@/app/ui/button'
import Logo from '@/app/ui/logo'
import NavLinks from '@/app/ui/nav-links'
import ShoppingCartButton from '@/app/ui/shopping_cart'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Header() {

  const [cartItems, setCartItems] = useState(0);

  return (
    <>
      <header className='z-10 bg-white fixed top-0 left-0 right-0 w-full mb-4 px-2 border-b-2 shadow-lg pb-4 rounded-b-3xl'>
        <div className='grid grid-cols-3 p-4 bg-white '>
          <div>
          </div>
          
          <Logo /> 

          <div className=' flex-row flex p-6 justify-end'>

            <div className='px-2 flex items-center'>
              <ShoppingCartButton itemCount={cartItems} />
            </div>

            <div className='px-2 flex items-end'>
              <Link href='/login' className='p-4 bg-[#CA9D7C] rounded-xl hover:bg-[#B45F30]'>
                <span className='capitalize font-bold text-white'>
                  đăng nhập
                </span>
              </Link>
            </div>

          </div>

        </div>
        <div className='flex grow flex-row justify-center space-x-2 px-2 pb-2'>
          <NavLinks />
        </div>
      </header>
      
    </>
  )
}
