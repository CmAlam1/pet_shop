import React from 'react'
import {pluto,bunny,togo,gugun,ballRight,arrRight} from './assets/assets'

const Adoption = () => {
  return (
    <div className='bg-[linear-gradient(180deg,rgba(185,131,231,0.6)_0%,rgba(235,170,224,0.5)_100%)] max-w-[1280px] max-h-[375px] rounded-xl lg:mx-20 md:mx-10 lg:pb-10 md:pb-6 lg:mb-16'>
      <div className=' flex justify-end'>
        <a href="" className='text-white font-inter text-[16px] underline underline-offset-auto decoration-solid pt-3 lg:pr-16 md:pr-8 '>View All</a>
      </div>
      <div className='flex items-center pt-3.5'>
        <div className='lg:ml-14 md:ml-7 sm:ml-auto my-6'>
            <h1 className='text-white font-manrope text-[26px] font-semibold'>Find you best furry friend. </h1>
            <div className='inline-flex px-5 py-2.5 mt-5 justify-center items-center gap-[10px] border-[#FFF] border-2'>
                <a href="" className='text-white'>Adoption</a>
                <img src={arrRight} alt="" />
            </div>
        </div>
        <div className='flex gap-5'>
            <div className='w-[186px] p-3 flex flex-col items-start gap-3 rounded-[12px] border border-[#0CC] bg-[#D9D9D9]'>
                <img className='w-[162px] h-[162px]' src={pluto} alt="" />
                <p className='font-manrope text-[14px] font-bold rounded-[100px] bg-[var(--Cyan-Neutral-Color-100,#DEE7E7)] px-2.5 py-1.5'>Pluto</p>
                <p className='text-[#5E5E5E] font-manrope text-[14px]'>Hi, I am pluto . i love to play all day . </p>
            </div>
            <div className='w-[186px] p-3 flex flex-col items-start gap-3 rounded-[12px] bg-[#CBAACB]'>
                <img className='w-[162px] h-[162px]' src={bunny} alt="" />
                <p className='font-manrope text-[14px] font-bold rounded-[100px] bg-[var(--Cyan-Neutral-Color-100,#DEE7E7)] px-2.5 py-1.5'>Bunny</p>
                <p className='text-[#5E5E5E] font-manrope text-[14px]'>Bunny love to eat carrot all day  </p>
            </div>
            <div className='w-[186px] p-3 flex flex-col items-start gap-3 rounded-[12px] bg-[#FCEBD5]'>
                <img className='w-[162px] h-[162px]' src={gugun} alt="" />
                <p className='font-manrope text-[14px] font-bold rounded-[100px] bg-[var(--Cyan-Neutral-Color-100,#DEE7E7)] px-2.5 py-1.5'>Gugun</p>
                <p className='text-[#5E5E5E] font-manrope text-[14px]'>I love to sleep and eat all day </p>
            </div>
            <div className='w-[186px] p-3 flex flex-col items-start gap-3 rounded-[12px] bg-[#88B392]'>
                <img className='w-[162px] h-[162px]' src={togo} alt="" />
                <p className='font-manrope text-[14px] font-bold rounded-[100px] bg-[var(--Cyan-Neutral-Color-100,#DEE7E7)] px-2.5 py-1.5'>Togo</p>
                <p className='text-[#5E5E5E] font-manrope text-[14px]'>I love to dance and sing all day </p>
            </div>
        </div>
        <div className='px-5'>
            <img  className='rounded-[100px] bg-[var(--Primary-Color-25,#E5FFFF)]' src={ballRight} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Adoption
