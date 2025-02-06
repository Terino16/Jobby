"use server"
import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation";
import { unstable_cache } from 'next/cache';

export async function getApplicants(companyId: string) {
    const session = await auth();
    if(!session?.user?.id) return redirect('/auth/login');
    
    // Cache applicants count for 1 minute
    const getCachedApplicants = unstable_cache(
        async () => {
            return await prisma.applicant.count({
                where: {
                    job: {
                        companyId: companyId
                    }
                }
            });
        },
        [`applicants-count-${companyId}`],
        {
            revalidate: 60, // 1 minute
            tags: [`company-${companyId}-applicants`]
        }
    );
    
    return getCachedApplicants();
}
