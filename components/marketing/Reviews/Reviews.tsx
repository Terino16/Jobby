import ReviewBox from "./ReviewBox";
import { reviews } from "@/resources/reviews";
export default function Reviews() {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-start">
            <h1 className="lg:text-[80px] text-center md:text-[60px] text-[40px] tracking-tighter font-sans font-semibold">
            What Hiring Managers Say
            </h1>
            <div className="flex md:flex-row flex-col gap-12 items-center justify-start mt-[60px]">
                <ReviewBox review={reviews[0]} className="shadow-[0px_10px_20px_rgba(0,_255,_167,_0.5),0px_-10px_20px_rgba(0,_0,_255,_0.5)]"   />
                <ReviewBox review={reviews[1]} className="shadow-[0px_10px_20px_rgba(215,_0,_253,_0.5),0px_-10px_20px_rgba(255,_151,_0,_0.5)]" />
                <ReviewBox review={reviews[2]} className="shadow-[0px_10px_20px_rgba(0,_255,_167,_0.5),0px_-10px_20px_rgba(0,_0,_255,_0.5)] md:block hidden" />
            </div>
            <div className="flex flex-col  items-center justify-start mt-[120px]">
                <p className="text-center text-[40px] tracking-tighter font-sans ">
                   Don't just take our word for it.
                </p>
                <p className="text-center text-[30px] tracking-tighter font-sans ">
                   Join the thousands of companies that have already made the switch.
                </p>
            </div>
        </div>
    )
}