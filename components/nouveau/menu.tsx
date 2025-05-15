"use client"

import { Book, Menu, Sunset, Trees, Zap } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useTheme } from "next-themes";
import { ModeToggle } from "@/components/mode-toggle";
import { animate } from "framer-motion";
import { useCallback } from "react";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
}

const Navbar1 = ({
  logo = {
    url: "#hero",
    src: "/media/logo.png",
    alt: "logo",
    title: "Nouveau Construction Limited",
  },
  menu = [
    { title: "Home", url: "#hero" },
    { title: "About", url: "#about" },
    // { title: "Projects", url: "#projects" },
    { title: "Testimonials", url: "#testimonials" },
    { title: "Contact", url: "#contact" },
  ],
}: Navbar1Props) => {
  const { resolvedTheme } = useTheme();
  const logoSrc = resolvedTheme === "dark" ? "/media/logo1.png" : "/media/logo.png";

  // Smooth scroll handler using framer-motion animate
  const handleSmoothScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, targetId: string) => {
    e.preventDefault();
    const el = document.querySelector(targetId);
    if (el) {
      const startY = window.scrollY;
      const endY = el.getBoundingClientRect().top + window.scrollY;
      animate(startY, endY, {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        onUpdate: (v) => window.scrollTo(0, v),
      });
    }
  }, []);

  return (
    <section className="py-4">
      <div className="container">
        {/* Desktop Menu */}
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6 pl-6">
            {/* Logo - made bigger */}
            <a href={logo.url} className="flex items-center gap-2" onClick={e => handleSmoothScroll(e, logo.url)}>
              <img src={logoSrc} className="max-h-12" alt={logo.alt} />
            </a>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => (
                    <NavigationMenuItem key={item.title}>
                      <NavigationMenuLink
                        href={item.url}
                        onClick={e => handleSmoothScroll(e, item.url)}
                        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground cursor-pointer"
                      >
                        {item.title}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex items-center">
            <ModeToggle />
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between pl-4">
            {/* Logo - made bigger */}
            <a href={logo.url} className="flex items-center gap-2" onClick={e => handleSmoothScroll(e, logo.url)}>
              <img src={logoSrc} className="max-h-10" alt={logo.alt} />
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <a href={logo.url} className="flex items-center gap-2" onClick={e => handleSmoothScroll(e, logo.url)}>
                      {/* Logo in sheet header also made bigger */}
                      <img src={logoSrc} className="max-h-10" alt={logo.alt} />
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => (
                      <button
                        key={item.title}
                        onClick={e => handleSmoothScroll(e, item.url)}
                        className="text-md font-semibold text-left cursor-pointer bg-transparent border-0 p-0 m-0 scroll-smooth"
                        style={{ outline: "none" }}
                      >
                        {item.title}
                      </button>
                    ))}
                  </Accordion>

                  <div className="flex justify-center pt-2">
                    <ModeToggle />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </a>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className="flex flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
      href={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-snug text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};

export { Navbar1 };