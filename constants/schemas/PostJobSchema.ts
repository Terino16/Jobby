import { z } from "zod"

export const PostJobSchema = z.object({
    title:z.string().nonempty({ message: "Please Fill out Job Title" }),
    description:z.string().min(20,{ message: "Job Description should be at least 20 characters" }),
    location:z.string().nonempty({ message: "Please Fill out Job Location" }),
    salary:z.string().nonempty({ message: "Please Fill out Job Salary" }),
});

export type PostJobSchema = z.infer<typeof PostJobSchema>;
