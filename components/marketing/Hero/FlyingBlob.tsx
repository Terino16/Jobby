import Image from "next/image";
import { cn } from "@/lib/utils";

interface FlyingBlobProps {
    src: string;
    alt: string;
    name: string;
    role: string;
    divclassName?: string;
    imageclassName?: string;
    bgclassName?: string;
}

export default function FlyingBlob({ src, alt, name, role, divclassName, bgclassName, imageclassName }: FlyingBlobProps) {
    return (
        <div className={cn(" relative w-40 h-40 flex items-center justify-center   ", divclassName)}>
            {/* Yellow Background Circle */}
            <div className={cn("absolute w-40 h-40 bg-yellow-300 rounded-full", bgclassName)}></div>

            {/* Profile Image */}
            <Image
                src={src}
                alt={alt}
                width={160}
                height={160}
                className={cn("rounded-full relative z-10 object-cover", imageclassName)}
            />

            {/* Floating Name Badge */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white shadow-md rounded-lg px-3 py-2 flex items-center space-x-2 z-20">
                <div className="min-w-[150px]">
                    <p className="text-sm font-sans tracking-tighter text-black font-semibold">{name}</p>
                    <p className="text-xs font-sans text-black">{role}</p>
                </div>
                {/* Online Indicator */}
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            </div>
        </div>
    );
}
