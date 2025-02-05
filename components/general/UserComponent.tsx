"use client"
import { useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import UserAvatar from "./UserAvatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { signOut } from "next-auth/react"




export const UserComponent = () => {
    const { data: session } = useSession();
    if (!session) return null;
    return (
        <div className="flex items-center gap-2">
            <DropdownMenu >
                <DropdownMenuTrigger>
                    <UserAvatar user={session.user} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="min-w-[200px] space-y-2 ">
                    <DropdownMenuItem>
                        <Link href='/dashboard'>My Account</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => signOut()}>
                        Logout
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <Button>
                <Link href='/dashboard'>Dashboard</Link>
            </Button>
        </div>
    )
}
