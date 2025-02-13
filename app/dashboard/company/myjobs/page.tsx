import { Suspense } from "react";
import { ModeToggle } from "@/components/general/theme-toggle";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { JobsTable } from "@/components/dashboard/company/jobs/JobsTable";
import { getCompany } from "@/actions/dashboard/company/Home/getCompany";
import { getPostedJobs } from "@/actions/dashboard/company/Myjobs/getPostedJobs";
import { Skeleton } from "@/components/ui/skeleton";
function JobsSkeleton() {
  return (
    <div className="animate-pulse">
      <header className="flex h-16 shrink-0 items-center gap-2">
        <Skeleton className="flex w-full items-center justify-between gap-2 px-4">
        </Skeleton>
      </header>
      <div className="space-y-4 p-4">
        <Skeleton className="h-8 w-1/3 rounded " />
        <Skeleton className="h-32 rounded " />
        <Skeleton className="h-32 rounded " />
      </div>
    </div>
  );
}

async function JobsContent() {
  const company = await getCompany();

  if (!company) return <div>Company not found</div>;

  const jobs = await getPostedJobs(company.id);


  return (
    <main className="flex-1 p-8">
      <h1 className="lg:text-5xl md:text-4xl text-3xl font-thin tracking-tighter font-sans mb-8">
        Posted Jobs
      </h1>
      <JobsTable jobs={jobs} />
    </main>
  );
}

export default function MyJobs() {
  return (
    <div>
      <header className="flex h-16 shrink-0 items-center gap-2">
        <div className="flex w-full items-center justify-between gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <ModeToggle />
        </div>
      </header>
      <Suspense fallback={<JobsSkeleton />}>
        <JobsContent />
      </Suspense>
    </div>
  );
}