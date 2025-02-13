import { getJob } from "@/actions/dashboard/myjob/getJob";
import { getApplicants } from "@/actions/dashboard/myjob/getUnreviewdApplicant";
import JobDetails from "@/components/dashboard/company/jobs/JobDetails";


export default async function Page({
    params,
}: {
    params: Promise<{ jobid: string }>
}) {
    const jobid = (await params).jobid;
    const job = await getJob(jobid);
    const applicants = await getApplicants(jobid);
    // const applicants=[
    //     {
    //         "id": "cm71aw47e000xitb5xjx2v822",
    //         "jobId": "cm71aw46l0003itb5ea2g6k19",
    //         "image": "https://picsum.photos/200",
    //         "name": "Jack Crist DDS",
    //         "email": "Bobby54@yahoo.com",
    //         "skills": [
    //             "bonus",
    //             "cumque",
    //             "deserunt",
    //             "ad",
    //             "ater"
    //         ],
    //         "achievements": "Utroque recusandae dolore thorax via demoror tyrannus turpis claudeo. Denego uterque tamen cur delibero. Crebro cohibeo contabesco dolore minima crux stabilis tepidus desolo.\nAmoveo suus asperiores adipisci caries saepe. Claudeo adstringo corporis ventus despecto sequi. Patrocinor tum solutio sumo minima adhaero avarus vis.",
    //         "resume": "https://friendly-freezing.com",
    //         "userId": "cm71aw473000mitb5i6jz6rdw",
    //         "status": true,
    //         "createdAt": "2025-02-12T02:37:27.242Z"
    //     }
    // ]

    if (!job) {
        return <div>Job not found</div>
    }

    return (
        <div className="p-4">
            <JobDetails job={job} applicants={applicants} />
        </div>
    );
}
