import { MetricCard } from "@/components/dashboard/jobs/MetricCard"
import { RecentApplications } from "@/components/dashboard/jobs/RecentApplications"
import { ModeToggle } from "@/components/general/theme-toggle"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { CheckCircle, Users, Briefcase, Clock } from "lucide-react"

  
export default function Page() {
    return (
        <div className="">
          <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex w-full items-center justify-between gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <ModeToggle />
          </div>

        </header>
        < main className=" flex-1 p-8">
          <h1 className="lg:text-5xl md:text-4xl text-3xl font-thin tracking-tighter font-sans mb-8">Dashboard Overview</h1>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <MetricCard
              title="Total Job Posts"
              value="24"
              icon={<Briefcase className="h-4 w-4 text-black" />}
              className="bg-blue-500"
              divClassName="shadow-[0px_0px_3px_rgba(0,_178,_255,_0.8)]"
            />
            <MetricCard
              title="Total Applications"
              value="156"
              icon={<Users className="h-4 w-4 text-black" />}
              className="bg-green-500"
              divClassName="shadow-[0px_0px_3px_rgba(0,_255,_167,_0.8)]"
            />
            <MetricCard
              title="Active Jobs"
              value="18"
              icon={<CheckCircle className="h-4 w-4 text-black" />}
              className="bg-yellow-500"
              divClassName="shadow-[0px_0px_3px_rgba(255,_242,_0,_0.8)]"
            />
            <MetricCard
              title="Pending Reviews"
              value="32"
              icon={<Clock className="h-4 w-4 text-black" />}
              className="bg-purple-500"
              divClassName="shadow-[0px_0px_3px_rgba(255,_0,_252,0.8)]"
            />
          </div>
          <RecentApplications />
        </main>
        </div>
    )
}