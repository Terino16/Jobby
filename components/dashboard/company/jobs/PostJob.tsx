"use client";
import React from "react";
import { PostJobSchema } from "@/constants/schemas/PostJobSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea"


import { useRouter } from 'next/navigation'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createJob } from "@/actions/dashboard/company/PostJob/createJob";
import { GeneralSubmitButton } from "@/components/general/SubmitButtons";




export default function CompanyForm() {

  const form = useForm<z.infer<typeof PostJobSchema>>({
    resolver: zodResolver(PostJobSchema),
    defaultValues: {
      title :"",
      description :"",
      location :"",
      salary :"",
    },
  });

  const router = useRouter()

   async function onSubmit(values: z.infer<typeof PostJobSchema>) {
    console.log(values);
    //const response=await createJob({...values,companyId:companyId});
   
    // if(response.status==200)
    // {
    //   router.push('/dashboard')
    // }

  }



  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 flex-col items-center justify-center mx-auto max-w-4xl"
        >
          <div className="flex md:flex-row flex-col space-y-2 md:space-y-0 items-center justify-around gap-4 ">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Job Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Software Engineer" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Job Location</FormLabel>
                  <FormControl>
                    <Input placeholder="company@gmail.com" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          
          </div>

          <div className="flex md:flex-row flex-col space-y-2 md:space-y-0 items-center justify-around gap-4  ">
            <FormField
              control={form.control}
              name="salary"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Job Salary</FormLabel>
                  <FormDescription>Enter the salary range for the job.</FormDescription>
                  <FormControl>
                    <Input placeholder="20k USD ~ 30k USD" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Job Description</FormLabel>
                  <FormDescription>Enter the description for the job.</FormDescription>
                  <FormControl>
                  <Textarea
                  placeholder="We want some one with X years of experience in Y and Z. 
                  Tech Stack: A, B, C. 
                  Responsibilities: A, B, C. 
                  Requirements: A, B, C."
                  className="resize-none"
                  {...field}
                />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

         
          <GeneralSubmitButton text="Submit"/>
        </form>
      </Form>
    </div>
  );
}
