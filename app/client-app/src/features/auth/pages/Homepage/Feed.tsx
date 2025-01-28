import React from 'react'
import logo from '../../../../../public/logo-icon.png'
import { Ellipsis, MessageCircle, Share2, ThumbsUp } from 'lucide-react'

export default function Feed() {
  const name = <b className='text-base'>Nguyen Van A</b>
  const time = '2 days ago'
  const content =
    'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
  return (
    <div className='flex flex-col gap-2 border-2 border-[#e9ecef] w-156 px-4 py-2 rounded-2xl'>
      <div className='flex items-center gap-4'>
        <img src={logo} alt='avatar' className='w-10 h-10' />
        <div className='flex items-center'>
          <div>
            <label htmlFor='name' className='block font-medium text-gray-600 text-lg'>
              {name} posted an update
            </label>
            <span>{time}</span>
          </div>
          {/* <Ellipsis /> */}
        </div>
      </div>
      <div className='border-b-2 pb-2 border-[#dee2e6]'>
        <span className='w-46 break-words '>{content}</span>
      </div>
      <div className='grid grid-cols-3 justify-items-center border-b-2 pb-2 border-[#dee2e6] '>
        <button className='flex flex-row gap-4'>
          <ThumbsUp />
          <span>Like</span>
        </button>
        <button className='flex flex-row gap-4'>
          <MessageCircle />
          <span>Comment</span>
        </button>
        <button className='flex flex-row gap-4'>
          <Share2 />
          <span>Share</span>
        </button>
      </div>
      <div className='flex gap-4 items-center'>
        <img src={logo} alt='avatar' className='w-8 h-8' />
        <input
          type='text'
          placeholder='Type a comment...'
          className='w-full rounded-2xl border-2 border-[#dee2e6] h-10 px-3 '
        />
      </div>
    </div>
  )
}
