"use server";
import { JobSeekerForm } from "@/constants/schemas/JobSeekerForm";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export const createJobSeeker = async (data: JobSeekerForm) => {
    const session = await auth();

    if (!session?.user?.id) {
        return { message: "Unauthorized Access Detected" };
    }

    try {
        // Create the jobseeker
        const jobseeker = await prisma.jobSeeker.create({
            data: {
                userId: session.user.id,
                photo: data.photo,
                resume: data.resume,
                skills: data.skills,
                achievements: data.achievements
            },
        });

        // Update the user's onboarding status to true
        await prisma.user.update({
            where: { id: session.user.id },
            data: { onboarding: true,
             },
        });

        return {
            message: "Profile Created Successfully",
            jobseeker: jobseeker,
            status: 200
        };

    } catch (error) {
        console.error("Error creating Profile:", error);
        return { message: "An error occurred while creating the Profile.",
            status: 500
         };
    }
};
