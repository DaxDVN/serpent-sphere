import React, { useState } from 'react'
import logo from '../../../../../public/logo-icon.png'
import { Earth, UserRound, Users } from 'lucide-react'

const NewFeed = () => {
  const name = 'Nguyen Van A'

  const [isOpen, setIsOpen] = useState(false)

  const handleToggleModal = () => {
    setIsOpen(!isOpen)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Form submitted!')
    setIsOpen(false)
  }

  const [isOpenOption, setIsOpenOption] = useState(false)
  const [selectedGender, setSelectedGender] = useState('Public')

  const options = [
    { label: 'Public', icon: <Earth /> },
    { label: 'Friends', icon: <Users /> },
    { label: 'Only me', icon: <UserRound /> }
  ]

  const handleSelect = (options) => {
    setSelectedGender(options.label)
    setIsOpenOption(false)
  }

  return (
    <div className='border-2 border-[#e9ecef] w-156'>
      {/* Nút mở Popup */}
      <button onClick={handleToggleModal} className='block w-full text-left px-4 py-2 hover:bg-gray-100'>
        <div className='flex items-center gap-4'>
          <img src={logo} alt='avatar' className='w-10 h-10' />
          <span>What's on your mind?</span>
        </div>
      </button>

      {/* Popup */}
      {isOpen && (
        <div className='fixed inset-0 bg-white bg-opacity-700 flex items-center justify-center z-50'>
          <div className='bg-white w-[90%] max-w-md rounded-lg shadow-lg p-6 relative'>
            {/* Close Button */}
            <button onClick={handleToggleModal} className='absolute top-3 right-3 text-gray-600 hover:text-gray-900'>
              ✖
            </button>

            <form onSubmit={handleSubmit} className='space-y-4'>
              <h2 className='text-xl font-semibold text-gray-800 text-center'>Create post</h2>

              <div>
                <div className='flex items-center my-2 gap-4'>
                  <img src={logo} alt='avatar' className='w-12 h-12' />
                  <div>
                    <label htmlFor='name' className='block font-medium text-gray-600 text-lg'>
                      {name}
                    </label>
                    <div className='relative inline-block text-left'>
                      {/* Button hiển thị lựa chọn hiện tại */}
                      <button
                        onClick={() => setIsOpenOption(!isOpenOption)}
                        className='flex justify-between px-1.5 py-0.5 w-24 bg-white border border-gray-300 rounded-md shadow-sm text-left text-xs text-gray-700 hover:bg-gray-100 focus:outline-none items-center'
                      >
                        {/* Hiển thị icon và giá trị đã chọn */}
                        {options.find((g) => g.label === selectedGender)?.icon}
                        {selectedGender}
                        <span className='ml-auto'>▼</span>
                      </button>

                      {/* Dropdown menu */}
                      {isOpenOption && (
                        <div className='absolute mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg z-10 text-xs'>
                          {options.map((options) => (
                            <div
                              key={options.label}
                              onClick={() => handleSelect(options)}
                              className='px-4 py-2 flex items-center text-gray-700 hover:bg-gray-100 cursor-pointer'
                            >
                              {options.icon}
                              {options.label}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <input
                  type='text'
                  id='name'
                  placeholder={`What's on your mind, ${name}?`}
                  required
                  className='w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div>

              <div className='flex justify-end space-x-2'>
                <button type='submit' className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700'>
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default NewFeed
