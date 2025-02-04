"use client"
import Link from "next/link"
import * as React from "react"
import Routes from "@/constants/routes/route"
import { useSession } from "next-auth/react"
import {
  BookOpen,
  Bot,
  LifeBuoy,
  Send,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "./nav-main"
import { NavSecondary } from "./nav-secondary"
import { NavUser } from "./nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image"
import { sidebarRoutes } from "@/constants/routes/sidebar"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  // const { data: session } = useSession();
  // const user = session?.user;
  // if(!user) return null;

  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    image: "/avatars/shadcn.jpg",
  }
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg ">
                 <Image  width={32} height={32} src='/Jobby_Logo.png' alt='logo' />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Jobby</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={sidebarRoutes} />
        <NavSecondary className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
          {/* <NavUser user={{
            name: user.name ?? 'Anonymous',
            email: user.email ?? '',
            image: user.image ?? ''
          }} /> */}
          <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  )
}
