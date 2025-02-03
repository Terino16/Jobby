import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";
interface Props {
    review: {
        name: string;
        title: string;
        text: string;
        image: string;
        star: number;
    }
    className?: string;
}

export default function ReviewBox({ review,className }: Props) {
    const { name, title, text, image, star } = review;
    const renderStars = () => {
        return Array.from({ length: 5 }, (_, index) => (
            <svg
                key={index}
                className={`w-4 h-4 ms-1 ${index < star ? "text-yellow-300" : "text-gray-300 dark:text-gray-500"}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
            >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
        ));
    };

    return ( 
            <Card className={cn("max-w-[350px] min-h-[300px] ",className)}>
                <CardHeader>
                    <div className="flex items-center gap-4">
                        <Avatar>
                            <AvatarImage src={image} />
                            <AvatarFallback>{"A"}</AvatarFallback>
                        </Avatar>
                        <CardTitle>
                            {name}  
                            <h2 className="text-sm text-gray-700">{title}</h2>
                        </CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center mt-2">{renderStars()}</div>
                    <p className="mt-2">{text}</p>
                </CardContent>
            </Card>
    );
}