import { CompanyDashboardChart } from "@/components/dashboard/company/home/CompanyStats"
import { getCompanyStats } from "@/actions/dashboard/company/Home/getCompanyStats"

export default async function CompanyStats() {
  const stats = await getCompanyStats("cm6uokv6v0006yux036yvr0at");
  return <CompanyDashboardChart data={stats} />
}
