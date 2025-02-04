import Navbar from "@/components/dashboard/Navbar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/dashboard/sidebar/app-sidebar";
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
     <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
      {children}
      </SidebarInset>    
    </SidebarProvider>
    )
}


