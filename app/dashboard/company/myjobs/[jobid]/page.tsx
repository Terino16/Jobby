import { getJob } from "@/actions/dashboard/myjob/getJob";
import { getApplicants } from "@/actions/dashboard/myjob/getApplicant";
import JobDetails from "@/components/dashboard/company/jobs/JobDetails";


export default async function Page({
    params,
}: {
    params: Promise<{ jobid: string }>
}) {
    const jobid = (await params).jobid;
    const job = await getJob(jobid);
    const applicants = await getApplicants(jobid);

    if (!job) {
        return <div>Job not found</div>
    }

    return (
        <div className="p-4">
            <JobDetails job={job} applicants={applicants} />
        </div>
    );
}
