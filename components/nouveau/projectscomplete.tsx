import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Real estate project data for NouveauConstruction Ltd
const projects = [
  {
    id: 1,
    title: "Riverside Heights Residences",
    category: "Luxury Residential",
    description:
      "A 32-unit luxury condominium development featuring riverside views, premium finishes, and sustainable design elements.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2080&auto=format&fit=crop",
    tags: ["Condominiums", "Waterfront", "Sustainable", "Luxury"],
  },
  {
    id: 2,
    title: "Oakwood Business Center",
    category: "Commercial Development",
    description:
      "Modern office complex with Class A amenities, flexible workspaces, and cutting-edge smart building technology.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    tags: ["Commercial", "Office Space", "Smart Building", "LEED Certified"],
  },
  {
    id: 3,
    title: "The Westlake Collection",
    category: "Single-Family Homes",
    description:
      "Exclusive community of 18 custom-designed modern farmhouse estates on spacious lots with premium landscaping.",
    image:
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=2070&auto=format&fit=crop",
    tags: ["Single-Family", "Custom Homes", "Gated Community", "Luxury"],
  },
  {
    id: 4,
    title: "Maple Ridge Town Square",
    category: "Mixed-Use Development",
    description:
      "Vibrant downtown revitalization project combining retail, dining, residential units, and community gathering spaces.",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?q=80&w=2032&auto=format&fit=crop",
    tags: ["Mixed-Use", "Retail", "Apartments", "Urban Planning"],
  },
  {
    id: 5,
    title: "Evergreen Retirement Village",
    category: "Senior Living Community",
    description:
      "Thoughtfully designed senior living community offering independent living, assisted care options, and resort-style amenities.",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop",
    tags: ["Senior Living", "Healthcare", "Community", "Accessible Design"],
  },
  {
    id: 6,
    title: "Sunnyvale Eco-Estates",
    category: "Sustainable Development",
    description:
      "Net-zero energy homes featuring solar integration, advanced insulation, and smart home technology for sustainable living.",
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2080&auto=format&fit=crop",
    tags: ["Solar Powered", "Net-Zero", "Smart Home", "Eco-Friendly"],
  },
];

export default function PortfolioProjectStandardGrid() {
  return (
    <div className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 2xl:max-w-[1400px]">
        {/* Section header */}
        <div className="mb-12 text-center md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Signature Developments
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl">
            Explore our portfolio of distinguished real estate projects that showcase 
            NouveauConstruction Ltd's commitment to quality, innovation, and community-focused development.
          </p>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group hover:border-primary/30 overflow-hidden pt-0 transition-all duration-300 hover:shadow-lg"
            >
              {/* Project image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Category badge visible on hover */}
                <div className="absolute top-4 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="bg-primary/90 text-primary-foreground inline-block rounded-full px-3 py-1 text-xs font-medium backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project content */}
              <CardHeader className="">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground mt-2 line-clamp-2">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-muted text-muted-foreground inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="">
                <Button variant="secondary">
                  <Link href="#" className="text-primary flex items-center">
                    <span className="text-sm font-medium">View property</span>
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mx-auto mb-6 max-w-2xl">
            Interested in our development approach or looking to invest in upcoming projects?
          </p>
          <Button asChild size="lg">
            <Link href="/portfolio">View Full Portfolio</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}