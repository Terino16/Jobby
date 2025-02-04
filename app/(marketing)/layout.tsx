import React from 'react'
import Navbar from '@/components/general/Navbar'


const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <Navbar/>
        {children}
    </div>
  )
}

export default layout