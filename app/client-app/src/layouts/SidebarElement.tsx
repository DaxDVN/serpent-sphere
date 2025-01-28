import React from 'react'
import { NavLink } from 'react-router-dom'

interface Props {
  tag: string
  path: string
  icon: unknown
  isOpen: boolean
}

export const SidebarElement = ({ tag, path, icon, isOpen }: Props) => {
  return (
    <NavLink to={path} className='flex items-center gap-4 text-gray-700 hover:text-gray-900'>
      <div className='w-6 h-6'>{icon}</div>
      {isOpen && <span>{tag}</span>}
    </NavLink>
  )
}
