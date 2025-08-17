import React from 'react'
import {finn, Magnify , ShopCart} from "./assets/assets" ;


const Header = () => {
  return (
    <div className='lg:flex sm:inline justify-between lg:mx-24 md:mx-12 sm:mx-6 lg:mt-6 md:mt-3'>
      <div>
        <img src={finn} alt="" />
      </div>
      <div className='flex shrink-0 lg:w-2xl md:w-xl h-[40px] lg:rounded-full md:rounded-xl border border-[#AEC6CF] md:my-2'>
    <img className='lg:ml-3 md:ml-2 w-6 h-6 lg:mt-2 md:mt-1' src={Magnify} alt="" />
    <input type="text" placeholder='' className='border-none focus:outline-none lg:w-2xl md:w-xl'/>
      </div>
      <div className='flex gap-4'>
    <a className='rounded-full bg-[#3daf58] px-5 py-3 text-[#FFF8EE] text-[20px] font-semibold ' href="">Shop Now</a>
    <img className='w-6 h-6 shrink-0 aspect-square mt-3' src={ShopCart} alt="" />
      </div>
    </div>
  )
}

export default Header
