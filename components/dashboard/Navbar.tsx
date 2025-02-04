
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ModeToggle } from "../general/theme-toggle"
import { Button } from "@/components/ui/button"
import { UserComponent } from "@/components/general/UserComponent"
import { auth } from "@/lib/auth"
type Props = {}

const Navbar =  async (props: Props) => {
  const session = await auth()

  
  return (
     <nav className='flex items-center justify-between py-5'>
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