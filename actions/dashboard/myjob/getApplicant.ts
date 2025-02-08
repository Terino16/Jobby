import { prisma } from "@/lib/prisma";

export const getApplicants = async (jobid: string) => {
    const applicants = await prisma.applicant.findMany({
        where: { jobId: jobid },
        include: {
            user: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                    image: true,
                    employee: {
                        select: {
                            resume: true,
                            skills: true,
                            achievements: true,
                        }
                    }
                }
            }
        }
    });
    return applicants;
};
