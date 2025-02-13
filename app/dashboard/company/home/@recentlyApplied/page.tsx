import { getJobs } from "@/actions/dashboard/company/Home/getJobs";     
import { getCompany } from "@/actions/dashboard/company/Home/getCompany";
import { Suspense } from "react";
import Loading from "@/app/dashboard/company/home/@recentlyApplied/loading";
import { getRecentlyAppliedCandidates } from "@/actions/dashboard/company/Home/getRecentApplicants";
import { RecentApplications } from "@/components/dashboard/company/jobs/RecentApplications";

export default  async function RecentlyApplied() {
    const company = await getCompany();
    if (!company) return <div>Company not found</div>;

    const recentlyAppliedCandidates = await getRecentlyAppliedCandidates(company.id);
    console.log(recentlyAppliedCandidates);
    return (
        <div>
        <Suspense fallback={<Loading />}>
        <RecentApplications recentlyAppliedCandidates={recentlyAppliedCandidates} />
        </Suspense>
    </div>
    )
}
