"use client";
import React from "react";
import { useState } from "react";
import { CompanyFormSchema } from "@/constants/schemas/CompanyForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { createCompany } from "@/actions/onboarding/createCompany";
import { useRouter } from 'next/navigation'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import CountrySelect from "../ui/country-select";
import { GeneralSubmitButton } from "../general/SubmitButtons";




export default function CompanyForm() {

  const form = useForm<z.infer<typeof CompanyFormSchema>>({
    resolver: zodResolver(CompanyFormSchema),
    defaultValues: {
      companyLogo :"",
      companyName :"",
      companyEmail  :"",
      companyAbout :"",
      companyLinkedin :"",
      companyWebsite:"",
      companyAddress:"",
      companyCountry:"",
    },
  });

  const router = useRouter()

   async function onSubmit(values: z.infer<typeof CompanyFormSchema>) {
    const response=await createCompany(values);
    console.log(response);
    if(response.status==200)
    {
      router.push('/dashboard')
    }

  }

  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  // Handle File Selection & Preview
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile)); // Show preview
    }
  };

  const uploadFile = async () => {
    if (!file) {
      alert("No file selected");
      return;
    }

    try {
      setUploading(true);
      const data = new FormData();
      data.append("file", file);
      const uploadRequest = await fetch("/api/files", {
        method: "POST",
        body: data,
      });
      const response = await uploadRequest.json();
      console.log(response);

      if (response.status == 200) {
        form.setValue("companyLogo", response.url);
        alert("File uploaded successfully!");
      } else {
        alert("File upload failed!");
      }
    } catch (error) {
      console.error(error);
      alert("Trouble uploading file");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 flex-col items-center justify-center"
        >
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
              render={({  }) => (
                <FormItem>
                  <FormLabel></FormLabel>
                  <FormControl>
                    <Input
                      id="picture"
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="button"
              onClick={uploadFile}
              disabled={uploading}
              className="mt-2"
            >
              {uploading ? "Uploading..." : "Upload Logo"}
            </Button>
          </div>

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
            <FormField
              control={form.control}
              name="companyCountry"
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
          <GeneralSubmitButton text="Submit"/>
        </form>
      </Form>
    </div>
  );
}
