import { findRole } from '@/actions/general/findRole';
import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth';
import React from 'react'

type Props = {}

const page = async (props: Props) => {
//   const session = await auth();
//   if(!session?.user?.id) return redirect('/login');
//   const user = await findRole(); 
//   console.log(user);

//  // const user={ message: 'Role fetched successfully', role: false, status: 200 };
//   if(user.role){
//     redirect('/dashboard/jobseeker');
//   }
//   else{
//     redirect('/dashboard/company');
//   }
   
  return (
    <div>page</div>
  )
}

export default page