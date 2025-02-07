"use server"
import { startOfDay, endOfDay, subDays } from "date-fns"
import { prisma } from "@/lib/prisma"

export async function getCompanyStats(companyId: string) {
  const today = new Date()
  const daysToTrack = 30

  const stats = await Promise.all(
    Array.from({ length: daysToTrack }, (_, i) => {
      const date = subDays(today, i)
      return prisma.job.findMany({
        where: {
          companyId,
          status: "ACTIVE",
          createdAt: {
            gte: startOfDay(date),
            lte: endOfDay(date),
          },
        },
        include: {
          applicants: true,
        },
      }).then((jobs) => ({
        date: date.toISOString().split("T")[0],
        activeJobs: jobs.length,
        applicants: jobs.reduce((acc, job) => acc + job.applicants.length, 0),
      }))
    })
  )

  return stats.reverse() // To have the data in chronological order
}
