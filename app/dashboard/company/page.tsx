import { Suspense } from "react";
import { ModeToggle } from "@/components/general/theme-toggle";
import { SidebarTrigger } from "@/components/ui/sidebar";
import HomePage from "@/components/dashboard/company/HomePage";
import { getCompany } from "@/actions/dashboard/company/Home/getCompany";
import { getApplicants } from "@/actions/dashboard/company/Home/getApplicants";
import { getUnreviewedApplicants } from "@/actions/dashboard/company/Home/getUnreviewedApplicants";
import { getJobs } from "@/actions/dashboard/company/Home/getJobs";
import { getRecentlyAppliedCandidates } from "@/actions/dashboard/company/Home/getRecentApplicants";
import { Skeleton } from "@/components/ui/skeleton";
// Loading skeleton component
function DashboardSkeleton() {
  return (
    <div className="animate-pulse">
      <header className="flex h-16 shrink-0 items-center gap-2">
       
      </header>
      <div className="space-y-4 p-4">
      <div className="flex justify-between w-full">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      </div>
        <Skeleton className="h-64 rounded-xl" />
      </div>
    </div>
  );
}

// Async component to handle data fetching
async function DashboardContent() {

  const company = await getCompany();
  if (!company) return <div>Company not found</div>;

  const [jobs, applicants, unreviewedApplicants, fetchedApplications] = await Promise.all([
    getJobs(company.id),
    getApplicants(company.id),
    getUnreviewedApplicants(company.id),
    getRecentlyAppliedCandidates(company.id),
  ]);

  const recentlyAppliedCandidates = fetchedApplications.map(app => ({
    ...app,
    createdAt: new Date(app.createdAt), // This conversion was causing the type error
  }));

  return (
    <HomePage 
      company={company} 
      jobs={jobs} 
      applicants={applicants} 
      unreviewedApplicants={unreviewedApplicants} 
      recentlyAppliedCandidates={recentlyAppliedCandidates}
    />
  );
}

export default function Page() {
  return (
    <div className="">
      <header className="flex h-16 shrink-0 items-center gap-2">
        <div className="flex w-full items-center justify-between gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <ModeToggle />
        </div>
      </header>
      <Suspense fallback={<DashboardSkeleton />}>
        <DashboardContent />
      </Suspense>
    </div>
  );
}
