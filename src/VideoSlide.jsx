import React from 'react'
import {frame1,frame2,frame3,frame4,frame5,frame6,frame7,frame8} from './assets/assets'

const VideoSlide = () => {
  return (
    <div>
      <div className='grid grid-cols-8 gap-3 lg:ml-20 md:ml-10 lg:mb-24 md:mb-10'>
        <img src={frame1} alt="" />
        <img src={frame2} alt="" />
        <img src={frame3} alt="" />
        <img src={frame4} alt="" />
        <img src={frame5} alt="" />
        <img src={frame6} alt="" />
        <img src={frame7} alt="" />
        <img src={frame8} alt=""  className='lg:max-h-[200px]'/>
      </div>
    </div>
  )
}

export default VideoSlide
