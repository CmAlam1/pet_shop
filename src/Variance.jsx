import React from 'react'
import { card1,card2,card3,card4, arrowRight } from './assets/assets'

const Variance = () => {
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:gap-14 md:gap-6 lg:mx-[72px] md:mx-10 lg:mb-28 md:mb-14 sm:mb-6'>
      <div className='w-[306px] h-[216px]'>
        <div><img className=' rounded-t-2xl' src={card2} alt="" /></div>
        <div className='flex justify-between lg:mt-5 md:mt-3  lg:mx-4 md:mx-2 items-center '>
            <p className='text-black text-[20px] font-semibold'>Shop</p>
            <img className='w-[16px] h-[16px] ' src={arrowRight} alt="" />
        </div>
        <div>
            <p className='text-black/60 text-[16px] mt-3 lg:mx-4 md:mx-2'>lets do shopping for your baby</p>
        </div>
      </div>
      <div className='w-[306px] h-[216px] '>
        <div><img className=' rounded-t-2xl' src={card3} alt="" /></div>
        <div className='flex justify-between lg:mt-5 md:mt-3 lg:mx-4 md:mx-2 items-center'>
            <p className='text-black text-[20px] font-semibold'>Healthcare</p>
            <img className='w-[16px] h-[16px] ' src={arrowRight} alt="" />
        </div>
        <div>
            <p className='text-black/60 text-[16px] mt-3 lg:mx-4 md:mx-2'>Find vet and healthcare service</p>
        </div>
      </div>
      <div className='w-[306px] h-[216px] '>
        <div><img className=' rounded-t-2xl' src={card4} alt="" /></div>
        <div className='flex justify-between lg:mt-5 md:mt-3 lg:mx-4 md:mx-2  items-center'>
            <p className='text-black text-[20px] font-semibold'>Grooming</p>
            <img className='w-[16px] h-[16px] ' src={arrowRight} alt="" />
        </div>
        <div>
            <p className='text-black/60 text-[16px] mt-3 lg:mx-4 md:mx-2'>Find best groomer nearby</p>
        </div>
      </div>
      <div className='w-[306px] h-[216px] '>
        <div><img className=' rounded-t-2xl' src={card1} alt="" /></div>
        <div className='flex justify-between lg:mt-5 md:mt-3 lg:mx-4 md:mx-2  items-center'>
            <p className='text-black text-[20px] font-semibold'>Adoption</p>
            <img className='w-[16px] h-[16px] ' src={arrowRight} alt="" />
        </div>
        <div>
            <p className='text-black/60 text-[16px] mt-3 lg:mx-4 md:mx-2'>100+ babys waiting for you</p>
        </div>
      </div>
    </div>
  )
}

export default Variance
