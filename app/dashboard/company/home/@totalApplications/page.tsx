import { getCompany } from "@/actions/dashboard/company/Home/getCompany";
import { getApplicants } from "@/actions/dashboard/company/Home/getApplicants";
import { Suspense } from "react";
import Loading from "./loading";
import { MetricCard } from "@/components/dashboard/company/jobs/MetricCard";
import { Users } from "lucide-react";

export default async function TotalApplications() {
    const company = await getCompany();
    if (!company) return <div>Company not found</div>;

    const applications = await getApplicants(company.id);

    return (
        <div>
              <Suspense fallback={<Loading />}>
                    <MetricCard
                title="Total Applications"
                value={applications}
                icon={<Users className="h-4 w-4 text-black" />}
                className="bg-yellow-500"
                description="Total applications received"
            />
              </Suspense>
        </div>
    )
}