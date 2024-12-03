import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { MarketSidebar } from "@/components/ui/market-sidebar";

export default function MarketLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <MarketSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
