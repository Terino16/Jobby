"use client"
import Link from "next/link"
import * as React from "react"
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

  return (
    <Sidebar variant="inset" {...props} className="">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg ">
                 <Image  width={32} height={32} src='/Jobby_Logo.png' alt='logo' />
                </div>
                <div className="grid flex-1 text-left text-md leading-tight">
                  <span className="truncate font-bold">Jobby</span>
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
          <NavUser />
      </SidebarFooter>
    </Sidebar>
  )
}
