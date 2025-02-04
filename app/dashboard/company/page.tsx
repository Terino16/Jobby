import { ModeToggle } from "@/components/general/theme-toggle"

import { SidebarTrigger } from "@/components/ui/sidebar"
  
export default function Page() {
    return (
        <div className="">
            <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex w-full items-center justify-between gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <ModeToggle />
          </div>
        </header>
        </div>
    )
}