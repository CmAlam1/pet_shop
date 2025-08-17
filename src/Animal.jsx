import React from 'react'
import {cat,dog,rabbit,hamster,parrot,turtle} from './assets/assets'

const Animal = () => {
  return (
   <div className='lg:pt-14'>
    <div className='flex justify-evenly lg:gap-5 md:gap-3 lg:mx-20 md:mx-20 sm:mx-5 lg:pb-4 '>
          <div className=''>
            <img src={cat} alt="" className='w-[158px] h-[191px]'/>
            <p className='text-[#5E5E5E] text-center text-2xl font-semibold lg:mt-5 md:mt-3'>Cat</p>
          </div>
          <div className=''>
            <img src={dog} alt=""  className='w-[158px] h-[191px]'/>
            <p className='text-[#5E5E5E] text-center text-2xl font-semibold lg:mt-5 md:mt-3'>Dog</p>
          </div>
          <div className=''>
            <img src={rabbit} alt=""  className='w-[158px] h-[191px]'/>
            <p className='text-[#5E5E5E] text-center text-2xl font-semibold lg:mt-5 md:mt-3'>Rabbit</p>
          </div>
          <div className=''>
            <img src={hamster} alt="" className='w-[158px] h-[191px]' />
            <p className='text-[#5E5E5E] text-center text-2xl font-semibold lg:mt-5 md:mt-3'>Hamster</p>
          </div>
          <div className=''>
            <img src={parrot} alt="" className='w-[158px] h-[191px]' />
            <p className='text-[#5E5E5E] text-center text-2xl font-semibold lg:mt-5 md:mt-3'>Parrot</p>
          </div>
          <div className=''>
            <img src={turtle} alt="" className='w-[158px] h-[191px]' />
            <p className='text-[#5E5E5E] text-center text-2xl font-semibold lg:mt-5 md:mt-3'>Turtle</p>
          </div>
        </div>
    <div className='flex justify-evenly lg:gap-5 md:gap-3 lg:mx-20 md:mx-20 sm:mx-5 lg:pb-4 '>
          <div className=''>
            <img src={cat} alt="" className='w-[158px] h-[191px]'/>
            <p className='text-[#5E5E5E] text-center text-2xl font-semibold lg:mt-5 md:mt-3'>Cat</p>
          </div>
          <div className=''>
            <img src={dog} alt=""  className='w-[158px] h-[191px]'/>
            <p className='text-[#5E5E5E] text-center text-2xl font-semibold lg:mt-5 md:mt-3'>Dog</p>
          </div>
          <div className=''>
            <img src={rabbit} alt=""  className='w-[158px] h-[191px]'/>
            <p className='text-[#5E5E5E] text-center text-2xl font-semibold lg:mt-5 md:mt-3'>Rabbit</p>
          </div>
          <div className=''>
            <img src={hamster} alt="" className='w-[158px] h-[191px]' />
            <p className='text-[#5E5E5E] text-center text-2xl font-semibold lg:mt-5 md:mt-3'>Hamster</p>
          </div>
          <div className=''>
            <img src={parrot} alt="" className='w-[158px] h-[191px]' />
            <p className='text-[#5E5E5E] text-center text-2xl font-semibold lg:mt-5 md:mt-3'>Parrot</p>
          </div>
          <div className=''>
            <img src={turtle} alt="" className='w-[158px] h-[191px]' />
            <p className='text-[#5E5E5E] text-center text-2xl font-semibold lg:mt-5 md:mt-3'>Turtle</p>
          </div>
        </div>
   </div>
  )
}

export default Animal
