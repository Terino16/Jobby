import { prisma } from "@/lib/prisma";

export const getJob = async (jobid: string) => {
    const job = await prisma.job.findUnique({
        where: {
            id: jobid,
        },
        include: {
            applicants: {
                include: {
                    user: {
                        select: {
                            id: true,
                            name: true,
                            email: true,
                            image: true,
                            employee:true
                        }
                    }
                }
            }
        },
    });
    return job;
}