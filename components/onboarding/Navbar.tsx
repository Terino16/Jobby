"use client"
import { useSession } from "next-auth/react"
import React from 'react'
import Image from 'next/image'
import { ModeToggle } from "../general/theme-toggle"
import UserAvatar from "../general/UserAvatar"
import { redirect } from "next/navigation"

type Props = {}

const Navbar =  (props: Props) => {
  const { data: session } = useSession();


  return (
     <nav className='flex items-center justify-between py-5'>
        <div className='flex items-center'>
          <Image  width={32} height={32} src='/Jobby_Logo.png' alt='logo' />
          <h1 className='text-[30px] tracking-tighter font-bold m-2 pt-2'>Jobby</h1>
        </div>
        <div className='flex items-center space-x-4'>
        <ModeToggle />
         {session  &&  (
            <UserAvatar user={session?.user}/>  )}
        </div>
     </nav>
  )
}

export default Navbar