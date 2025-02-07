
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/dashboard/sidebar/app-sidebar";
export default function DashboardLayout({ children,companystats }: { children: React.ReactNode,companystats:React.ReactNode }) {
    return (
     <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
      {children}
      {companystats}
      </SidebarInset>    
    </SidebarProvider>
    )
}


