import { z } from "zod"

export const CompanyUpdateFormSchema = z.object({
  id: z.string().min(2, { message: "Company Name must be at least 2 characters." }).max(50),
  companyName: z.string().min(2, { message: "Company Name must be at least 2 characters." }).max(50),
  companyEmail: z.string().email().nonempty({ message: "Email is required." }),
  companyLinkedin: z.string().url().nonempty({ message: "LinkedIn Page is required." }),
  companyWebsite: z.string().url().nonempty({ message: "Website is required." }),
  companyAbout: z.string().min(10, { message: "Company Description must be at least 20 words." }).max(500),
  companyAddress: z.string().min(10, { message: "Company Address must be at least 20 words." }).max(500),
});

export type CompanyUpdateForm = z.infer<typeof CompanyUpdateFormSchema>;
