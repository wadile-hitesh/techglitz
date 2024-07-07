
import Image from 'next/image'
import React, { useState } from 'react'
import { FormEvent } from 'react'



  export default function Header() {
    
    // const formData = new FormData()
    const [url,setUrl] = useState('')
    const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
      e.preventDefault()

    }
    return (
      <div className='w-full text-white z-10 absolute'>
        <div className=''>
          <div className='flex justify-center m-5'>
            <p className='font-bold text-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>TechGlitz</p>
          </div>

          <div className='flex justify-center text-center mt-20'>
            <div className='w-1/2'>
              <h1 className='text-5xl bg-gradient-to-r from-[#144EE3] via-[#EB568E] to-[#144EE3] text-transparent bg-clip-text font-black'>Shorten Your Looooong Links !</h1>
              <p className='font-light'>Linkly is an efficient and easy-to-use URL shortening service that streamlines your online experience.</p>
            </div>
          </div>

          <div className='w-full flex justify-center mt-10 z-10 '>
            <form onSubmit={handleSubmit} className='flex border-[#353C4A] border-2 justify-center bg-[#181E29] rounded-full '>
              <Image src={`/link.svg`} height={20} width={20} alt='Link' style={{marginInline : '18px'}}/>
              <input value={url} type='text' name='url' className='bg-[#181E29] text-white outline-none cursor-pointer' placeholder='Enter the URL' onChange={e => setUrl(e.target.value)}/>
              <button type='submit' className='text-white bg-[#144EE3] ml-4 rounded-full font-bold px-4 py-2 cursor-pointer'>
                Shorten
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
  