import { getJobs } from "@/actions/dashboard/company/Home/getJobs";     
import { getCompany } from "@/actions/dashboard/company/Home/getCompany";
import { Suspense } from "react";
import Loading from "@/app/dashboard/company/home/@activeJobs/loading";
import { MetricCard } from "@/components/dashboard/company/jobs/MetricCard";
import { Briefcase } from "lucide-react";

export default async function ActiveJobs() {
    const company = await getCompany();
    if (!company) return <div>Company not found</div>;

    const jobs = await getJobs(company.id);
    return (
        <div>
            <Suspense fallback={<Loading />}>
            <MetricCard
        title="Total Job Posts"
        value={jobs}
        icon={<Briefcase className="h-4 w-4 text-black" />}
        className="bg-blue-500"
        divClassName="shadow-[0px_0px_3px_rgba(0,_178,_255,_0.8)]"
      />
            </Suspense>
        </div>
    )
}