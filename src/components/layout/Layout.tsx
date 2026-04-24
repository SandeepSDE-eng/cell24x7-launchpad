import { Header } from "./Header";
import { Footer } from "./Footer";
import { ChatWidget } from "@/components/ui/ChatWidget";
import { ScrollToTopButton } from "@/components/ui/ScrollToTopButton";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 lg:pt-20">
        {children}
      </main>
      <Footer />
      <ScrollToTopButton />
      <ChatWidget />
    </div>
  );
}
