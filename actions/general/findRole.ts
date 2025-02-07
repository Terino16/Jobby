"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const findRole = async () => {
    const session = await auth();

    if (!session?.user?.id) {
        return { message: "Unauthorized Access Detected", status: 401 };
    }

    try {
        const user = await prisma.user.findUnique({
            where: { id: session.user.id },
            select: {
                jobseeker: true,
                employee: { select: { id: true } },
                company: { select: { id: true } },
              },
        });

        return {
            message: "Role fetched successfully",
            role: user?.jobseeker,
            id: user?.employee?.id || user?.company?.id,
            status: 200,
        };
    } catch (error) {
        console.error("Error fetching role:", error);
        return { message: "An error occurred while fetching the role.", status: 500 };
    }
};
