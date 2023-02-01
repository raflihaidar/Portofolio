import React from 'react'
import hero from '../img/hero1.png'


const Dashbord = () => {
  return (
    <div className='pt-44'>
      <div className='w-4/5 m-auto flex justify-center p-7 items-center'>
        <div className="text-black-100 xl:w-3/5 ml-10">
          <div className='text-5xl font-bold'>Hi. I'm <span className='text-red-700'>Ralph.</span> A Web Developer</div>
        </div>
        <div className='w-2/5 hidden md:block'>
          <img src={hero} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Dashbord;