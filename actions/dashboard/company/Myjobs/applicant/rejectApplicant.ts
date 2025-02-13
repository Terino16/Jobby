"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const rejectApplicant = async (applicantId: string) => {
    const applicant = await prisma.applicant.update({
        where: { id: applicantId },
        data: { pending: false }
    });
    revalidatePath(`/dashboard/company/myjobs/${applicant.jobId}`);
    return applicant;
}