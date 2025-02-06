"use server";

import { prisma } from "@/lib/prisma";

export const updateJob = async (jobId: string, values: any) => {
  const updatedJob = await prisma.job.update({
    where: {
      id: jobId,
    },
    data: values,
  });
  return updatedJob;
};