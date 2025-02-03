import Navbar from "@/components/dashboard/Navbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="max-w-7xl mx-auto max-h-screen">
            <Navbar/>
            {children}
        </div>
    )
}