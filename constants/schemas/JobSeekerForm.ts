import { z } from "zod"

export const JobSeekerFormSchema = z.object({
    photo:z.string().nonempty({ message: "Please Upload a Photo" }),
    resume:z.string().nonempty({ message: "Please Upload your Resume" }),
    achievements:z.string().nonempty({ message: "Please Fill out Achievements Section" }),
    skills:z.string().nonempty({ message: "Please Fill out Skills Section" }),
});

export type JobSeekerForm = z.infer<typeof JobSeekerFormSchema>;
