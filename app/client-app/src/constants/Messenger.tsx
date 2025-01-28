import React from 'react'
import logo from '../../public/logo-icon.png'

export default function Messenger() {
  return (
    <>
      <div className='collapse bg-base-200 w-76 fixed bottom-0 right-0 border-2 border-[#e9ecef] '>
        <input type='checkbox' />
        <div className='collapse-title text-x font-medium flex gap-4'>
          <img src={logo} alt='avatar' className='w-6 h-6' />
          <span>Messenger</span>
        </div>
        <div className='collapse-content'>
          <input
            type='text'
            placeholder='Search member...'
            className='w-full h-8 p-3 rounded-4xl border-2 border-[#ced4da]'
          />
        </div>
      </div>
    </>
  )
}
