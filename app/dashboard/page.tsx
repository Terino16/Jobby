import { findRole } from '@/actions/general/findRole';
import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth';
import React from 'react';
import { serverAction } from "@/actions/dashboard/setcookie";

const Page = async () => {
  const session = await auth();
  if (!session?.user?.id) return redirect('/login');

  const user = await findRole();
  if (!user.id) return <div>Company not found</div>;


  if (user.role) {
    return redirect(`/dashboard/jobseeker`); // Ensure redirect is returned
  } else {
    return redirect(`/dashboard/company/home`); // Ensure redirect is returned
  }

  return <div>page</div>;
};

export default Page;
