"use client";
import React from "react";
import { CompanyUpdateFormSchema } from "@/constants/schemas/CompanyUpdateForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";
import { GeneralSubmitButton } from "@/components/general/SubmitButtons";
import { useToast } from "@/hooks/use-toast";
import { updateCompany } from "@/actions/dashboard/company/settings/updateCompany";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface Company {
    company:{
        id:string;
        companyName: string;
        companyEmail: string;
        companyAbout: string;
        companyLinkedin: string;
        companyWebsite: string;
        companyAddress: string;
    } |null
}



export default function CompanySettingPage({company}:Company) {
    const {toast}=useToast();
    const form = useForm<z.infer<typeof CompanyUpdateFormSchema>>({
        resolver: zodResolver(CompanyUpdateFormSchema),
        defaultValues: {
        id:company?.id || "",
          companyName: company?.companyName || "",
          companyEmail: company?.companyEmail || "",
          companyAbout: company?.companyAbout || "",
          companyLinkedin: company?.companyLinkedin || "",
          companyWebsite: company?.companyWebsite || "",
          companyAddress: company?.companyAddress || "",
        },
      });

      async function onSubmit(values: z.infer<typeof CompanyUpdateFormSchema>) {
        const response = await updateCompany(values);
        if (response.status == 200) {
          toast({
            title: "Company updated successfully",
            description: "Your company profile has been updated successfully",
          });
        }
      }






  return (
    <div className="flex items-center justify-center gap-4 max-w-6xl mx-auto">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6  flex-col items-center justify-center w-full">

          <div className="flex md:flex-row flex-col space-y-2 md:space-y-0 items-center justify-around gap-4 ">
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="companyLinkedin"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Company Linkedin</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex md:flex-row flex-col space-y-2 md:space-y-0 items-center justify-around gap-4  ">
            <FormField
              control={form.control}
              name="companyEmail"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Company Email</FormLabel>
                  <FormControl>
                    <Input placeholder="company@gmail.com" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="companyWebsite"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Company Website</FormLabel>
                  <FormControl>
                    <Input placeholder="www.company.com" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex md:flex-row flex-col space-y-2 md:space-y-0 items-center justify-around gap-4">
            <FormField
              control={form.control}
              name="companyAddress"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Head-Office Address</FormLabel>
                  <FormControl>
                    <Input placeholder="WhiteField, Banglore" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
           
          </div>
          <FormField
            control={form.control}
            name="companyAbout"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>About Company</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us a little bit about Company"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <GeneralSubmitButton text="Update"/>
        </form>
      </Form>
    </div>
  );
}
