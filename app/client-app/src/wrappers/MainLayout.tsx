import React from 'react'
import Navbar from '../layouts/Navbar'
import Sidebar from '../layouts/Sidebar'
import Messenger from '../constants/Messenger'
import Homepage from '../features/auth/pages/Homepage/Homepage'
// import Sidebar from '../layouts/sidebar'

const MainLayout = () => {
  return (
    <div className='flex flex-col h-screen relative'>
      <Sidebar />
      <Navbar />
      <Homepage />
      <Messenger />
    </div>
  )
}
export default MainLayout
