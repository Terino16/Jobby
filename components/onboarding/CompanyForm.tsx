"use client";
import React from "react";
import { useState } from "react";
import { CompanyFormSchema } from "@/constants/schemas/CompanyForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea"


import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CountrySelect from "../ui/country-select";

type Props = {};

export default function CompanyForm(props: Props) {
  const form = useForm<z.infer<typeof CompanyFormSchema>>({
    resolver: zodResolver(CompanyFormSchema),
    defaultValues: {
      companyLogo: "",
      name: "",
      email: "",
      linkedin: "",
      website: "",
      description: "",
      country: "",
      address: "",
    },
  });

  function onSubmit(values: z.infer<typeof CompanyFormSchema>) {
    console.log("Form Submitted:", values);
    console.log("Form Errors:", form.formState.errors);
    console.log("HI")
  }

  const [preview, setPreview] = useState<string | null>(null);


  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-col items-center justify-center">

          <div className="flex flex-col items-center justify-center space-y-4 py-4 w-full">
            <Avatar className="w-24 h-24 border">
              {preview ? (
                <AvatarImage src={preview} alt="Company Logo" />
              ) : (
                <AvatarFallback>NA</AvatarFallback>
              )}
            </Avatar>

            <FormField
              name="companyLogo"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel></FormLabel>
                  <FormControl>
                    <Input
                      id="picture"
                      type="file"
                      accept="image/*"
                      onChange={(event) => {
                        const file = event.target.files?.[0];
                        if (file) {
                          const imageUrl = URL.createObjectURL(file);
                          setPreview(imageUrl);
                          field.onChange(imageUrl); // ✅ Updates form state
                        }
                      }}
                      
                    />
                  </FormControl>
                 
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex items-center justify-around gap-4 ">
            <FormField
              control={form.control}
              name="name"
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
              name="linkedin"
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

          <div className="flex items-center justify-around gap-4 ">
            <FormField
              control={form.control}
              name="email"
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
              name="website"
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
         
          <div className="flex items-center justify-around gap-4 ">
            <FormField
              control={form.control}
              name="address"
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
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Head-Office Country</FormLabel>
                  <CountrySelect onChange={field.onChange} />
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
          <Button type="submit" >Submit</Button>
        </form>
      </Form>
    </div>
  );
}
