import React from 'react'
import Image from 'next/image'
import { ModeToggle } from '../general/theme-toggle'


const Navbar = () => {
  return (
     <nav className='flex items-center justify-between py-5'>
        <div className='flex items-center'>
          <Image  width={32} height={32} src='/Jobby_Logo.png' alt='logo' />
          <h1 className='text-[30px] tracking-tighter font-bold m-2 pt-2'>Jobby</h1>
        </div>
        <div className='flex items-center space-x-4'>
          <ModeToggle />
        </div>
     </nav>
  )
}

export default Navbar