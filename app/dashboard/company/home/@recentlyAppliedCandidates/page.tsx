import { getRecentlyAppliedCandidates } from "@/actions/dashboard/company/Home/getRecentApplicants";
import { getCompany } from "@/actions/dashboard/company/Home/getCompany";
import { Suspense } from "react";
import Loading from "@/app/dashboard/company/home/@recentlyAppliedCandidates/loading";
import { Users } from "lucide-react";
import { MetricCard } from "@/components/dashboard/company/jobs/MetricCard";

export default async function RecentlyAppliedCandidates() {
    const company = await getCompany();
    if (!company) return <div>Company not found</div>;

    const recentlyAppliedCandidates = await getRecentlyAppliedCandidates(company.id);
    return (
        <div>
            <Suspense fallback={<Loading />}>   
        <MetricCard
        title="Recently Applied Candidates"
        value={recentlyAppliedCandidates.length}
        icon={<Users className="h-4 w-4 text-black" />}
        className="bg-green-500"
        divClassName="shadow-[0px_0px_3px_rgba(0,_255,_167,_0.8)]"
      />
            </Suspense>
        </div>
    )
}