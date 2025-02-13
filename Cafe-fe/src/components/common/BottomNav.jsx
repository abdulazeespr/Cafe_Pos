import React from 'react'
import { FaHome } from 'react-icons/fa'
import { MdOutlineReorder } from 'react-icons/md'
import { MdTableBar } from 'react-icons/md'
import { IoIosMore } from 'react-icons/io'
import { BiSolidDish } from 'react-icons/bi'
const BottomNav = () => {
  return (
    <div className='fixed bottom-0 left-0 right-0 bg-slate-950 text-gray-400 flex justify-between items-center px-10 py-2'>
        <button
        className='inline-flex items-center gap-2 bg-slate-800 p-2 rounded-sm w-56'
        ><FaHome /> Home</button>
        <button
        className='inline-flex items-center gap-2 p-2 rounded-sm w-56'
        ><MdOutlineReorder /> Orders</button>
        <button
        className='inline-flex items-center gap-2 p-2 rounded-sm w-56'
        ><MdTableBar /> Tables</button>
        <button
        className='inline-flex items-center gap-2 p-2 rounded-sm w-56'
        ><IoIosMore /> More</button>

        <button className='absolute bottom-7 left-1/2 -translate-x-1/2 bg-yellow-500 text-white p-2 rounded-full w-16 h-16 flex items-center justify-center'>
        <BiSolidDish size={40} />
        </button>
    </div>
  )
}

export default BottomNav