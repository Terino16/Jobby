"use client"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import { Badge } from "@/components/ui/badge";
  import { Job } from "@/constants/types/Job";

import JobEditDialog from "./JobEditDialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";
  export function JobsTable({jobs}: {jobs: Job[]}) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        {jobs.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-2xl font-semibold tracking-tighter text-muted-foreground">No Jobs Found</p>
            <p className="text-muted-foreground tracking-tighter">You haven't posted any jobs yet.</p>
              <Link href="/dashboard/company/postajob" className="underline ">
                Post a Job
              </Link>
          </div>
        )}
        {jobs.length > 0 && (
        <Table>
          <TableHeader>
            <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Salary</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {jobs.map((job) => (
            <TableRow key={job.id}>
              <TableCell className="font-medium">{job.title}</TableCell>
              <TableCell>{job.location}</TableCell>
              <TableCell>{job.salary}</TableCell>
              <TableCell>
                <Badge
                  variant={job.status.toLowerCase() === "active" ? "default" : "secondary"}
                >
                  {job.status.toLowerCase() === "active" ? "Active" : "Closed"}
                </Badge>
              </TableCell>
              <TableCell>
                <JobEditDialog data={job} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
        )}
        </div>
    );
  }