import { prisma } from "@/lib/prisma";

export const getJob = async (jobid: string) => {
    const job = await prisma.job.findUnique({
        where: {
            id: jobid,
        },
    });
    return job;
}