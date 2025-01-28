import React from 'react'
import NewFeed from './NewFeed'
import Feeds from './Feeds'

export default function Homepage() {
  return (
    <div className=' flex flex-col items-center gap-4 my-24 '>
      <NewFeed />
      <Feeds />
    </div>
  )
}
