"use server"
import { prisma } from "@/lib/prisma"
import { unstable_cache } from 'next/cache';

export async function getUnreviewedApplicants(companyId: string) {
    // Cache unreviewed applicants count for 30 seconds
    const getCachedUnreviewedApplicants = unstable_cache(
        async () => {
            return await prisma.applicant.count({
                where: {
                    job: {
                        companyId: companyId
                    },
                    status: false
                }
            });
        },
        [`unreviewed-applicants-${companyId}`],
        {
            revalidate: 30, // 30 seconds
            tags: [`company-${companyId}-unreviewed`]
        }
    );
    
    return getCachedUnreviewedApplicants();
}
