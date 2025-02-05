import { Job } from "./Job";
export interface Company{
    id: string;
    userId: string;
    companyLogo: string;
    companyName: string;
    companyEmail: string;
    companyAbout: string;
    companyLinkedin: string;
    companyWebsite: string;
    companyAddress: string;
    companyCountry: string;
    jobs: Job[];
}


