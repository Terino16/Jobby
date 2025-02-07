import { prisma } from "@/lib/prisma";

export async function searchJobs(query: string, location: string) {
  const jobs = await prisma.job.findMany({
    where: {
      AND: [
        { status: "ACTIVE" },
        {
          OR: [
            { title: { contains: query, mode: "insensitive" } },
            { description: { contains: query, mode: "insensitive" } }
          ]
        },
        location ? { location: { contains: location, mode: "insensitive" } } : {}
      ]
    },
    include: {
      company: true
    }
  });

  return jobs;
}
