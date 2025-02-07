import { z } from "zod"

export const PostJobSchema = z.object({
    title:z.string().nonempty({ message: "Please Fill out Job Title" }),
    description:z.string().nonempty({ message: "Please Fill out Job Description" }),
    location:z.string().nonempty({ message: "Please Fill out Job Location" }),
    salary:z.string().nonempty({ message: "Please Fill out Job Salary" }),
});

export type PostJobSchema = z.infer<typeof PostJobSchema>;
