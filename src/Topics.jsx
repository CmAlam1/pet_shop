import React from 'react'
import {carretDown} from './assets/assets'

const Topics = () => {
return (
<div className='flex justify-evenly lg:gap-10 md:gap-7 lg:px-50 md:px-30 sm:px-10 h-12 self-stretch bg-[#88B392] lg:mt-6 md:mt-4'>
    <div className='flex text-white text-xl mt-3'>
<p>Dogs</p>
<img src={carretDown} alt="" className='pb-2'/>
    </div>
    <div className='flex text-white text-xl mt-3'>

<p>Cats</p>
<img src={carretDown} alt=""  className='pb-2'/>
    </div>
    <div className='flex text-white text-xl mt-3'>

<p>Small Animals</p>
<img src={carretDown} alt=""  className='pb-2'/>
    </div>
    <div className='flex text-white text-xl mt-3'>

<p>Birds</p>
<img src={carretDown} alt=""  className='pb-2'/>
    </div>
    <div className='flex text-white text-xl mt-3'>

<p>Fishs</p>
<img src={carretDown} alt=""  className='pb-2'/>
    </div>
</div>
)
}

export default Topics
