
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ModeToggle } from './theme-toggle'
import { Button } from '../ui/button'
import { UserComponent } from "./UserComponent"
import { auth } from "@/lib/auth"


const Navbar =  async () => {
  const session = await auth()
  
  
  return (
     <nav className='absolute top-0 left-0 right-0 flex items-center justify-between p-5'>
        <div className='flex items-center'>
          <Image  width={32} height={32} src='/Jobby_Logo.png' alt='logo' />
          <h1 className='text-[30px] tracking-tighter font-bold m-2 pt-2'>Jobby</h1>
        </div>
        <div className='flex items-center space-x-4 '>
        <ModeToggle />
          {session ? (
            <UserComponent/>
          ) : (
            <Button>
            <Link href='/auth/login'>Login</Link>
          </Button>
          )
          }
        </div>
     </nav>
  )
}

export default Navbar