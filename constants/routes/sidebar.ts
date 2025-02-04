import { Home, LucideIcon, Settings2 } from "lucide-react";
import { Briefcase, Plus } from "lucide-react";
import Routes from "./route";

interface SidebarRoute {
    title: string
    href: string
    icon: LucideIcon
    isActive?: boolean
}

export const sidebarRoutes: SidebarRoute[] = [
    {
        title: "Home",
        href: Routes.companyDashboard,
        icon: Home,
        isActive: true,
    },

    {
        title: "My Jobs",
        href: Routes.myJobs,
        icon: Briefcase,
        isActive: false,
    },
    {
        title: "Post a Job",
        href: Routes.postJob,
        icon: Plus,
        isActive: false,
    },
    {
        title: "Settings",
        href: Routes.settings,
        icon: Settings2,
        isActive: false,
    },
]


