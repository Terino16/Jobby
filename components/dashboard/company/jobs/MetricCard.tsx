import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
interface MetricCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  className?: string;
  description: string;
}
export function MetricCard({ title, value, icon, className,description}: MetricCardProps) {
  return (
    <Card className={cn("w-full ")} >
      <CardHeader className="flex flex-row items-center justify-between ">
        <div>
        <CardTitle className="text-sm font-medium">
          {title}
        </CardTitle>
        <CardDescription className="text-sm font-medium text-muted-foreground "> {description} </CardDescription>
        </div>
      
        <span className={cn("p-2 rounded-md", className)}>
          {icon}
        </span>
   
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-semibold ">{value}</div>
      </CardContent>
    </Card>
  );
}