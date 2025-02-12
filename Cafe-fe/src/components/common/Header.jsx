import React from 'react'
import logo from '../../assets/logo.svg'    
import { Bell, Search, User, ShoppingCart } from 'lucide-react'
const Header = () => {
  return (
    <header className='flex justify-between items-center pt-4 pb-2 px-8 bg-black'>
       {/* Logo */}
       <div className='flex items-center gap-2'>
        <img src={logo} alt='logo' className='w-13 h-11' />
        <h1 className='text-2xl font-semibold text-white'>Empire</h1>
       </div>

       {/* Search Bar */}
       <div className='flex items-center gap-4 bg-black p-2 rounded-md text-white'>
       <Search className='w-5 h-5 text-white' />
        <input type='text' placeholder='Search' className=' p-2 rounded-md outline-none bg-transparent text-white' />
        
       </div>

       {/* User Icon */}
       <div className='flex items-center justify-center gap-6'>
        <div className='flex items-center '>
        <Bell className='w-6 h-6 text-white' />
        </div>
        <div className='flex items-center gap-2 '>
        <User className='w-7 h-7 text-white' />
        <div className='flex items-center flex-col gap-2'>
        <h1 className='text-white text-sm font-semibold'>{"Abdul Azees"}</h1>
        <p className='text-white text-xs font-medium'>{"admin"}</p>
        </div>
        </div>
        
       </div>
       
       
    </header>
  )
}

export default Header