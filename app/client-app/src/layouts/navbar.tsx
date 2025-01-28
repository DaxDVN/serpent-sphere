import React from 'react'
import logo from '../../public/logo-icon.png'
import { NavLink } from 'react-router-dom'
import notification from '../icon/notification.svg'
import NavbarLink from '../constants/navbarlink'
import { LogOut, Moon, Settings } from 'lucide-react'

const Navbar = () => {
  const name = 'Nguyen Van A'
  return (
    <nav>
      <div className='fixed container mx-auto flex gap-4 pl-32  justify-between border-b-2 border-[#e9ecef] bg-[#f8f9fa]'>
        <div className='flex items-center gap-12 py-4'>
          <NavLink to={'#'} className='w-fit block'>
            <img src={logo} alt='logo' className='h-12 w-12' />
          </NavLink>
          <div className=''>
            <input
              type='text'
              placeholder='Search'
              className='px-5 py-2 rounded-4xl bg-[#f8f9fa] border-b-2 border-[#e9ecef]'
            />
          </div>
        </div>

        <div className='flex'>
          <div className='flex items-center gap-12'>
            <NavbarLink info='Activity' to='#' />
            <NavbarLink info='Groups' to='#' />
            <NavbarLink info='Forums' to='#' />
            <NavbarLink info='Members' to='#' />
            <NavbarLink info='Photos' to='#' />
          </div>

          <div className='flex items-center gap-12 px-6'>
            {/* Notification icon */}
            <div>
              <div className='dropdown dropdown-center'>
                <div tabIndex={0} role='button' className='btn m-1'>
                  <img src={notification} alt='notification-icon' className='h-6 w-6' />
                </div>
                <ul tabIndex={0} className='dropdown-content menu bg-base-100 rounded-box z-[1] p-2 shadow w-92'>
                  <div className='flex justify-between px-2 py-3 font-semibold'>
                    <span>Notifications</span>
                    <span>View all</span>
                  </div>
                  <li className='h-10'>
                    <a>Item 1</a>
                  </li>
                  <li className='h-10'>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className='dropdown dropdown-end'>
                <div tabIndex={0} role='button' className='btn m-1'>
                  <img src={logo} alt='profile-icon' className='h-10' />
                </div>
                <ul tabIndex={0} className='dropdown-content menu bg-base-100 rounded-box z-[1] p-2 shadow w-92'>
                  <div className='p-4 flex items-center gap-4'>
                    <img src={logo} alt='avatar' className='w-12 h-12' />
                    <span>Hello, {name} </span>
                  </div>
                  <li className='h-10'>
                    <a className=''>View your profile</a>
                  </li>
                  <li className='h-10'>
                    <div>
                      <Moon />
                      <a>Display & accessibility</a>
                    </div>
                  </li>
                  <li className='h-10'>
                    <div>
                      <Settings />
                      <a>Settings & privacy</a>
                    </div>
                  </li>
                  <li className='h-10'>
                    <div>
                      <LogOut />

                      <a>Log out</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
