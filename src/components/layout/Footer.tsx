import { Link } from "react-router-dom";
import { siteConfig } from "@/config/site";
import { MessageCircle, Mail, Phone, Twitter, Linkedin, Facebook } from "lucide-react";
import logo from "@/assets/main red no pad.png";

const footerLinks = {
  product: [
    { name: "Features", href: "/features" },
    { name: "Channels", href: "/channels" },
    { name: "Pricing", href: "/pricing" },
    { name: "Integrations", href: "/integrations" },
    { name: "API Docs", href: "/docs" },
  ],
  solutions: [
    { name: "E-commerce", href: "/use-cases#ecommerce" },
    { name: "Healthcare", href: "/use-cases#healthcare" },
    { name: "Education", href: "/use-cases#education" },
    { name: "Real Estate", href: "/use-cases#realestate" },
    { name: "BFSI", href: "/use-cases#bfsi" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Partners", href: "/partners" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/resources" },
    { name: "Contact", href: "/book-demo" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-background text-foreground">
      <div className="container-custom py-12 border-t border-border/30">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-start">
          {/* Brand & CTA */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="Cell24x7"
                className="h-10 lg:h-12 object-contain shadow-sm"
                style={{ filter: 'brightness(0) saturate(100%) invert(41%) sepia(77%) saturate(749%) hue-rotate(242deg) brightness(97%) contrast(101%)' }}
              />
              <span className="sr-only">{siteConfig.name}</span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-xs">
              AI-powered omnichannel communication platform for modern businesses.
            </p>

            <div className="flex items-center gap-3 mb-4">
              <a href={siteConfig.social.twitter} className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href={siteConfig.social.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={siteConfig.social.facebook} className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>

            <div className="flex gap-3">
              <Link to="/book-demo" className="inline-flex items-center h-10 px-4 bg-[#5956d6] text-white rounded-md text-sm font-semibold">
                Book a Demo
              </Link>
              <Link to="/signup" className="inline-flex items-center h-10 px-4 border border-[#5956d6] text-[#5956d6] rounded-md text-sm font-semibold">
                Start Free Trial
              </Link>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-4">Product</h4>
                <ul className="space-y-3">
                  {footerLinks.product.map((link) => (
                    <li key={link.name}>
                      <Link to={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Solutions</h4>
                <ul className="space-y-3">
                  {footerLinks.solutions.map((link) => (
                    <li key={link.name}>
                      <Link to={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-sm text-muted-foreground mb-2">{siteConfig.contact.location}</p>
            <p className="text-sm text-muted-foreground mb-2">{siteConfig.contact.address}</p>

            <a href={`mailto:${siteConfig.contact.email}`} className="block mt-3 text-sm text-muted-foreground hover:text-primary">{siteConfig.contact.email}</a>
            <a href={`tel:${siteConfig.contact.phone}`} className="block mt-2 text-sm text-muted-foreground hover:text-primary">{siteConfig.contact.phone}</a>
            <a href={`https://wa.me/${siteConfig.contact.whatsapp}`} className="block mt-2 text-sm text-muted-foreground hover:text-primary">WhatsApp</a>


          </div>
        </div>

        <div className="mt-8 border-t border-border/30 pt-6 flex flex-col md:flex-row md:justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</div>
          <div className="flex items-center gap-4 text-sm">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
