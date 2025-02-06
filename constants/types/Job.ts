

import { Status as PrismaStatus } from "@prisma/client";
export interface Job{
    id: string;
    title: string;
    description: string;
    salary: string;
    location: string;
    companyId: string;
    status: PrismaStatus;

}


