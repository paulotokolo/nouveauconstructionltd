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
  ChevronDownIcon,
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

// REVISED Company values data
const companyValues: CompanyValue[] = [
  {
    id: "quality-construction",
    name: "Built to Last",
    description:
      "At Nouveau Construction Ltd, we don't just erect buildings; we craft legacies. Our unwavering focus on detail and the use of superior materials mean every structure we complete not only meets but surpasses industry benchmarks and your highest expectations.",
    icon: Building,
    color: "text-amber-500",
    principles: [
      "Sourcing only top-tier, durable building materials",
      "Embedding rigorous quality checks throughout every phase of construction",
      "Collaborating with master craftsmen and specialized trade partners",
      "Consistently exceeding building code standards in all our projects",
    ],
    testimonial: {
      quote:
        "The team at Nouveau didn't just build our commercial space; they crafted it. You can see the attention to detail in every joint and finish. We've had architects and other contractors visit, and they always comment on the exceptional build quality. It's clear these guys take immense pride in their work.",
      author: "David Lee",
      role: "Owner, 'The Artisan Hub' Commercial Development",
      image:
        "https://images.unsplash.com/photo-1495603889488-42d1d66e5523?q=80&w=400", // Keep or change image as appropriate
    },
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800",
  },
  {
    id: "client-trust",
    name: "Steadfast Trust",
    description:
      "Transparency and unwavering integrity are the cornerstones of every successful construction project and client partnership. Your trust is our most valued achievement, built on clear communication, ethical work, and a track record of delivering on our word.",
    icon: Shield,
    color: "text-blue-500",
    principles: [
      "Clear, upfront pricing and realistic project timelines",
      "Honest and thorough disclosure of all project details",
      "Honoring every commitment, even when challenges arise",
      "Championing your interests throughout the entire build process",
    ],
    testimonial: {
      quote:
        "Building our new factory was a huge undertaking. Nouveau Construction earned our trust from day one. They were completely open about costs, timelines, and the inevitable challenges that pop up. Their project manager was always available, and we truly felt like they were our partners, not just a vendor.",
      author: "Maria Rodriguez",
      role: "Operations Director, Innovatech Manufacturing",
      image:
        "https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=400", // Keep or change image as appropriate
    },
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800",
  },
  {
    id: "innovative-design",
    name: "Inspired Design & Build",
    description:
      "We're passionate about pushing the boundaries of architectural and construction design, merging striking aesthetics with smart functionality. Our forward-thinking approach results in spaces built for today’s needs and tomorrow’s possibilities.",
    icon: HomeIcon, // Consider changing to an icon more representative of commercial/general construction if needed
    color: "text-indigo-500",
    principles: [
      "Integrating pioneering architectural and construction methods",
      "Harmonizing visual impact with everyday practicality",
      "Designing structures with future lifestyles and uses in mind",
      "Creating adaptable spaces that evolve with your requirements",
    ],
    testimonial: {
      quote:
        "We needed a modern office that was both visually stunning and highly functional. Nouveau Construction's design team came up with concepts we hadn't even imagined, and then their construction crew brought it to life flawlessly. They really understood how to blend cutting-edge design with practical construction.",
      author: "Chen Zhao",
      role: "CEO, TechFlow Solutions",
      image:
        "https://images.unsplash.com/photo-1614890085618-0e1054da74f8?q=80&w=400", // Keep or change image as appropriate
    },
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800",
  },
  {
    id: "client-experience",
    name: "Seamless Project Journey",
    description:
      "We simplify the often complex journey of bringing a construction project to life, ensuring clarity and peace of mind from blueprint to final build. Every interaction is a chance for us to show you how dedicated we are to your vision.",
    icon: HandshakeIcon,
    color: "text-red-500",
    principles: [
      "Dedicated, personal service for every unique project",
      "Keeping you informed and connected with our team",
      "Making complex construction processes clear and understandable",
      "Building relationships that last long after project completion",
    ],
    testimonial: {
      quote:
        "Embarking on a major renovation of our community center felt overwhelming, but Nouveau made the entire process smooth. From the initial consultation to the final walkthrough, their communication was excellent. They kept us updated, managed all the subcontractors efficiently, and really took the stress out of the project.",
      author: "Sarah Miller",
      role: "Project Lead, Oakhaven Community Center Renovation",
      image:
        "https://images.unsplash.com/photo-1614890107637-fe96d74acf4b?q=80&w=400", // Keep or change image as appropriate
    },
    image:
      "https://images.unsplash.com/photo-1587582423116-ec07293f0395?q=80&w=800",
  },
  {
    id: "market-expertise",
    name: "Construction Insight",
    description:
      "Our deep understanding of the construction landscape, material science, and project viability allows us to navigate complexities with assurance. We constantly analyze industry trends and best practices to give your project a distinct advantage.",
    icon: Users, // Consider Lightbulb or Brain icon for "insight" or "expertise"
    color: "text-emerald-500",
    principles: [
      "Mastery of local building conditions and regulations",
      "In-depth analysis before committing to project strategies",
      "Staying current with zoning, permits, and building innovations",
      "Equipping you with solid data for confident decisions",
    ],
    testimonial: {
      quote:
        "We faced a challenging site with tricky soil conditions for our new warehouse. Nouveau's expertise was a game-changer. They proposed an innovative foundation solution that saved us time and money, all while ensuring long-term stability. Their understanding of complex construction challenges is top-notch.",
      author: "Tom Adewale",
      role: "Logistics Manager, Apex Distribution Ltd.",
      image:
        "https://images.unsplash.com/photo-1628149321186-7d4c5b1170f9?q=80&w=400", // Keep or change image as appropriate
    },
    image:
      "https://images.unsplash.com/photo-1626178793926-22b28830aa30?q=80&w=800",
  },
  {
    id: "community-impact",
    name: "Building Better Communities",
    description:
      "We believe exceptional construction and thoughtful development should enrich the communities they serve. Each Nouveau Construction project is an opportunity to create lasting positive change through sustainable building, smart integration, and active local support.",
    icon: Globe,
    color: "text-green-500",
    principles: [
      "Designing projects that enhance the local neighborhood's character",
      "Prioritizing green spaces and sustainable building practices",
      "Partnering with local businesses throughout the construction lifecycle",
      "Investing in programs that uplift the local community",
    ],
    testimonial: {
      quote:
        "Nouveau Construction didn't just build our new library wing; they invested in our community. They hired local subcontractors, used sustainable materials, and even helped us design a community garden space adjacent to the new build. They truly care about the impact they make beyond the bricks and mortar.",
      author: "Fatima Al-Jamil",
      role: "Director, Crestwood Public Library",
      image:
        "https://images.unsplash.com/photo-1473492201326-7c01dd2e596b?q=80&w=400", // Keep or change image as appropriate
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
            The Nouveau Construction Edge
          </div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Crafting Structures, Building Futures
          </h2>
          <p className="text-muted-foreground">
            At Nouveau Construction Ltd, our core values are hammered into every beam and blueprint. They shape every choice, from the materials we handpick to the lasting structures we raise. See the principles that define us as leaders in quality construction.
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
                  <div className="flex w-full items-center justify-between">
                    <SelectValue placeholder="Select a value" />
                    <ChevronDownIcon className="h-4 w-4 opacity-50" />
                  </div>
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
                <h4 className="font-medium">Our Pledge on Every Project:</h4> {/* Changed from "Our Commitment" */}
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
                    alt={`Showcasing our commitment to ${currentValue.name}`} // Slightly more descriptive alt text
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
            Ready to see the Nouveau Construction standard in action? Whether you're planning a new build, a complex renovation, or a landmark development, our team is here to bring your vision to life with excellence.
          </p>
        </div>
      </div>
    </section>
  );
}