import { z } from "zod"

export const CompanyFormSchema = z.object({
  name: z.string().min(2, { message: "Company Name must be at least 2 characters." }).max(50),
  email: z.string().email().nonempty({ message: "Email is required." }),
  linkedin: z.string().url().nonempty({ message: "LinkedIn Page is required." }),
  website: z.string().url().nonempty({ message: "Website is required." }),
  description: z.string().min(10, { message: "Company Description must be at least 20 words." }).max(500),
  country: z.string().nonempty({ message: "Country is required." }),
  address: z.string().min(10, { message: "Company Address must be at least 20 words." }).max(500),
  companyLogo: z.any(), // ✅ Accepts any file
});

export type CompanyForm = z.infer<typeof CompanyFormSchema>;
