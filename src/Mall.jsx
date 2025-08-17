import React from 'react'
import {mall1,mall2,mall3,mall4,mall5,mall6} from './assets/assets'

const Mall = () => {
  return (
    <div className='flex justify-evenly lg:gap-5 md:gap-3 lg:mx-20 md:mx-20 sm:mx-5 lg:pb-4'>
      <div className=''>
        <img src={mall2} alt="" />
        <p className='text-[#5E5E5E] text-center text-2xl font-semibold lg:mt-5 md:mt-3'>Cat Food</p>
      </div>
      <div className=''>
        <img src={mall3} alt="" />
        <p className='text-[#5E5E5E] text-center text-2xl font-semibold lg:mt-5 md:mt-3'>Cat Food</p>
      </div>
      <div className=''>
        <img src={mall4} alt="" />
        <p className='text-[#5E5E5E] text-center text-2xl font-semibold lg:mt-5 md:mt-3'>Treats</p>
      </div>
      <div className=''>
        <img src={mall5} alt="" />
        <p className='text-[#5E5E5E] text-center text-2xl font-semibold lg:mt-5 md:mt-3'>Toys</p>
      </div>
      <div className=''>
        <img src={mall1} alt="" />
        <p className='text-[#5E5E5E] text-center text-2xl font-semibold lg:mt-5 md:mt-3'>Wellness</p>
      </div>
      <div className=''>
        <img src={mall6} alt="" />
        <p className='text-[#5E5E5E] text-center text-2xl font-semibold lg:mt-5 md:mt-3'>Litter & Supplies</p>
      </div>
    </div>
  )
}

export default Mall
