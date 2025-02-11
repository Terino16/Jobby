"use server";
import { CompanyForm } from "@/constants/schemas/CompanyForm";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";


export const createCompany = async (data: CompanyForm) => {
    const session = await auth();

    if (!session?.user?.id) {
        return { message: "Unauthorized Access Detected" };
    }

    try {
        // Create the company
        console.log("Creating company with data:", data);
        const company = await prisma.company.create({
            data: {
                userId: session.user.id,
                companyLogo: data.companyLogo,
                companyName: data.companyName,
                companyEmail: data.companyEmail,
                companyAbout: data.companyAbout,
                companyLinkedin: data.companyLinkedin,
                companyWebsite: data.companyWebsite,
                companyAddress: data.companyAddress,
                companyCountry: data.companyCountry,
            },
        });

        // Update the user's onboarding status to true
        await prisma.user.update({
            where: { id: session.user.id },
            data: { onboarding: true,
                   jobseeker: false,
             },
        });

        console.log("User onboarding status updated.");
       

        return {
            message: "Company Created Successfully",
            company: company,
            status: 200
        };

    } catch (error) {
        console.log("Error creating company:", error);
        return { message: "An error occurred while creating the company.",
            status: 500
         };
    }
};
