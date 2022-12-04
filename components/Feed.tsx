import { RefreshIcon } from '@heroicons/react/outline'
import React from 'react'
import { TweetBox } from './TweetBox'

const Feed = () => {
  return (
    //taking 5 of the columns 
    <div className='col-span-7 border-x  lg:col-span-5'>
    <div className='flex items-center justify-between'>
      <h1 className='text-xl font-bold p-5 pb-0'>home</h1>
      <RefreshIcon className="h-8 w-8 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125"/>
      </div>
      <TweetBox/>
      </div>
  )
}

export default Feed
 