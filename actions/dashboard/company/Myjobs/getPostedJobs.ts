"use server";

import { prisma } from "@/lib/prisma";

export const getPostedJobs = async (companyId: string) => {
  const jobs = await prisma.job.findMany({
    where: {
      companyId: companyId,
    }
  });

  return jobs;
};
