"use server";
import { prisma } from '@/lib/prisma';

export const getRecentlyAppliedCandidates = async (companyId: string) => {
  const recentApplicants = await prisma.applicant.findMany({
    where: {
      job: {
        companyId: companyId
      }
    },
    include: {
     job: {
      select: {
        title: true
      }
     }
    },
    orderBy: {
      createdAt: 'desc'
    },
    take: 3 // Limit to recent 10 applications
  });

  return recentApplicants;
};
