import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const recentApplications = [
  {
    name: "John Doe",
    position: "Senior Developer",
    date: "2 hours ago",
    avatar: "JD",
  },
  {
    name: "Sarah Smith",
    position: "Product Manager",
    date: "5 hours ago",
    avatar: "SS",
  },
  {
    name: "Mike Johnson",
    position: "UX Designer",
    date: "1 day ago",
    avatar: "MJ",
  },
];
export function RecentApplications() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Applications</CardTitle>
        <CardDescription>Latest candidates who applied</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentApplications.map((application) => (
            <div
              key={application.name}
              className="flex items-center space-x-4 rounded-lg border p-4"
            >
              <Avatar>
                <AvatarFallback>{application.avatar}</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">{application.name}</p>
                <p className="text-sm text-muted-foreground">
                  {application.position}
                </p>
              </div>
              <p className="text-sm text-muted-foreground">{application.date}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}