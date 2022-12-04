import React from 'react'
import { CalculatorIcon, EmojiHappyIcon, LocationMarkerIcon, PhotographIcon, SearchIcon } from '@heroicons/react/outline'
export const TweetBox = () => {
  return (
      <div>
          <img className="h-6 rounded-full object-cover mt-4" 
              src="https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236__340.png" alt='' />
          <div>
              <form>
                  <input type="text" placeholder="what's happening" /><div>
                      <div className='flex space-x-2 text-twitter'>
              <PhotographIcon className='h-5 w-5' />
              <SearchIcon className='h-5 w-5' />
              <EmojiHappyIcon className='h-5 w-5' />
              <CalculatorIcon className='h-5 w-5' />
              <LocationMarkerIcon className='h-5 w-5' />
              
                      </div>
                      <button className='text-white px-5 py-2 font-bold'>Tweet</button>
                  </div>
            </form>
          </div>
       
    </div>
  )
}
