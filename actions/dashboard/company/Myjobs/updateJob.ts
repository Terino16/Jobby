"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const updateJob = async (jobId: string, values: any) => {
  const updatedJob = await prisma.job.update({
    where: {
      id: jobId,
    },
    data: values,
  });
  revalidatePath("/dashboard/company/myjobs");
  return (
    {
      status: 200,
      message: "Job updated successfully",
    }
  );
};