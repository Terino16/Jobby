import { prisma } from "@/lib/prisma";

export const getApplicants = async (jobid: string) => {
    const applicants = await prisma.applicant.findMany({
        where: { jobId: jobid,
            pending: true
         },
    });

    console.log(applicants);
    return applicants;
};
