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
  export function JobsTable({jobs}: {jobs: Job[]}) {
    return (
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
                  variant={job.status ? "default" : "secondary"}
                >
                  {job.status ? "Active" : "Closed"}
                </Badge>
              </TableCell>
              <TableCell>
                <JobEditDialog data={job} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }