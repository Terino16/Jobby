"use server"

import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
interface Job {
  title: string;
  description: string;
  location: string;
  salary: string;
}

export async function createJob(job: Job) {
  const session = await auth();

  if(!session?.user)
    return {status:401,message:"Unauthorized"};

  const company = await prisma.company.findUnique({
    where: {
      userId: session.user.id
    }
  });

  if(!company)
    return {status:401,message:"No company found"};

  const {title,description,location,salary}=job;
  
  try{
  const newJob = await prisma.job.create({ data: {title,description,location,salary,status:"ACTIVE",companyId:company.id} });
  return {status:200,message:"Job created successfully"};
  }
  catch(error){
    return {status:500,message:"Error creating job"};
  } 
}