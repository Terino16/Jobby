"use server"

import { prisma } from "@/lib/prisma"

export async function getActiveJobs(companyId: string) {
    const activeJobs = await prisma.job.findMany({
        where: {
            companyId: companyId,
            status: "ACTIVE"
        }
    })
    return activeJobs
}