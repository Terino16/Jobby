import React from 'react'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import OnboardingForm from '@/components/onboarding/OnboardingForm'
type Props = {}

export default async function Page(props: Props) {
  const session = await auth()
 
  if (!session?.user) 
    redirect('/')
  return (
    <div className='m-auto flex items-center justify-center '>
      <OnboardingForm/>
    </div>
  )
}