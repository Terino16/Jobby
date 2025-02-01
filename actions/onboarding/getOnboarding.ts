"use server";
import { CompanyForm } from "@/constants/schemas/CompanyForm";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export const getOnboardingStatus = async () => {
    const session = await auth();

    if (!session?.user?.id) {
        return { message: "Unauthorized Access Detected" };
    }

    try {

        const onboarding= await prisma.user.findUnique({
            where: { id: session.user.id },
            select: { onboarding: true }
        });
        
        return {
            message: "Company Created Successfully",
            onboarding
        };

    } catch (error) {
        console.error("Error creating company:", error);
        return { message: "An error occurred while creating the company." };
    }
};
