import { MetricCard } from "@/components/dashboard/company/jobs/MetricCard";
import { Clock } from "lucide-react";
import { getUnreviewedApplicants } from "@/actions/dashboard/company/Home/getUnreviewedApplicants";
import { getCompany } from "@/actions/dashboard/company/Home/getCompany";
import { Suspense } from "react";
import Loading from "@/app/dashboard/company/home/@pendingReviews/loading";

export default async function PendingReviews() {
    const company = await getCompany();
    if (!company) return <div>Company not found</div>;

    const unreviewedApplicants = await getUnreviewedApplicants(company.id);
    return (
        <div>
            <Suspense fallback={<Loading />}>
            <MetricCard
        title="Pending Reviews"
        value={unreviewedApplicants}
        icon={<Clock className="h-4 w-4 text-black" />}
        className="bg-purple-500"
        divClassName="shadow-[0px_0px_3px_rgba(255,_0,_252,0.8)]"
      />
            </Suspense>
        </div>
    )
}