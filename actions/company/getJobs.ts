"use server"
import { prisma } from "@/lib/prisma"
import { unstable_cache } from 'next/cache';

export async function getJobs(companyId: string) {
    // Cache jobs count for 5 minutes
    const getCachedJobs = unstable_cache(
        async () => {
            return await prisma.job.count({
                where: {
                    companyId: companyId
                }
            });
        },
        [`jobs-count-${companyId}`],
        {
            revalidate: 300, // 5 minutes
            tags: [`company-${companyId}-jobs`]
        }
    );
    
    return getCachedJobs();
}
