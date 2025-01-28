import React, { useState } from 'react'
import { Grid2x2, Settings, SquareChartGantt, UserRound, UserRoundPlus, Users } from 'lucide-react'
import { SidebarElement } from './SidebarElement'
interface Props {
  tag: string
  path: string
  icon: unknown
}
const NAVLINK: Props[] = [
  { tag: 'My Timeline', path: 'dfd', icon: <SquareChartGantt className='w-6 h-6' /> },
  { tag: 'My Profile', path: 'dfd', icon: <UserRound className='w-6 h-6' /> },
  { tag: 'My Friends', path: 'dfd', icon: <UserRoundPlus className='w-6 h-6' /> },
  { tag: 'My Groups', path: 'dfd', icon: <Users className='w-6 h-6' /> }
]

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`fixed top-0 left-0 h-full bg-gray-100 ${isOpen ? 'w-56' : 'w-20'}`}>
      <div className='flex flex-col h-full px-6 py-7 justify-between'>
        <div>
          <div className='flex items-start pb-16' onClick={handleClick}>
            <Grid2x2 />
          </div>

          <div className='flex flex-col gap-6'>
            {NAVLINK.map((e, i) => (
              <SidebarElement tag={e.tag} key={i} icon={e.icon} path={e.path} isOpen={isOpen} />
            ))}
          </div>
        </div>

        <SidebarElement tag={'Settings'} icon={<Settings className='w-6 h-6' />} path={''} isOpen={isOpen} />
      </div>
    </div>
  )
}

export default Sidebar
