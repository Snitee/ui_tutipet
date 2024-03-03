import React from 'react'
import Image from 'next/image'
import cat from '@/app/favicon.ico'
import { Data } from '../../dashboard/products/ListProduct'

export default function CardProduct({data} : any) {
  return (
    <div className='border-2 rounded-2xl shadow-md p-2 bg-white  hover:border-orange-200 m-2'>
        <div className='p-2'>
        <Image src={cat} height={250} alt={'meo xinh'} />
        </div>
        <div>
        <div className='whitespace-nowrap overflow-hidden'>
            <p className='p-2 font-bold text-2xl text-ellipsis text-center capitalize'>{data.name}</p>
        </div>
        <div className='whitespace-nowrap overflow-hidden flex justify-between p-2'>
            <span className='text-xl font-bold pr-2'>100.000d</span>
            <span className='text-base text-gray-500 mt-[-5px] line-through'>
                {data.price}
            </span>
        </div>
        </div>
    </div>
  )
}
