import { SideBar } from "@/components/molecules/side-bar/side-bar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function WithSideNavLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider className="w-full flex items-center gap-2">
      <SideBar />

      <div className="w-full">
        <SidebarTrigger />
        {children}
      </div>
    </SidebarProvider>
  );
}
