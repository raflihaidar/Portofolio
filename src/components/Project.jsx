import React from 'react'
import BokingStore from '../img/booking-store.png'
import OnlineStore from '../img/online-store.png'
import NoteApp from '../img/note-app.png'
import Starbucks from '../img/starbucks.png'

const Project = () => {
  return (
    <div className='w-4/5 m-auto text-center py-56' id='Projects'>
      <div className='text-3xl font-semibold mb-5'>
        Project
      </div>
      <div className='grid gap-5 md:grid-cols-2 md:gap-x-2'>
        <div className='w-4/5 md:w-3/5 m-auto border-2 shadow-gray-800 shadow-sm'>
          <img src={BokingStore} alt="gambar" />
          <p>Booking Store</p>
        </div>

        <div className='w-4/5 md:w-3/5 m-auto border-2 shadow-gray-800 shadow-sm'>
          <img src={OnlineStore} alt="gambar" />
          <p>Online Store</p>
        </div>

        <div className='w-4/5  md:w-3/5 m-auto border-2 shadow-gray-800 shadow-sm'>
          <img src={NoteApp} alt="gambar" />
          <p>Note Taker App</p>
        </div>

        <div className='w-4/5  md:w-3/5 m-auto border-2 shadow-gray-800 shadow-sm'>
          <img src={Starbucks} alt="gambar" />
          <p>Starbucks Clone</p>
        </div>

      </div>
    </div>
  )
}

export default Project