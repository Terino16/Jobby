/* eslint-disable */
"use client"
import Link from "next/link";
import { Button } from "../../ui/button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { testimonials } from "@/resources/reviews";
export default function Hero() {

    return (
        <div className="h-screen  flex flex-col items-center md:justify-center justify-start md:mt-0 mt-[20vh] w-full  overflow-hidden ">
            <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#337bee_100%)] dark:[background:radial-gradient(150%_155%_at_50%_10%,#000_40%,#337bee_100%)]">
            </div>
            <div className="absolute 
            md:block hidden
            w-2/3 h-2/3  border-[2px] 
            border-dashed border-blue-500 
            border-t-0
            border-b-0
            blur-sm
            contrast-200
            top-5
            rounded-full">
            </div>


            <div className="z-10 flex flex-col items-center ">
                <p className="text-right lg:text-[80px] md:text-[60px] hidden md:block  tracking-tighter font-sans font-semibold">
                    Connecting Developers
                </p>
                <h1 className="text-center lg:text-[80px] md:text-[60px] hidden md:block   tracking-tighter font-sans font-semibold">
                    With Great Companies
                </h1>

                <h1 className=" md:hidden text-[30px] tracking-tighter font-sans font-semibold">
                    Connecting Developers
                </h1>
                <h1 className=" md:hidden text-[30px] tracking-tighter font-sans font-semibold">
                    With
                </h1>
                <h1 className=" md:hidden text-[30px] tracking-tighter font-sans font-semibold">
                    Great Companies
                </h1>

                <p className="text-[14px]  md:text-[16px] text-[16px] text-center dark:text-gray-300 text-gray-500 mx-auto max-w-[600px]">
                    Find your dream tech job at top companies, from startups to Fortune 500s.
                </p>

            </div>

            <Button className="motion-preset-seesaw  mt-5 " asChild>
                <Link href="/dashboard">
                    Get Started <ArrowRightIcon className="w-5 h-5 motion-preset-wobble " />
                </Link>
            </Button>
            <div className="mt-10 md:block hidden md:w-[90%]">


                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />

                <InfiniteMovingCards
                    items={testimonials}
                    direction="left"
                    speed="slow"
                />
            </div>



            <Image src="/avatars-background.png" alt="Profile Picture" width={800} height={700} className="md:hidden absolute bottom-[130px]  " />
        </div>
    )
}

