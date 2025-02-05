import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
interface MetricCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  className?: string;
  divClassName?: string;
}
export function MetricCard({ title, value, icon, className,divClassName }: MetricCardProps) {
  return (
    <Card className={cn("", divClassName)} >
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground ">
          {title}
        </CardTitle>
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