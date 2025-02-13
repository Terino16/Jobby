"use server";

import { prisma } from "@/lib/prisma";

export const getAcceptedApplicant = async (jobid: string) => {
    const applicants = await prisma.applicant.findMany({
        where: { jobId: jobid,
            status: true
         },
    });
    return applicants;
};
