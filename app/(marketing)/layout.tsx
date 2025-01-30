import React from 'react'
import Navbar from '@/components/general/Navbar'


const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div>
        <Navbar/>
        {children}
    </div>
  )
}

export default layout