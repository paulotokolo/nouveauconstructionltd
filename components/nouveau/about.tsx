"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Building,
  ArrowUpRightIcon,
  Globe,
  Users,
  Shield,
  HomeIcon,
  HandshakeIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Types
type CompanyValue = {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  color: string;
  principles: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    image: string;
  };
  image?: string;
};

// Company values data
const companyValues: CompanyValue[] = [
  {
    id: "quality-construction",
    name: "Quality Construction",
    description:
      "At Nouveau Construction Ltd, we build homes that stand the test of time. Our meticulous attention to detail and use of premium materials ensure that every property we develop exceeds industry standards and client expectations.",
    icon: Building,
    color: "text-amber-500",
    principles: [
      "Source only premium, sustainable building materials",
      "Implement rigorous quality control at every stage",
      "Partner with elite craftsmen and specialized contractors",
      "Exceed building code requirements in all developments",
    ],
    testimonial: {
      quote:
        "The quality of construction in our Nouveau Construction home is remarkable. Two years after moving in, we're still discovering thoughtful details and appreciating how solidly everything was built. This isn't just a house—it's a legacy we can pass down.",
      author: "Marcus & Claire Donovan",
      role: "Homeowners in Riverside Heights",
      image:
        "https://images.unsplash.com/photo-1495603889488-42d1d66e5523?q=80&w=400",
    },
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800",
  },
  {
    id: "client-trust",
    name: "Client Trust",
    description:
      "We believe transparency and integrity form the foundation of every successful real estate relationship. Our clients' trust is our most valuable asset, earned through honest communication, ethical practices, and consistently delivering on our promises.",
    icon: Shield,
    color: "text-blue-500",
    principles: [
      "Provide complete transparency in pricing and timelines",
      "Disclose all property information honestly and thoroughly",
      "Honor every commitment, regardless of challenges",
      "Protect client interests above all else in negotiations",
    ],
    testimonial: {
      quote:
        "Throughout our property investment journey, Nouveau Construction was refreshingly straightforward. When unexpected issues arose during construction, they informed us immediately and presented solutions rather than excuses. Their commitment to integrity transformed what could have been a stressful process into a rewarding partnership.",
      author: "Sophia Watkins",
      role: "Commercial Property Investor",
      image:
        "https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=400",
    },
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800",
  },
  {
    id: "innovative-design",
    name: "Innovative Design",
    description:
      "We constantly push the boundaries of real estate design, blending aesthetic appeal with practical functionality. Our innovative approach creates spaces that anticipate the evolving needs of modern living while maintaining timeless appeal.",
    icon: HomeIcon,
    color: "text-indigo-500",
    principles: [
      "Incorporate cutting-edge architectural concepts",
      "Balance visual appeal with practical livability",
      "Design with future lifestyle trends in mind",
      "Create flexible spaces that adapt to changing needs",
    ],
    testimonial: {
      quote:
        "What impressed me most about Nouveau Construction was their forward-thinking design approach. They incorporated smart home technology seamlessly into a classically inspired exterior. Three years later, the design still feels fresh and perfectly suited to our lifestyle, while our neighbors' newer homes already seem dated.",
      author: "Daniel Kwon",
      role: "Homeowner in Maple Ridge Estates",
      image:
        "https://images.unsplash.com/photo-1614890085618-0e1054da74f8?q=80&w=400",
    },
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800",
  },
  {
    id: "client-experience",
    name: "Client Experience",
    description:
      "We transform the complex process of real estate development, buying, and selling into a clear, stress-free journey. Every client interaction is an opportunity to exceed expectations and create advocates for Nouveau Construction Ltd.",
    icon: HandshakeIcon,
    color: "text-red-500",
    principles: [
      "Provide personalized service tailored to individual needs",
      "Offer round-the-clock accessibility to our team",
      "Simplify complex real estate processes with clear communication",
      "Continue relationship-building long after transactions complete",
    ],
    testimonial: {
      quote:
        "As first-time homebuyers, we were intimidated by the process, but Nouveau Construction guided us through every step. Their team was remarkably responsive—our questions were answered within hours, even on weekends. They treated our modest starter home purchase with the same care as their luxury listings.",
      author: "Leslie and Jordan Taylor",
      role: "First-Time Homebuyers",
      image:
        "https://images.unsplash.com/photo-1614890107637-fe96d74acf4b?q=80&w=400",
    },
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
  },
  {
    id: "market-expertise",
    name: "Market Expertise",
    description:
      "Our deep understanding of real estate markets allows us to identify opportunities others miss and navigate challenges with confidence. We continuously analyze trends, regulations, and economic factors to provide our clients with strategic advantage.",
    icon: Users,
    color: "text-emerald-500",
    principles: [
      "Maintain comprehensive knowledge of local market conditions",
      "Conduct thorough analysis before every investment recommendation",
      "Stay ahead of zoning changes and development regulations",
      "Provide clients with data-driven insights for decision-making",
    ],
    testimonial: {
      quote:
        "Nouveau Construction's market knowledge proved invaluable for our investment portfolio. Their team predicted the emerging demand in the northwest corridor six months before it became widely recognized. Their guidance helped us secure properties before prices escalated, resulting in substantial appreciation that exceeded market averages by 22%.",
      author: "Victor Mendes",
      role: "Real Estate Investment Trust Manager",
      image:
        "https://images.unsplash.com/photo-1628149321186-7d4c5b1170f9?q=80&w=400",
    },
    image:
      "https://images.unsplash.com/photo-1626178793926-22b28830aa30?q=80&w=800",
  },
  {
    id: "community-impact",
    name: "Community Impact",
    description:
      "We believe real estate development should enhance communities, not just occupy space within them. Every Nouveau Construction project aims to create lasting positive impact through environmental sustainability, thoughtful integration, and support for local initiatives.",
    icon: Globe,
    color: "text-green-500",
    principles: [
      "Design developments that complement existing neighborhood character",
      "Incorporate green spaces and sustainable features in all projects",
      "Support local businesses during construction and beyond",
      "Allocate resources to community enhancement programs",
    ],
    testimonial: {
      quote:
        "What sets Nouveau Construction apart is their genuine commitment to community well-being. When developing our neighborhood, they preserved the historic oak grove that gives our area its character, despite the additional cost. They've remained involved years later, sponsoring our annual festival and helping establish our community garden.",
      author: "Eliana Washington",
      role: "Community Association President",
      image:
        "https://images.unsplash.com/photo-1473492201326-7c01dd2e596b?q=80&w=400",
    },
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
  },
];

export default function AboutSectionCompanyValues() {
  const [activeValue, setActiveValue] = useState<string>(companyValues[0].id);

  // Get active value object
  const currentValue =
    companyValues.find((value) => value.id === activeValue) || companyValues[0];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px]">
        <div className="mx-auto mb-16 max-w-3xl space-y-4 text-center">
          <div className="bg-primary/10 text-primary inline-block rounded-lg px-3 py-1 text-sm">
            The Nouveau Construction Difference
          </div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Building More Than Properties—We Build Trust
          </h2>
          <p className="text-muted-foreground">
            At Nouveau Construction Ltd, our values guide every decision—from the materials we select to the communities we help create. Discover the principles that have made us a leader in real estate development, investment, and sales.
          </p>
        </div>

        <Tabs
          value={activeValue}
          onValueChange={setActiveValue}
          className="space-y-8"
        >
          {/* Value selection - Tabs for md+ screens, Dropdown for smaller screens */}
          <div className="mb-8 flex justify-center">
            {/* Dropdown for small screens */}
            <div className="w-full md:hidden">
              <Select value={activeValue} onValueChange={setActiveValue}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a value" />
                </SelectTrigger>
                <SelectContent>
                  {companyValues.map((value) => (
                    <SelectItem key={value.id} value={value.id}>
                      <div className="flex items-center gap-2">
                        <value.icon className={cn("h-4 w-4", value.color)} />
                        <span>{value.name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Tabs for medium screens and above */}
            <TabsList className="hidden h-auto bg-transparent p-1 md:flex">
              {companyValues.map((value) => (
                <TabsTrigger
                  key={value.id}
                  value={value.id}
                  className={cn(
                    "data-[state=active]:bg-muted gap-2",
                    "data-[state=active]:border-border border border-transparent",
                  )}
                >
                  <value.icon className={cn("h-4 w-4", value.color)} />
                  <span>{value.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Value content */}
          <div className="grid items-center gap-8 md:grid-cols-12">
            {/* Left column: Value details */}
            <div className="space-y-6 md:col-span-6">
              <div className="mb-4 flex items-center gap-4">
                <div className={cn("rounded-xl p-2.5", "bg-muted")}>
                  <currentValue.icon
                    className={cn("h-7 w-7", currentValue.color)}
                  />
                </div>
                <h3 className="text-2xl font-bold">{currentValue.name}</h3>
              </div>

              <p className="text-muted-foreground text-lg">
                {currentValue.description}
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="font-medium">Our Commitment:</h4>
                <ul className="space-y-2">
                  {currentValue.principles.map((principle, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ArrowUpRightIcon
                        className={cn("mt-0.5 h-5 w-5", currentValue.color)}
                      />
                      <span>{principle}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {currentValue.testimonial && (
                <Card className="bg-muted/30 mt-6 p-0">
                  <CardContent className="p-6">
                    <div className="mb-4 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                      <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full">
                        <Image
                          src={currentValue.testimonial.image}
                          alt={currentValue.testimonial.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">
                          {currentValue.testimonial.author}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {currentValue.testimonial.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic">
                      &quot;{currentValue.testimonial.quote}&quot;
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Right column: Value image */}
            <div className="md:col-span-6">
              {currentValue.image ? (
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src={currentValue.image}
                    alt={`Illustration of our ${currentValue.name} value`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute right-0 bottom-0 left-0 p-6">
                    <div
                      className={cn(
                        "inline-block rounded-lg px-3 py-1 text-sm text-white",
                        "bg-black/30 backdrop-blur-sm",
                      )}
                    >
                      {currentValue.name}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-muted flex aspect-[4/3] items-center justify-center rounded-xl">
                  <currentValue.icon
                    className={cn(
                      "h-24 w-24",
                      currentValue.color,
                      "opacity-25",
                    )}
                  />
                </div>
              )}
            </div>
          </div>
        </Tabs>

        {/* Call-to-action */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mx-auto mb-6 max-w-2xl">
            Experience the Nouveau Construction difference for yourself. Whether you're looking to buy, sell, or invest in exceptional real estate, our team is ready to exceed your expectations.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}