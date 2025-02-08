"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Applicant {
    id: string;
    user: {
        name: string;
        email: string;
        image: string;
        employee: {
            skills: string;
            achievements: string;
            resume: string;
        }
    }
}




export default function JobDetails({ job, applicants }: { job: any, applicants: any }) {
    const [selectedApplicant, setSelectedApplicant] = useState<Applicant | null>(null);
    return (
        <>
        <Card className="mb-6 shadow-md rounded-2xl">
            <CardHeader>
                <CardTitle>{job.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p><strong>Location:</strong> {job.location}</p>
                <p><strong>Salary:</strong> {job.salary}</p>
                <p><strong>Status:</strong> {job.status}</p>
                <p><strong>Description:</strong> {job.description}</p>
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
                            <AvatarImage src={applicant.user.image} />
                            <AvatarFallback>
                                {applicant.user.name.charAt(0)}
                            </AvatarFallback>
                           </Avatar>
                            <div>
                                <p className="font-bold">{applicant.user.name}</p>
                                <p className="text-sm">{applicant.user.email}</p>
                            </div>
                        </div>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline" onClick={() => setSelectedApplicant(applicant)}>View Details</Button>
                            </DialogTrigger>
                            {selectedApplicant && (
                                <DialogContent className="rounded-2xl">
                                    <DialogHeader>
                                        <DialogTitle>{selectedApplicant.user.name}'s Profile</DialogTitle>
                                    </DialogHeader>
                                    <div className="mt-4 space-y-2">
                                        <p><strong>Email:</strong> {selectedApplicant.user.email}</p>
                                        <p><strong>Skills:</strong> {selectedApplicant.user.employee?.skills}</p>
                                        <p><strong>Achievements:</strong> {selectedApplicant.user.employee?.achievements}</p>
                                        <p><strong>Resume:</strong> <a href={selectedApplicant.user.employee?.resume} className="text-blue-600 underline" target="_blank">View Resume</a></p>
                                    </div>
                                </DialogContent>
                            )}
                        </Dialog>
                    </Card>
                ))
            )}
        </div>

        </>
    );
}
