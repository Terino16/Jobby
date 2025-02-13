"use server"

import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation"

interface UpdateCompanyData{
    id:string,
    companyName:string,
    companyEmail:string,
    companyAbout:string,
    companyLinkedin:string,
    companyWebsite:string,
    companyAddress:string,
}

export async function updateCompany(company:UpdateCompanyData) {
    const session = await auth();
    if (!session?.user) {
        redirect("/login");
    }



    await prisma.company.update({
        where:{id:company.id},
        data:{
            ...company
        }
    })
    return ({message:"Company updated successfully",status:200});
}       