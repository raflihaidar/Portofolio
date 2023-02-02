import React from 'react'
import BokingStore from '../img/booking-store.png'
import OnlineStore from '../img/online-store.png'
import NoteApp from '../img/note-app.png'
import Starbucks from '../img/starbucks.png'

const Project = () => {
  return (
    <div className='w-4/5 m-auto text-center py-56' id='Projects'>
      <div className='text-3xl font-semibold mb-16'>
        Project
      </div>
      <div className='grid gap-5 md:grid-cols-2 md:gap-x-2'>

        <a href="https://github.com/raflihaidar/Booking-Store" target='_blank'>
          <div className='w-4/5 md:w-3/5 m-auto border-2 shadow-gray-800 shadow-sm cursor-pointer'>
            <img src={BokingStore} alt="gambar" />
            <p>Booking Store</p>
          </div>
        </a>
        
        <a href="https://github.com/raflihaidar/Online-Store" target='_blank'>
          <div className='w-4/5 md:w-3/5 m-auto border-2 shadow-gray-800 shadow-sm cursor-pointer'>
            <img src={OnlineStore} alt="gambar" />
            <p>Online Store</p>
          </div>
        </a>
        
        <a href="https://github.com/raflihaidar/Note-Taker-App" target='_blank'>
          <div className='w-4/5  md:w-3/5 m-auto border-2 shadow-gray-800 shadow-sm cursor-pointer'>
            <img src={NoteApp} alt="gambar" />
            <p>Note Taker App</p>
          </div>
        </a>

        <a href="https://github.com/raflihaidar/Note-Taker-App" target='_blank'>
          <div className='w-4/5  md:w-3/5 m-auto border-2 shadow-gray-800 shadow-sm cursor-pointer'>
            <img src={Starbucks} alt="gambar" />
            <p>Starbucks Clone</p>
          </div>
        </a>

      </div>
    </div>
  )
}

export default Project