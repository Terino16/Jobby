"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
export const acceptApplicant = async (applicantId: string) => {
    const applicant = await prisma.applicant.update({
        where: { id: applicantId },
        data: { status: true,
            pending: false
         }
    });

    revalidatePath(`/dashboard/company/myjobs/${applicant.jobId}`);
    return applicant;
}