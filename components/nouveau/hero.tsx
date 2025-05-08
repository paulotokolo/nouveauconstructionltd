import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative overflow-x-hidden overflow-y-visible bg-white dark:bg-gray-950">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 z-0"></div>

      <div className="relative container mx-auto px-4 py-16 md:px-6 lg:py-24 2xl:max-w-[1400px] z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            {/* Announcement Banner */}
            <div className="mb-8">
              <Badge variant="outline" className="rounded-full px-4 py-1">
                <span className="mr-2">Just released: Enhanced customization and new properties</span>
                <ChevronRight className="h-4 w-4" />
              </Badge>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 break-words">
              Build better<br />
              lifestyles with<br />
              modern properties
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-xl">
              A professionally curated collection of luxury properties for 
              creating beautiful, responsive living spaces that match 
              your aspirations.
            </p>

            {/* Feature List */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Customizable properties for any lifestyle</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Smart home support out of the box</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Built with sustainability and full accessibility</span>
              </li>
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Button size="lg" className="cursor-pointer">
                Get Started
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="cursor-pointer">
                View Projects
              </Button>
            </div>

            {/* Property Types */}
            <div className="flex items-center flex-wrap gap-x-4 text-sm text-muted-foreground">
              <span>Trusted by developers at</span>
              <div className="flex space-x-4">
                <span className="font-semibold">Premium Properties</span>
                <span className="font-semibold">Luxury Estates</span>
                <span className="font-semibold">Modern Living</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]">
              {/* Main image */}
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1024"
                  alt="Luxury real estate"
                  fill
                  className="object-cover"
                  priority
                  onLoadingComplete={() => setImageLoaded(true)}
                />
              </div>

              {/* Image overlay with subtle shadow */}
              <div className="absolute inset-0 shadow-inner"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Add grid pattern style */}
      <style jsx global>{`
        .bg-grid-pattern {
          background-image: radial-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  );
}
