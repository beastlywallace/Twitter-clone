import { RefreshIcon } from '@heroicons/react/outline'
import React from 'react'

const Feed = () => {
  return (
    <div className='flex items-center justify-between border-8'>
      <h1 className='text-xl font-bold p-5 pb-0'>home</h1>
      <RefreshIcon className="h-8 w-8 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125"/>
    </div>
  )
}

export default Feed
 