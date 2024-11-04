import { TextLogo } from "@/components/atoms";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarSeparator
} from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { UserButton } from "@clerk/nextjs";
import {
  Home,
  Inbox,
  MessageCircleIcon,
  MoreHorizontal,
  Settings,
  User2Icon
} from "lucide-react";
import Link from "next/link";

const NavGroup1 = [
  {
    title: "My Feed",
    url: "/feed",
    icon: Home,
  },
  {
    title: "Chats",
    url: "/chats",
    icon: MessageCircleIcon,
  },
  {
    title: "Notifications",
    url: "/notifications",
    icon: Inbox,
  },
  {
    title: "Profile",
    url: "/profile",
    icon: User2Icon,
  },
]

const NavGroup2 = [
  {
    title: "Settings",
    icon: Settings,
    component: () => (
      <SidebarMenuAction >
        <MoreHorizontal />
        <span className="sr-only">More</span>
      </SidebarMenuAction >
    ),
  },
]

export function SideBar() {
  return (
    <Sidebar className="py-6" variant="floating" collapsible="icon">
      <SidebarHeader>
        <TextLogo includeLogo className="mx-auto" sxText="hidden" sxImg="size-[60px]" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            Navigation
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarSeparator />

              {NavGroup1.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url} className="">
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>
            More
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarSeparator />

              <Collapsible defaultOpen className="group/collapsible">

                <CollapsibleTrigger asChild>
                  <SidebarMenuItem className="cursor-pointer">
                    <SidebarMenuButton asChild>
                      <span>
                        <Settings />
                        <span>Settings</span>
                      </span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <SidebarMenuItem>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>
                          <ThemeToggle includeText />
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </SidebarMenuItem></CollapsibleContent>
              </Collapsible>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <UserButton />
      </SidebarFooter>
    </Sidebar >
  )
}
