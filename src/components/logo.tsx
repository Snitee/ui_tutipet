import Image from 'next/image'
import React from 'react'
import { inter, lusitana } from '@/components/fonts'
import Link from 'next/link';

export default function Logo() {
  return (
    <>
        <div className={`${inter.className} flex flex-col items-center leading-none text-black`}>
            <Link href={'/'}>
              <Image src="/logo.svg" alt='Logo Shop' width={175} height={150}/>
              <p className='text-[23px] uppercase font-bold relative '>TuTiPet Shop</p>
            </Link>
        </div>
    </>
  );
}
