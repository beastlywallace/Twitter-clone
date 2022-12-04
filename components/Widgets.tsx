import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

export const Widgets = () => {
    return (
      <div className=' col-span-2 mt-2 px-2 hidden lg:inline'>
      <div className='flex items-center space-x-2 bg-gray-100 p-3 rounded-full'>
          <SearchIcon className='h-6 w-6 text-gray-400 '/>
          <input type="text" placeholder="search twitter"  className='bg-transparent flex-1 outline-none '/>
            </div>
             <TwitterTimelineEmbed
  sourceType="profile"
  screenName="ifenedowally"
  options={{height: 400}}
/> 
            </div>
  )
}
