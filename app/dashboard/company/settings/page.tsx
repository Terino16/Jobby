import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/general/theme-toggle"
import { SidebarTrigger } from "@/components/ui/sidebar"
import SettingPage from "@/components/dashboard/company/settings/SettingPage"

import { getCompany } from "@/actions/dashboard/company/Home/getCompany"
export default  async function Settings() {
  const company=await getCompany();

  return (
    <div>
      <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex w-full items-center justify-between gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <ModeToggle />
          </div>

        </header>
        <main className="flex-1 p-8 ">

         <h1 className="lg:text-5xl md:text-4xl text-3xl font-thin tracking-tighter font-sans mb-8">Settings</h1>
         <SettingPage company={company} />
        </main>
        </div>
    )
}