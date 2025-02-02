"use client";
import React, { useState } from "react";
import { JobSeekerFormSchema } from "@/constants/schemas/JobSeekerForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createJobSeeker } from "@/actions/onboarding/createJobSeeker";
import { GeneralSubmitButton } from "../general/SubmitButtons";

export default function JobSeekerForm() {
  const form = useForm<z.infer<typeof JobSeekerFormSchema>>({
    resolver: zodResolver(JobSeekerFormSchema),
    defaultValues: {
      photo: "",
      resume: "",
      achievements: "",
      skills: "",
    },
  });

  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [pdffile, setPdfFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleResumeFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setPdfFile(selectedFile);
    }
  };

  const uploadFile = async () => {
    if (!file) return null;
    try {
      setUploading(true);
      const data = new FormData();
      data.append("file", file);
      const response = await fetch("/api/files", {
        method: "POST",
        body: data,
      }).then((res) => res.json());

      if (response.status === 200) {
        return response.url;
      } else {
        alert("Photo upload failed!");
        return null;
      }
    } catch (error) {
      console.error(error);
      alert("Trouble uploading photo");
      return null;
    } finally {
      setUploading(false);
    }
  };

  const uploadResume = async () => {
    if (!pdffile) return null;
    try {
      setUploading(true);
      const data = new FormData();
      data.append("file", pdffile);
      const response = await fetch("/api/files", {
        method: "POST",
        body: data,
      }).then((res) => res.json());

      if (response.status === 200) {
        return response.url;
      } else {
        alert("Resume upload failed!");
        return null;
      }
    } catch (error) {
      console.error(error);
      alert("Trouble uploading resume");
      return null;
    } finally {
      setUploading(false);
    }
  };

  async function onSubmit(values: z.infer<typeof JobSeekerFormSchema>) {
    setUploading(true);

    const [photoUrl, resumeUrl] = await Promise.all([
      uploadFile(),
      uploadResume(),
    ]);

    if (photoUrl) {
      form.setValue("photo", photoUrl);
      await form.trigger("photo"); // Revalidate field
    }

    if (resumeUrl) {
      form.setValue("resume", resumeUrl);
      await form.trigger("resume"); // Revalidate field
    }

    if (!photoUrl || !resumeUrl) {
      alert("Please upload both the Photo and Resume before submitting.");
      setUploading(false);
      return;
    }

    console.log(values);

    const response = await createJobSeeker(values);
    console.log(response);
    if (response.status == 200) {
      router.push("/dashboard");
      setUploading(false);
    }
  }

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(form.getValues()); // ✅ Manually trigger onSubmit after file upload
          }}
          className="space-y-6 flex-col items-center justify-center"
        >
          <div className="flex flex-col items-center justify-center space-y-4 py-4 w-full">
            <Avatar className="w-24 h-24 border">
              {preview ? (
                <AvatarImage src={preview} alt="Profile Photo" />
              ) : (
                <AvatarFallback>NA</AvatarFallback>
              )}
            </Avatar>

            <FormField
              name="photo"
              control={form.control}
              render={() => (
                <FormItem>
                  <FormLabel>Profile Photo</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="skills"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Skills</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe your skills"
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
                    placeholder="List your achievements"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="resume"
            control={form.control}
            render={() => (
              <FormItem>
                <FormLabel>Resume</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    accept="application/pdf"
                    onChange={handleResumeFileChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

         <GeneralSubmitButton text="Submit" />
        </form>
      </Form>
    </div>
  );
}
