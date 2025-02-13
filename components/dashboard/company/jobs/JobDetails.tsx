"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import ApplicantProfile from "./ApplicantProfile";

interface Applicant {
    id: string;
    name: string;
    email: string;
    image: string;
    skills: string[];
    achievements: string;
    resume: string;
    
}




export default function JobDetails({ job, applicants }: { job: any, applicants: any }) {
    const [selectedApplicant, setSelectedApplicant] = useState<Applicant | null>(null);
    return (
        <>
        <Card className="mb-6 border-none">
            <CardHeader>
                <CardTitle className="text-3xl font-bold tracking-tight">{job.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <div className="flex items-center  gap-4">
                    <Badge className="bg-blue-500 text-white">Location</Badge>
                    <p>{job.location}</p>
                </div>
                <div className="flex items-center gap-4">
                    <Badge className="bg-blue-500 text-white">Salary</Badge>
                    <p>{job.salary}</p>
                </div>
                <div className="flex items-center gap-4">
                    <Badge className="bg-blue-500 text-white">Status</Badge>
                    <p>{job.status}</p>
                </div>
                <div className="flex items-start gap-4">
                    <Badge className="bg-blue-500 text-white">Description</Badge>
                    <p>{job.description}</p>
                </div>
            </CardContent>
        </Card>

        <div className="space-y-4">
            <h2 className="text-xl font-bold mb-4">Applicants</h2>
            {applicants.length === 0 ? (
                <p>No applicants yet.</p>
            ) : (
                applicants.map((applicant: Applicant) => (
                    <Card key={applicant.id} className="shadow-md rounded-2xl p-4 flex justify-between items-center">
                        <div className="flex items-center gap-4">
                           <Avatar>
                            <AvatarImage src={applicant.image} />
                            <AvatarFallback>
                                {applicant.name.charAt(0)}
                            </AvatarFallback>
                           </Avatar>
                            <div>
                                <p className="font-bold">{applicant.name}</p>
                                <p className="text-sm">{applicant.email}</p>
                            </div>
                        </div>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline" onClick={() => setSelectedApplicant(applicant)}>View Details</Button>
                            </DialogTrigger>
                            {selectedApplicant && (
                              <ApplicantProfile applicant={selectedApplicant} />
                            )}
                        </Dialog>
                    </Card>
                ))
            )}
        </div>

        </>
    );
}


