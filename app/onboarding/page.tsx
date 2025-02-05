import React from 'react'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import OnboardingForm from '@/components/onboarding/OnboardingForm'
import { getOnboardingStatus } from '@/actions/onboarding/getOnboarding'


export default async function Page() {
  const session = await auth()
 
  if (!session?.user) 
    redirect('/auth/login')

  const {onboarding} = await getOnboardingStatus();

  if (onboarding?.onboarding) {
    redirect('/dashboard')
  }

  return (
    <div className='m-auto flex items-center justify-center '>
      <OnboardingForm/>
    </div>
  )
}