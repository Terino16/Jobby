import { MetricCard } from "@/components/dashboard/company/jobs/MetricCard"
import { RecentApplications } from "@/components/dashboard/company/jobs/RecentApplications"
import { Briefcase, Users, CheckCircle, Clock } from "lucide-react"
import { Applicant } from "@prisma/client"
interface Props{
  company: {
    id: string;
    userId: string;
    companyName: string;
    companyEmail: string;
    companyAbout: string;
    companyLinkedin: string;
    companyWebsite: string;
    companyAddress: string;
    companyCountry: string;
    companyLogo: string;
  }
  jobs: number;
  applicants: number;
  unreviewedApplicants: number;
  recentlyAppliedCandidates: Applicant[];
}

export default function HomePage({
  //company, 
  jobs, applicants, unreviewedApplicants, 
 // recentlyAppliedCandidates
}: Props) {
  return(
    < main className=" flex-1 p-8">
    <h1 className="lg:text-5xl md:text-4xl text-3xl font-thin tracking-tighter font-sans mb-8">Dashboard Overview</h1>
    
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
      <MetricCard
        title="Total Job Posts"
        value={jobs}
        icon={<Briefcase className="h-4 w-4 text-black" />}
        className="bg-blue-500"
        divClassName="shadow-[0px_0px_3px_rgba(0,_178,_255,_0.8)]"
      />
      <MetricCard
        title="Total Applications"
        value={applicants}
        icon={<Users className="h-4 w-4 text-black" />}
        className="bg-green-500"
        divClassName="shadow-[0px_0px_3px_rgba(0,_255,_167,_0.8)]"
      />
      <MetricCard
        title="Active Jobs"
        value={jobs}
        icon={<CheckCircle className="h-4 w-4 text-black" />}
        className="bg-yellow-500"
        divClassName="shadow-[0px_0px_3px_rgba(255,_242,_0,_0.8)]"
      />
      <MetricCard
        title="Pending Reviews"
        value={unreviewedApplicants}
        icon={<Clock className="h-4 w-4 text-black" />}
        className="bg-purple-500"
        divClassName="shadow-[0px_0px_3px_rgba(255,_0,_252,0.8)]"
      />
    </div>
    <RecentApplications />
  </main>
  );
}