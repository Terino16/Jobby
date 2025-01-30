import React from 'react'
import LoginForm from '@/components/auth/LoginForm'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function Page(){
  const session = await auth()

  if (session) redirect('/dashboard')
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center  p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <LoginForm />
      </div>
    </div>
  )
}

