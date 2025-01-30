import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CompanyForm from './CompanyForm'


type Props = {}

const OnboardingForm = (props: Props) => {
  return (
    <div className=''>
    <Tabs defaultValue="jobseeker" className="w-[800px]">
    <TabsList className='w-full'>
      <TabsTrigger value="jobseeker" className='w-full'>Job Seeker</TabsTrigger>
      <TabsTrigger value="company" className='w-full'>Company</TabsTrigger>
    </TabsList>
    <TabsContent value="jobseeker"><CompanyForm/></TabsContent>
    <TabsContent value="company">Change your password here.</TabsContent>
  </Tabs>
  </div>
  
  )
}

export default OnboardingForm