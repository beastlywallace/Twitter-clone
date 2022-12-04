import React from 'react'
import {
    BellIcon,
    HashtagIcon,
    BookmarkIcon,
    CollectionIcon, DotsCircleHorizontalIcon,
    MailIcon, UserIcon, HomeIcon
} from '@heroicons/react/outline'
import SidebarRow from './SidebarRow'
const Sidebar = () => {
  return (
      <div className=' col-span-2 flex flex-col items-center px-4 md:items-start'>
         <img className='m-3  h-10 w-10' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png'/> 
          <SidebarRow Icon={HomeIcon} title="Home" />
          <SidebarRow Icon={HashtagIcon} title="Explore" />
          <SidebarRow Icon={BellIcon} title="Notificaton" />
          <SidebarRow Icon={MailIcon} title="Message" />
          <SidebarRow Icon={BookmarkIcon} title="Bookmark" />
          <SidebarRow Icon={CollectionIcon} title="List" />
          <SidebarRow Icon={UserIcon} title="Sign in" />
          <SidebarRow Icon={DotsCircleHorizontalIcon} title="More" />
          
          
    </div>
  )
}

export default Sidebar
