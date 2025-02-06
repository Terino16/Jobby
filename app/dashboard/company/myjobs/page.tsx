import { Suspense } from "react";
import { ModeToggle } from "@/components/general/theme-toggle";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { JobsTable } from "@/components/dashboard/company/jobs/JobsTable";
import { getCompany } from "@/actions/dashboard/company/Home/getCompany";
import { getPostedJobs } from "@/actions/dashboard/company/Myjobs/getPostedJobs";
import { Status } from "@/constants/types/Job";
function JobsSkeleton() {
  return (
    <div className="animate-pulse">
      <header className="flex h-16 shrink-0 items-center gap-2">
        <div className="flex w-full items-center justify-between gap-2 px-4">
          <div className="h-8 w-8 rounded bg-gray-800" />
          <div className="h-8 w-8 rounded bg-gray-800" />
        </div>
      </header>
      <div className="space-y-4 p-4">
        <div className="h-8 w-1/3 rounded bg-gray-800" />
        <div className="h-32 rounded bg-gray-800" />
        <div className="h-32 rounded bg-gray-800" />
      </div>
    </div>
  );
}

async function JobsContent() {
  // const company = await getCompany();

  // if (!company) return <div>Company not found</div>;

  // const jobs = await getPostedJobs(company.id);
  // console.log(jobs);

  const jobs=[
    {
      id: 'cm6qt9nvm0000it971ohm8oi0',
      title: 'FullStack Developer',
      description: 'A very good Developer',
      salary: '250000',
      location: 'Banglore',
      companyId: 'cm6qtb0c60006it975kzmtbeh',
      status: Status.ACTIVE
    }
  ]

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