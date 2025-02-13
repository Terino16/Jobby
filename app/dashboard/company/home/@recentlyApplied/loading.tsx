import { Skeleton } from "@/components/ui/skeleton";
export default function Loading() {
    return (
        <div>
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
        </div>
    )
}