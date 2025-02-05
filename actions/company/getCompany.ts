"use server"
import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation";
import { unstable_cache } from 'next/cache';

export async function getCompany() {
    const session = await auth();
    if(!session?.user?.id) return redirect('/auth/login');
   
    // Cache the company data for 1 hour
    const getCachedCompany = unstable_cache(
        async () => {
            console.log("Fetching company data from Prisma (No Cache Hit)");
            return await prisma.company.findFirst({
                where: {
                    userId: session?.user?.id
                },
                select: {
                    id: true,
                    userId: true,
                    companyName: true,
                    companyEmail: true,
                    companyAbout: true,
                    companyLinkedin: true,
                    companyWebsite: true,
                    companyAddress: true,
                    companyCountry: true,
                    companyLogo: true,
                }
            });
        },
        [`company-${session.user.id}`], // cache key
        {
            revalidate: 3600, // 1 hour
            tags: [`company-${session.user.id}`]
        }
    );

    return getCachedCompany();
}
