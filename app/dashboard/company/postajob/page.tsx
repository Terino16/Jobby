
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/general/theme-toggle";
import PostJob from "@/components/dashboard/company/jobs/PostJob";
export default function PostJobPage() {
  return (
    <div>
      <header className="flex h-16 shrink-0 items-center gap-2">
        <div className="flex w-full items-center justify-between gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <ModeToggle />
        </div>

      </header>

      <main className="flex-1 p-8 ">

        <h1 className="lg:text-5xl md:text-4xl text-3xl font-thin tracking-tighter font-sans mb-8">Post a New Job</h1>
        <PostJob />

      </main>
    </div>
  )
}