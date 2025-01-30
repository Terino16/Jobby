"use client";
import React from "react";

import { CompanyFormSchema } from "@/constants/schemas/CompanyForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";

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
import RegionSelect from "../ui/region-select";

type Props = {};

export default function CompanyForm(props: Props) {
  const form = useForm<z.infer<typeof CompanyFormSchema>>({
    resolver: zodResolver(CompanyFormSchema),
    defaultValues: {
      name: "",
      email: "",
      linkedin: "",
      website: "",
      description: "",
      location: "",
      country: "India",
      address:""
    },
  });

  function onSubmit(values: z.infer<typeof CompanyFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                  <FormDescription>
                    This is your Company public display name.
                  </FormDescription>
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
                  <FormDescription>
                    This is your Company public Linkedin Page.
                  </FormDescription>
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
                  <FormDescription>This is your Company Email.</FormDescription>
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
                  <FormDescription>
                    This is your Company Website URL.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex items-center justify-around gap-4 ">
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Head-Office Address</FormLabel>
                  <FormControl>
                    <Input placeholder="304 NYC Brooklyn" {...field} />
                  </FormControl>
                  <FormDescription>Company Office Address.</FormDescription>
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
                  <Input placeholder="www.google.com" {...field} />
                  <FormDescription>
                    This is your Company Website URL.
                  </FormDescription>
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
                  <FormDescription>Company Office Address.</FormDescription>
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
                  <FormDescription>
                    HeadOffice Country
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
