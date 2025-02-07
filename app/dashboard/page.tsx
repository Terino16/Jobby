import { findRole } from '@/actions/general/findRole';
import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth';
import React from 'react'

const page = async () => {
  const session = await auth();
  if(!session?.user?.id) return redirect('/login');
  const user = await findRole(); 
  if (!user.id) return <div>Company not found</div>;





  if(user.role){
    redirect('/dashboard/jobseeker');
  }
  else{
    redirect('/dashboard/company');
  }
   
  return (
    <div>page</div>
  )
}

export default page