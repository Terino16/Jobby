"use client";
import React from "react";
import { useState } from "react";
import { JobSeekerFormSchema } from "@/constants/schemas/JobSeekerForm";
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

type Props = {};


export default function JobSeekerForm (props: Props) {
  const form = useForm<z.infer<typeof JobSeekerFormSchema>>({
    resolver: zodResolver(JobSeekerFormSchema),
    defaultValues: {
      photo: "",
      resume: "",
      achievements: "",
      skills: "",
    },
  });

  const router = useRouter()

   async function onSubmit(values: z.infer<typeof JobSeekerFormSchema>) {
    console.log(values);
    // const response=await createCompany(values);
    // console.log(response);
    // if(response.status==200)
    // {
    //   router.push('/dashboard')
    // }

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
        form.setValue("photo", response.url);
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
              name="photo"
              control={form.control}
              render={({ field }) => (
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
              {uploading ? "Uploading..." : "Upload Photo"}
            </Button>
          </div>

          <FormField
            control={form.control}
            name="skills"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Skills</FormLabel>
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
           <FormField
            control={form.control}
            name="achievements"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Achievements</FormLabel>
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
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}

