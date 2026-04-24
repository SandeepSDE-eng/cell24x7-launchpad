import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import {
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import logo from "@/assets/main red no pad.png";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

// Navigation items with submenus
const navigationItems = [
  {
    name: "Features",
    href: "/features",
    submenu: [
      { name: "Unified Inbox", href: "/features/unified-inbox", description: "All conversations in one place" },
      { name: "AI Automation", href: "/features/ai-automation", description: "Intelligent chatbots & workflows" },
      { name: "Campaigns", href: "/features/campaigns", description: "Broadcast & targeted messaging" },
      { name: "Analytics", href: "/features/analytics", description: "Data-driven insights" },
    ],
  },
  {
    name: "Channels",
    href: "/channels",
    submenu: [
      { name: "SMS", href: "/channels/sms", description: "Global SMS messaging" },
      { name: "RCS", href: "/channels/rcs", description: "Rich Communication Services" },
      { name: "WhatsApp", href: "/channels/whatsapp", description: "WhatsApp Business API" },
      { name: "Email", href: "/channels/email", description: "Professional email campaigns" },
      { name: "VoiceBot", href: "/channels/voicebot", description: "AI-powered voice automation" },
      { name: "Web Application", href: "/channels/custom", description: "Build your own integration" },
    ],
  },
  { name: "Pricing", href: "/pricing" },
  {
    name: "Use Cases",
    href: "/use-cases",
    submenu: [
      { name: "E-commerce", href: "/use-cases/ecommerce", description: "Boost sales & reduce cart abandonment" },
      { name: "Healthcare", href: "/use-cases/healthcare", description: "HIPAA-compliant patient messaging" },
      { name: "Education", href: "/use-cases/education", description: "Student & parent engagement" },
      { name: "Real Estate", href: "/use-cases/real-estate", description: "Nurture leads faster" },
    ],
  },
  {
    name: "Company",
    href: "/company",
    submenu: [
      { name: "About Us", href: "/about", description: "Our story and mission" },
      { name: "Partners", href: "/partners", description: "Partner program" },
      { name: "Careers", href: "/careers", description: "Join our team" },
      { name: "Blog", href: "/blog", description: "Latest news & insights" },
    ],
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);
  const location = useLocation();

  const toggleMobileSubmenu = (name: string) => {
    setOpenMobileSubmenu(openMobileSubmenu === name ? null : name);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm transition-all duration-500">
      <nav className="container-custom flex items-center justify-between h-14 lg:h-20 text-black">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <img
            src={logo}
            alt="Cell24x7"
            className="h-8 md:h-10 lg:h-12 object-contain shadow-sm"
            style={{ filter: 'brightness(0) saturate(100%) invert(41%) sepia(77%) saturate(749%) hue-rotate(242deg) brightness(97%) contrast(101%)' }}
          />
          <span className="sr-only">{siteConfig.name}</span>
        </Link>

        {/* Desktop Navigation with Dropdowns (simpler; each submenu opens under its trigger) */}
        <div className="hidden lg:flex">
          <ul className="flex items-center space-x-2">
            {navigationItems.map((item) => (
              <li key={item.name} className="relative">
                {item.submenu ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "inline-flex items-center",
                          location.pathname === item.href && "text-primary"
                        )}
                        aria-haspopup="menu"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="ml-2 h-3 w-3 transition-transform data-[state=open]:-rotate-180" />
                      </button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="center" side="bottom" sideOffset={6} className="p-2 relative w-48 sm:w-56 bg-white text-black shadow-lg border border-gray-200">
                      {/* pointer */}
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 rotate-45 w-3 h-3 bg-white border-t border-l border-gray-200" aria-hidden />

                      <ul className="flex flex-col">
                        {item.submenu.map((subItem) => (
                          <li key={subItem.name}>
                            <DropdownMenuItem asChild>
                              <Link
                                to={subItem.href}
                                className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors"
                              >
                                {subItem.name}
                              </Link>
                            </DropdownMenuItem>
                          </li>
                        ))}
                      </ul>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link to={item.href} className={cn(navigationMenuTriggerStyle(), location.pathname === item.href && "text-primary")}>
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="ghost" className="text-foreground hover:text-primary" asChild>
            <a href="https://project.pingchannel.com/auth" target="_blank" rel="noopener noreferrer">Login</a>
          </Button>
          <Button 
            variant="hero" 
            className="rounded-full px-6 group"
            asChild
          >
            <Link to={siteConfig.cta.primary.href}>
              {siteConfig.cta.primary.text}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu & Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/60 transition-opacity lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu overlay"
          />
          {/* Mobile Menu */}
          <div className="lg:hidden fixed top-0 left-0 right-0 z-50 mt-14 bg-white border-b border-border/40 animate-fade-in max-h-[80vh] overflow-y-auto shadow-xl">
            <div className="container-custom py-4 flex flex-col gap-1">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => toggleMobileSubmenu(item.name)}
                        className={cn(
                          "w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                          location.pathname === item.href
                            ? "text-primary bg-primary/10"
                            : "text-foreground hover:text-primary hover:bg-secondary"
                        )}
                      >
                        {item.name}
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 transition-transform",
                            openMobileSubmenu === item.name && "rotate-180"
                          )}
                        />
                      </button>
                      {openMobileSubmenu === item.name && (
                        <div className="pl-4 py-1 space-y-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className={cn(
                        "block px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                        location.pathname === item.href
                          ? "text-primary bg-primary/10"
                          : "text-foreground hover:text-primary hover:bg-secondary"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border/50">
                <Button variant="ghost" asChild className="w-full justify-start">
                  <a href="https://project.pingchannel.com/auth" target="_blank" rel="noopener noreferrer">Login</a>
                </Button>
                <Button variant="hero" className="w-full rounded-full" asChild>
                  <Link to={siteConfig.cta.primary.href}>
                    {siteConfig.cta.primary.text}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
