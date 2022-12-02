import React from 'react'
interface Props{
    // Icon:(props: SVGProps<SVGSVGElement>)=> JSX.Element,
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
    title: string
}
const SidebarRow = ({Icon, title}:Props) => {
  return (
    <div className="flex items-center  max-w-fit cursor-pointer space-x-2 px-2 py-3 rounded-full hover:bg-gray-100 transition-all duration-200 group">
          <Icon className='h-6 w-6'/>
          <p className="group-hover:text-twitter">{title}</p>
    </div>
  )
}

export default SidebarRow
