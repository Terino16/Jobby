"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartConfig = {
  "1": {
    color: 'hsl(var(--chart-1))'
  }
} satisfies ChartConfig

export function CompanyDashboardChart({ data }: { data: any[] }) {
    const [activeChart, setActiveChart] = React.useState<"activeJobs" | "applicants">("activeJobs")
    console.log(data);

    const total = React.useMemo(
      () => ({
        activeJobs: data.reduce((acc, curr) => acc + curr.activeJobs, 0),
        applicants: data.reduce((acc, curr) => acc + curr.applicants, 0),
      }),
      [data]
    )

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Company Activity Overview</CardTitle>
          <CardDescription>Active Jobs and Applicants Over Time</CardDescription>
        </div>
        <div className="flex">
          {["activeJobs", "applicants"].map((key) => (
            <button
              key={key}
              data-active={activeChart === key}
              className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
              onClick={() => setActiveChart(key as "activeJobs" | "applicants")}
            >
              <span className="text-xs text-muted-foreground">
                {key === "activeJobs" ? "Active Jobs" : "Applicants"}
              </span>
              <span className="text-lg font-bold leading-none sm:text-3xl">
              {total[key as keyof typeof total].toLocaleString()}

              </span>
            </button>
          ))}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">

<ChartContainer className="aspect-auto h-[250px] w-full" config={chartConfig} >
          <BarChart
            data={data}
            margin={{ left: 12, right: 12 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => new Date(value).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  labelFormatter={(value) => new Date(value).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                />
              }
            />
            <Bar dataKey={activeChart} fill="hsl(var(--chart-1))" />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
