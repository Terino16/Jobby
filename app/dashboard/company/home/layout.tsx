import { ModeToggle } from "@/components/general/theme-toggle";
import { SidebarTrigger } from "@/components/ui/sidebar";


export default function DashboardLayout({ children, activeJobs, pendingReviews, totalJobs, totalApplications, recentlyApplied }: { children: React.ReactNode,
  activeJobs: React.ReactNode,
  pendingReviews: React.ReactNode,
  totalJobs: React.ReactNode,
  totalApplications: React.ReactNode,
  recentlyApplied: React.ReactNode,
 }) {
    return (
  <>
<header className="flex h-16 shrink-0 items-center gap-2">
        <div className="flex w-full items-center justify-between gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <ModeToggle />
        </div>
      </header>
      < main className="flex-1 p-8">
        
      <h1 className="lg:text-5xl md:text-4xl text-3xl font-thin tracking-tighter font-sans mb-8">Dashboard Overview</h1>
      
      <div className="grid gap-4 md:grid-cols-2  xl:grid-cols-4 mb-8">
       {totalJobs}
       {activeJobs}
       {totalApplications}
       {pendingReviews}
      </div>
      {recentlyApplied}
      </main>
      </>
    )
}


