"use client"

import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'


function page() {
  return (
    <div className='bg-[#0B101B] absolute w-full h-full'>
      <Image src={`/Swirl.svg`} alt='Swirl' width={0} height={0} fill={true} loading="lazy"/>
      <Header />
    </div>
  )
}

export default page