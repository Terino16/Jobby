
import { Applicant } from "./Applicant";

export interface Job{
    id: string;
    title: string;
    description: string;
    salary: string;
    location: string;
    companyId: string;
    status: boolean;
    applicants: Applicant[];

}


