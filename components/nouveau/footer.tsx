"use client"

import { useTheme } from "next-themes";
import { ModeToggle } from "@/components/mode-toggle";

// Interface for a single link item
interface LinkItem {
  text: string;
  url: string;
}

// Interface for a menu section in the footer
interface FooterMenuItem {
  title: string;
  links: LinkItem[];
}

interface FooterProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  tagline?: string;
  menuItems?: FooterMenuItem[];
  copyright?: string;
  bottomLinks?: LinkItem[]; // This is the prop we'll modify
}

// Define the default menu items from Navbar1
const defaultNavbarMenuItems = [
  { title: "Home", url: "#hero" },
  { title: "About", url: "#about" },
  { title: "Testimonials", url: "#testimonials" },
  { title: "Contact", url: "#contact" },
];

// Define the title for the footer menu section
const footerMenuSectionTitle = "Site Navigation";

// Transform navbar menu items for the footer structure
const defaultFooterMenuTransformed = [
  {
    title: footerMenuSectionTitle,
    links: defaultNavbarMenuItems.map(item => ({
      text: item.title,
      url: item.url,
    })),
  },
];

const Footer = ({
  logo = {
    src: "/media/logo.png",
    alt: "Nouveau Construction Limited logo",
    title: "Nouveau Construction Limited",
    url: "#hero",
  },
  tagline = "Discover Your Dream Luxury House",
  menuItems = defaultFooterMenuTransformed,
  copyright,
  // Updated default for bottomLinks to an empty array
  bottomLinks = [],
}: FooterProps) => {
  const { resolvedTheme } = useTheme();
  const logoSrc = resolvedTheme === "dark" ? "/media/logo1.png" : "/media/logo.png";
  const year = new Date().getFullYear();
  // It's good practice to have a fallback for domain if window is not available during SSR/build
  const domain = typeof window !== 'undefined' ? window.location.hostname : 'yourdomain.com';
  const copyrightText = `© ${year} ${domain}. All rights reserved.`;

  return (
    <section className="py-16 md:py-32">
      <div className="container px-6 md:px-4 mx-auto">
        <footer>
          {/* Logo and tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left mb-12">
            <div className="flex items-center gap-2 w-full justify-center md:justify-start">
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
            <div className="mt-4">
              <span className="text-base font-bold">{tagline}</span>
            </div>
          </div>

          {/* Menu items section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 md:mb-0">
            {menuItems.map((section, sectionIdx) => {
              const isTargetSectionForMobileSplit =
                section.title === footerMenuSectionTitle && section.links.length > 0;

              const leftColumnLinks = isTargetSectionForMobileSplit
                ? section.links.slice(0, 2)
                : [];
              const rightColumnLinks = isTargetSectionForMobileSplit
                ? section.links.slice(2, Math.min(4, section.links.length))
                : [];

              return (
                <div key={`${section.title}-${sectionIdx}`} className="text-left">
                  <h3 className="mb-4 font-bold">{section.title}</h3>
                  {isTargetSectionForMobileSplit ? (
                    <>
                      {/* Mobile: 2 columns (hidden on sm and up) */}
                      <div className="grid grid-cols-2 gap-x-4 sm:hidden">
                        <ul className="space-y-2 text-muted-foreground">
                          {leftColumnLinks.map((link, linkIdxMobile) => (
                            <li key={`left-${link.text}-${linkIdxMobile}`} className="font-medium hover:text-primary">
                              <a href={link.url}>{link.text}</a>
                            </li>
                          ))}
                        </ul>
                        <ul className="space-y-2 text-muted-foreground">
                          {rightColumnLinks.map((link, linkIdxMobile) => (
                            <li key={`right-${link.text}-${linkIdxMobile}`} className="font-medium hover:text-primary">
                              <a href={link.url}>{link.text}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* SM and up: Single list (hidden by default, block on sm and up) */}
                      <ul className="hidden sm:block space-y-2 text-muted-foreground">
                        {section.links.map((link, linkIdxDesktop) => (
                          <li key={`single-${link.text}-${linkIdxDesktop}`} className="font-medium hover:text-primary">
                            <a href={link.url}>{link.text}</a>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <ul className="space-y-2 text-muted-foreground">
                      {section.links.map((link, linkIdxNormal) => (
                        <li key={`${section.title}-${link.text}-${linkIdxNormal}`} className="font-medium hover:text-primary">
                          <a href={link.url}>{link.text}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom section: Copyright and links */}
          {/* The UL for bottomLinks will now render nothing if bottomLinks is empty */}
          <div className="mt-16 md:mt-24 flex flex-col md:flex-row justify-between items-center gap-4 border-t pt-8 text-sm font-medium text-muted-foreground">
            <p className="text-center md:text-left">{copyright || copyrightText}</p>
            {/* Only render the UL if there are bottom links to display */}
            {bottomLinks && bottomLinks.length > 0 && (
              <ul className="flex flex-wrap justify-center md:justify-end gap-4">
                {bottomLinks.map((link, linkIdx) => (
                  <li key={`bottom-${link.text}-${linkIdx}`} className="underline hover:text-primary">
                    <a href={link.url}>{link.text}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer };