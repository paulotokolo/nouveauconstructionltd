"use client"

import { useTheme } from "next-themes";
import { ModeToggle } from "@/components/mode-toggle";

interface MenuItem {
    title: string;
    links: {
      text: string;
      url: string;
    }[];
  }
  
  interface FooterProps {
    logo?: {
      url: string;
      src: string;
      alt: string;
      title: string;
    };
    tagline?: string;
    menuItems?: MenuItem[];
    copyright?: string;
    bottomLinks?: {
      text: string;
      url: string;
    }[];
  }
  
  const Footer = ({
    logo = {
      src: "/media/logo.png",
      alt: "Nouveau Construction Limited logo",
      title: "Nouveau Construction Limited",
      url: "https://www.nouveauconstruction.com",
    },
    tagline = "Discover Your Dream Luxury House",
    menuItems = [
      {
        title: "Product",
        links: [
          { text: "Overview", url: "#" },
          { text: "Pricing", url: "#" },
          { text: "Marketplace", url: "#" },
          { text: "Features", url: "#" },
          { text: "Integrations", url: "#" },
          { text: "Pricing", url: "#" },
        ],
      },
      {
        title: "Company",
        links: [
          { text: "About", url: "#" },
          { text: "Team", url: "#" },
          { text: "Blog", url: "#" },
          { text: "Careers", url: "#" },
          { text: "Contact", url: "#" },
          { text: "Privacy", url: "#" },
        ],
      },
      {
        title: "Resources",
        links: [
          { text: "Help", url: "#" },
          { text: "Sales", url: "#" },
          { text: "Advertise", url: "#" },
        ],
      },
      {
        title: "Social",
        links: [
          { text: "Twitter", url: "#" },
          { text: "Instagram", url: "#" },
          { text: "LinkedIn", url: "#" },
        ],
      },
    ],
    copyright,
    bottomLinks = [
      { text: "Terms and Conditions", url: "#" },
      { text: "Privacy Policy", url: "#" },
    ],
  }: FooterProps) => {
    const { resolvedTheme } = useTheme();
    const logoSrc = resolvedTheme === "dark" ? "/media/logo1.png" : "/media/logo.png";
    const year = new Date().getFullYear();
    const domain = typeof window !== 'undefined' ? window.location.hostname : 'nouveauconstruction.com';
    const copyrightText = `© ${year} ${domain}. All rights reserved.`;
    return (
      <section className="py-32">
        <div className="container">
          <footer>
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
              <div className="col-span-2 mb-8 lg:mb-0">
                <div className="flex items-center gap-2 lg:justify-start pl-6 w-full h-14">
                  <a href={logo.url}>
                    <img
                      src={logoSrc}
                      alt={logo.alt}
                      title={logo.title}
                      className="h-10"
                    />
                  </a>
                  <div className="ml-2"><ModeToggle /></div>
                </div>
                <div className="pl-6 mt-2">
                  <span className="text-base font-bold whitespace-nowrap">{tagline}</span>
                </div>
              </div>
              {menuItems.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h3 className="mb-4 font-bold">{section.title}</h3>
                  <ul className="space-y-4 text-muted-foreground">
                    {section.links.map((link, linkIdx) => (
                      <li
                        key={linkIdx}
                        className="font-medium hover:text-primary"
                      >
                        <a href={link.url}>{link.text}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
              <p className="pl-6">{copyright || copyrightText}</p>
              <ul className="flex gap-4">
                {bottomLinks.map((link, linkIdx) => (
                  <li key={linkIdx} className="underline hover:text-primary">
                    <a href={link.url}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          </footer>
        </div>
      </section>
    );
  };
  
  export { Footer };
  