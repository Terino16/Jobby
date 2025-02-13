
"use client";

import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ExternalLinkIcon } from "lucide-react";
import { CheckIcon } from "lucide-react";
import { XIcon } from "lucide-react";
import { acceptApplicant } from "@/actions/dashboard/company/Myjobs/applicant/acceptApplicant";
import { rejectApplicant } from "@/actions/dashboard/company/Myjobs/applicant/rejectApplicant";
import { useState } from "react";
interface Applicant {
    id: string;
    name: string;
    email: string;
    image: string;
    skills: string[];
    achievements: string;
    resume: string;
}

export default function ApplicantProfile({ applicant }: { applicant: Applicant }) {
    const [isLoading, setIsLoading] = useState(false);
    const handleAccept = async (id: string) => {
        setIsLoading(true);
        await acceptApplicant(id);
        setIsLoading(false);
    }
    const handleReject = async (id: string) => {
        setIsLoading(true);
        await rejectApplicant(id);
        setIsLoading(false);
    }
    return (    
        <DialogContent className="sm:max-w-[425px] border-none md:max-w-[700px]">
            <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-center mb-4">{applicant.name}'s Profile</DialogTitle>
            </DialogHeader>
            <Card className="border-none">
                <CardContent className="p-6">
                    <div className="flex flex-col items-center mb-6">
                        <Avatar className="w-24 h-24 mb-4">
                            <AvatarImage src={applicant.image} alt={applicant.name} />
                            <AvatarFallback>{applicant.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <h2 className="text-xl font-semibold">{applicant.name}</h2>
                        <p className="text-muted-foreground">{applicant.email}</p>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {applicant.skills.map((skill, index) => (
                                    <Badge key={index} variant="secondary">
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Achievements</h3>
                            <ul className="list-disc list-inside text-muted-foreground">
                                {applicant.achievements}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Resume</h3>
                            <a
                                href={applicant.resume}
                                className="text-primary hover:underline inline-flex items-center"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Resume
                                <ExternalLinkIcon className="ml-2 h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-4 p-6">
                    <DialogClose asChild>
                    <Button variant="outline" className="w-28" onClick={() => handleReject(applicant.id)} disabled={isLoading}>
                        <XIcon className="mr-2 h-4 w-4" /> Reject
                    </Button>
                    </DialogClose>
                    <DialogClose asChild>
                    <Button className="w-28" onClick={() => handleAccept(applicant.id)} disabled={isLoading}>
                        <CheckIcon className="mr-2 h-4 w-4" /> Accept
                    </Button>
                    </DialogClose>
                </CardFooter>
            </Card>
        </DialogContent>    
    )
}