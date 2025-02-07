"use server"

import { prisma } from "@/lib/prisma";
interface Job {
  title: string;
  description: string;
  location: string;
  salary: string;
  companyId: string;
}

export async function createJob(job: Job) {
    const {title,description,location,salary,companyId}=job;
    try{
  const newJob = await prisma.job.create({ data: {title,description,location,salary,companyId,status:"ACTIVE"} });
  return {status:200,message:"Job created successfully"};
  }
  catch(error){
    return {status:500,message:"Error creating job"};
  } 
}