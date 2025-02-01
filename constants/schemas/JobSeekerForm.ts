import { z } from "zod"

export const JobSeekerFormSchema = z.object({
    photo:z.string().url().nonempty({ message: "Please Upload a Photo" }),
    resume:z.string().url().nonempty({ message: "Please Upload your Resume" }),
    achievements:z.string().nonempty({ message: "Please Fill out Achievements Section" }),
    skills:z.string().nonempty({ message: "Please Fill out Skills Section" }),
});

export type JobSeeker = z.infer<typeof JobSeekerFormSchema>;
