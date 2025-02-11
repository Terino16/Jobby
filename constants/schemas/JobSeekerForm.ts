import { z } from 'zod';

export const JobSeekerFormSchema = z.object({
  photo: z.string().url({ message: "Photo is required and must be a valid URL" }),
  resume: z.string().url({ message: "Resume is required and must be a valid URL" }),
  achievements: z.string().min(1, { message: "Achievements are required" }),
  skills: z.array(z.string()).min(1, { message: "At least one skill must be selected" }),
});

export type JobSeekerForm = z.infer<typeof JobSeekerFormSchema>;
