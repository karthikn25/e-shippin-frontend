import React from 'react'
import Topbar from './Topbar'

export default function  Base({children}) {
  return (
    <div className='h-screen w-screen overflow-auto hide-scrollbar'>
    <div className='sticky top-2.5 h-1/6 mx-5 my-0'>
    <Topbar/>
    </div>
    <div className='mx-8 overflow-x-hidden'>
    {children}
    </div>
    <div className='block sticky bottom-0 md:hidden '>
    <div className='h-30 bg-indigo-300'>
    <ul className='flex justify-around text-white '>
    <li><i class='bx bx-home-alt hover:text-red-400 cursor-pointer'></i></li>
    <li><i class='bx bx-category hover:text-red-400 cursor-pointer'></i></li>
    <li><i class='bx bx-cart hover:text-red-400 cursor-pointer'></i></li>
    <li><i class='bx bx-user hover:text-red-400 cursor-pointer'></i></li>
    </ul>
    </div>
    </div>
    </div>
  )
}
