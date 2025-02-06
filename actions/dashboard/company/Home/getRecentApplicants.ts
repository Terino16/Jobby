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
      user: {
        select: {
          name: true,
          email: true,
          image: true,
          employee: {
            select: {
              photo: true,
              resume: true,
              achievements: true,
              skills: true
            }
          }
        }
      },
      job: {
        select: {
          title: true
        }
      }
    },
    orderBy: {
      createdAt: 'desc'
    },
    take: 10 // Limit to recent 10 applications
  });

  return recentApplicants;
};
