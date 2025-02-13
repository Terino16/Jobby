import { getRecentlyAppliedCandidates } from "@/actions/dashboard/company/Home/getRecentApplicants";
import { getCompany } from "@/actions/dashboard/company/Home/getCompany";
import { Suspense } from "react";
import Loading from "@/app/dashboard/company/home/@activeJobs/loading";
import { Briefcase } from "lucide-react";
import { MetricCard } from "@/components/dashboard/company/jobs/MetricCard";
import { getActiveJobs } from "@/actions/dashboard/company/Home/getActiveJobs";

export default async function ActiveJobs() {
    const company = await getCompany();
    if (!company) return <div>Company not found</div>;

    const activeJobs = "error";
    return (
        <div>
            <Suspense fallback={<Loading />}>   
        <MetricCard
        title="Active Jobs"
        value={activeJobs.length}
        icon={<Briefcase className="h-4 w-4 text-black" />}
        className="bg-green-500"
        description="Total active jobs"
      />
            </Suspense>
        </div>
    )
}