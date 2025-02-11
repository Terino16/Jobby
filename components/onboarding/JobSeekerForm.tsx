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
import { Loader2 } from "lucide-react";

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
import { Badge } from "@/components/ui/badge";
import { Popup } from "@/components/ui/Popup";
const skillOptions = ["Frontend", "React", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript", "Node.js", "Express", "MongoDB"];

export default function JobSeekerForm() {
  const form = useForm<z.infer<typeof JobSeekerFormSchema>>({
    resolver: zodResolver(JobSeekerFormSchema),
    defaultValues: {
      photo: "",
      resume: "",
      achievements: "",
      skills: [],
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

  const handleResumeFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setPdfFile(selectedFile);
    }
  };

  const handleSkillClick = (skill: string) => {
    const currentSkills = form.getValues("skills");
    if (!currentSkills.includes(skill)) {
      const updatedSkills = [...currentSkills, skill];
      if (updatedSkills.length > 0) {
        form.setValue("skills", updatedSkills as [string, ...string[]]);
      }
    }
  };

  const removeSkill = (skill: string) => {
    const updatedSkills = form.getValues("skills").filter((s: string) => s !== skill);
    form.setValue("skills", updatedSkills as [string, ...string[]]);
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
        Popup({variant: "destructive", title: "Error", description: "Photo upload failed!"});
        return null;
      }
    } catch (error) {
      console.error(error);
      Popup({variant: "destructive", title: "Error", description: "Trouble uploading photo"});
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
        Popup({variant: "destructive", title: "Error", description: "Resume upload failed!"});
        return null;
      }
    } catch (error) {
      console.error(error);
      Popup({variant: "destructive", title: "Error", description: "Trouble uploading resume"});
      return null;
    } finally {
      setUploading(false);
    }
  };

  async function onSubmit(values: z.infer<typeof JobSeekerFormSchema>) {
    setUploading(true);
  
    const [photoUrl, resumeUrl] = await Promise.all([uploadFile(), uploadResume()]);
  
    if (!photoUrl || !resumeUrl) {
      Popup({variant: "destructive", title: "Error", description: "Trouble uploading resume or photo"});
      setUploading(false);
      return;
    }
  
    form.setValue("photo", photoUrl);
    form.setValue("resume", resumeUrl);
  
    const response = await createJobSeeker({
      ...values,
      photo: photoUrl,
      resume: resumeUrl,
    });
  
    setUploading(false);
    if (response.status === 200) {
      router.push("/dashboard");
    }
  }
  

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(form.getValues());
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
                <div className="flex flex-wrap gap-2">
                  {skillOptions.map((skill) => (
                    <Badge
                      key={skill}
                      onClick={() => handleSkillClick(skill)}
                      className="cursor-pointer hover:bg-primary/80"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {field.value.map((skill: string) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="cursor-pointer"
                      onClick={() => removeSkill(skill)}
                    >
                      {skill} &times;
                    </Badge>
                  ))}
                </div>
                <FormControl>
                 
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

          <Button type="submit" disabled={uploading}>
            {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Submit"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
