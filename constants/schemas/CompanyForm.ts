import { z } from "zod"

export const CompanyFormSchema = z.object({
  companyName: z.string().min(2, { message: "Company Name must be at least 2 characters." }).max(50),
  companyEmail: z.string().email().nonempty({ message: "Email is required." }),
  companyLinkedin: z.string().url().nonempty({ message: "LinkedIn Page is required." }),
  companyWebsite: z.string().url().nonempty({ message: "Website is required." }),
  companyAbout: z.string().min(10, { message: "Company Description must be at least 20 words." }).max(500),
  companyCountry: z.string().nonempty({ message: "Country is required." }),
  companyAddress: z.string().min(10, { message: "Company Address must be at least 20 words." }).max(500),
  companyLogo: z.string().url().nonempty({ message: "Company Logo is required." }),
});

export type CompanyForm = z.infer<typeof CompanyFormSchema>;
