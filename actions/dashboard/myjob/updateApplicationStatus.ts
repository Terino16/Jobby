'use server'

import { prisma } from "@/lib/prisma";

export const updateApplicationStatus = async (applicationId: string, status: boolean) => {
    return await prisma.applicant.update({
        where: {
            id: applicationId
        },
        data: {
            status
        }
    });
} 