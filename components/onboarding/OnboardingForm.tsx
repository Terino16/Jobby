import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CompanyForm from './CompanyForm'
import JobSeeker from './JobSeekerForm'


type Props = {}

const OnboardingForm = (props: Props) => {
  return (
    <div className=''>
    <Tabs defaultValue="jobseeker" className="lg:w-[800px] md:w-[650px]">
    <TabsList className='w-full'>
      <TabsTrigger value="jobseeker" className='w-full'>Job Seeker</TabsTrigger>
      <TabsTrigger value="company" className='w-full'>Company</TabsTrigger>
    </TabsList>
    <TabsContent value="jobseeker"><JobSeeker/></TabsContent>
    <TabsContent value="company"><CompanyForm/></TabsContent>
  </Tabs>
  </div>
  
  )
}

export default OnboardingForm