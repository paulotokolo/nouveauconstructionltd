"use client"; // Add this if not already present at the top of HeroSection.tsx

import { useState, useCallback } from "react"; // Import useCallback
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { animate } from "framer-motion"; // Import animate from framer-motion

export default function HeroSection() {
  // Smooth scroll handler copied and adapted from Navbar1
  const handleSmoothScroll = useCallback(
    (
      e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
      targetId: string
    ) => {
      e.preventDefault();
      const el = document.querySelector(targetId);
      if (el) {
        const startY = window.scrollY;
        // Get the top position of the element relative to the viewport
        const elementTop = el.getBoundingClientRect().top;
        // Calculate the absolute top position of the element on the page
        const endY = elementTop + window.scrollY;

        animate(startY, endY, {
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1], // Cubic bezier easing for smooth effect
          onUpdate: (v) => window.scrollTo(0, v),
        });
      } else {
        console.warn(`Element with ID "${targetId}" not found.`);
      }
    },
    []
  );

  return ( 
    <div className="overflow-hidden border">
      <div className="flex flex-col sm:grid sm:grid-cols-2">
        {/* Image Block */}
        <div className="h-56 sm:h-full sm:order-last">
          <Image
            src="https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?auto=format&fit=crop&q=80&w=1024"
            alt="Quality construction project"
            className="h-full w-full object-cover"
            width={1024}
            height={768}
            priority
          />
        </div>

        {/* Content Block */}
        <div className="p-6 md:p-12 lg:px-16 lg:py-24 sm:order-first">
          <div className="mx-auto max-w-xl">
            {/* Announcement Banner */}
            <div className="mb-6">
              <Badge
                variant="outline"
                className="flex items-center gap-1 sm:gap-2 rounded-full px-3 py-1 text-xs sm:text-sm sm:px-4 whitespace-normal max-w-full break-words"
              >
                <span className="block">
                  Now Offering: End-to-End Project Management & Sustainable
                  Builds!
                </span>
                <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
              </Badge>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 sm:mb-6 break-words">
              Building Your Vision,
              <br />
              Crafting Your Future,
              <br />
              Solid Foundations.
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground dark:text-white mb-6 sm:mb-8">
              We're passionate about bringing your construction projects to
              life. From initial design to the final touches, we deliver
              quality craftsmanship and lasting structures that meet your
              unique needs and aspirations.
            </p>

            {/* Feature List */}
            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              <li className="flex items-center">
                <svg
                  className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Tailored construction solutions for every dream</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Transparent processes and clear communication</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  Committed to sustainable and durable building practices
                </span>
              </li>
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
              <Button
                size="lg"
                className="cursor-pointer"
                onClick={(e) => handleSmoothScroll(e, "#contact")} // Added onClick handler
              >
                Start Your Project
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Project Types / Partners */}
            <div className="flex items-center flex-wrap gap-x-2 sm:gap-x-4 text-xs sm:text-sm text-muted-foreground dark:text-white">
              <span>Our Expertise:</span>
              <div className="flex space-x-2 sm:space-x-4">
                <span className="font-semibold">Residential Builds</span>
                <span className="font-semibold">Commercial Projects</span>
                <span className="font-semibold">
                  Renovations & Remodeling
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}