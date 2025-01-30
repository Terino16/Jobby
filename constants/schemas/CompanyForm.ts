import { z } from "zod"

export const CompanyFormSchema = z.object({
    name: z.string().min(2,{
        message: "Compnay Name must be at least 2 characters.",
      }).max(50),
    email: z.string().email().nonempty({message:"Email is required."}),
    linkedin: z.string().url().nonempty({message:"Linkedin Page is required."}),
    website: z.string().url().nonempty({message:"Website is required."}),
    description: z.string().min(10,{
        message: "Compnay Description must be at least 20 Words",
      }).max(500),
    location: z.string().nonempty({message:"Location is required."}),
    country: z.string().nonempty({message:"Country is required."}),
    address: z.string().min(10,{
      message: "Compnay Address must be at least 20 Words",
    }).max(500),
    })

export type CompanyForm = z.infer<typeof CompanyFormSchema>
