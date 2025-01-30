import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User } from "next-auth"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
  

type Props = {
    user:User | undefined
}

const UserAvatar = ({user}: Props) => {
  return (
    <HoverCard>
<HoverCardTrigger>
  <Avatar>
    <AvatarImage src={user?.image ?? undefined} />
    <AvatarFallback>{user?.name ? user.name.substring(0, 2).toUpperCase() : "NA"}</AvatarFallback>
  </Avatar>
  </HoverCardTrigger>
    <HoverCardContent>
            <h1 className='font-[200] tracking-tighter'>{user?.name}</h1>
            <p>{user?.email}</p>
  </HoverCardContent>


</HoverCard>
  )
}

export default UserAvatar