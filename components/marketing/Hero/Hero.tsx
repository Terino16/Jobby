/* eslint-disable */
"use client"
import Link from "next/link";
import { Button } from "../../ui/button";
import { ArrowRightIcon } from "lucide-react";
import FlyingBlob from "./FlyingBlob";

export default function Hero() {
    return (
        <div className="h-screen flex flex-col items-center md:justify-start  md:mt-[50px] mt-[100px] w-full">
            <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#337bee_100%)] dark:[background:radial-gradient(150%_155%_at_50%_10%,#000_40%,#337bee_100%)]">
            </div>


            <FlyingBlob
                src="/manone.webp"
                divclassName="md:block hidden absolute  lg:top-[500px] lg:left-[150px] md:top-[400px] md:left-[50px] motion-preset-shake motion-translate-y-loop-[10px] motion-duration-[2s] motion-ease-spring-smooth "
                imageclassName="rounded-full w-[200px] h-[130px]"
                bgclassName="bg-yellow-300"
                alt="Profile Picture"
                name="Albert Flores"
                role="Product Team Lead"
            />

            <FlyingBlob
                src="/womanone.webp"
                divclassName="md:block hidden absolute xl:bottom-[400px] xl:right-[200px] lg:top-[500px] lg:right-[100px] md:top-[400px] md:right-[50px] motion-preset-shake motion-translate-y-loop-[10px] motion-duration-[2s] motion-ease-spring-smooth"
                imageclassName="rounded-full w-[200px] h-[150px]"
                bgclassName="bg-red-400"
                alt="Profile Picture"
                name="Flora Fauna"
                role="Software Engineer"
            />

            <FlyingBlob
                src="/womentwo.webp"
                divclassName="md:hidden absolute bottom-[200px]  motion-preset-shake motion-translate-y-loop-[10px] motion-duration-[2s] motion-ease-spring-smooth"
                imageclassName="rounded-full w-[250px] h-[200px]"
                bgclassName="bg-red-400 w-[190px] h-[190px]"
                alt="Profile Picture"
                name="Flora Fauna"
                role="Software Engineer"
            />


            <h1 className="lg:text-[80px] md:text-[60px] hidden md:block text-[40px] tracking-tighter font-sans font-semibold">
                Connecting Developers
            </h1>
            <h1 className="lg:text-[80px] md:text-[60px] hidden md:block text-[40px] tracking-tighter font-sans font-semibold">
                With Great Companies
            </h1>

            <h1 className=" md:hidden text-[40px] tracking-tighter font-sans font-semibold">
                Connecting Developers
            </h1>
            <h1 className=" md:hidden text-[40px] tracking-tighter font-sans font-semibold">
                With
            </h1>
            <h1 className=" md:hidden text-[40px] tracking-tighter font-sans font-semibold">
                Great Companies
            </h1>

            <p className="text-[14px] md:text-[16px] text-center dark:text-gray-300 text-gray-500 md:w-2/3">
                Find your dream tech job at top companies, from startups to Fortune 500s. Whether you're a junior developer or a senior engineer, we connect you with the right opportunities that match your skills and aspirations.
            </p>
            <Button className="motion-preset-seesaw  mt-5 " asChild>
                <Link href="/dashboard">
                    Get Started <ArrowRightIcon className="w-5 h-5 motion-preset-wobble " />
                </Link>
            </Button>
        </div>
    )
}