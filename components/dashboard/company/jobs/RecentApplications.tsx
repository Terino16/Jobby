"use client"
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { format } from "date-fns";
import { Application } from "@/constants/types/Applications";

interface RecentApplicationsProps {
   recentlyAppliedCandidates: {
    name: string;
    id: string;
    email: string;
    image: string;
    jobId: string;
    skills: string[];
    achievements: string;
    resume: string;
    jobseekerId: string;
    status: boolean;
    pending: boolean;
    createdAt: Date;
    job: {
      title: string;
    }
   }[];
}

export function RecentApplications({ recentlyAppliedCandidates }: RecentApplicationsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Applications</CardTitle>
        <CardDescription>Latest candidates who applied</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentlyAppliedCandidates.slice(0, 3).map((application) => (
            <div
              key={application.id}
              className="flex items-center space-x-4 rounded-lg border p-4"
            >
              <Avatar>
                <AvatarFallback>{application.name?.charAt(0) || ''}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">{application.name}</p>
                <p className="text-sm text-muted-foreground">
                  {application.job.title}
                </p>
              </div>
              <p className="text-sm text-muted-foreground">
  {format(new Date(application.createdAt), 'yyyy-MM-dd')}
</p>

            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}