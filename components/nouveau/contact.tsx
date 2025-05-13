import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BrainCircuit, MessageSquare, Wrench } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-slate-100 py-24 px-4 md:px-0">
      <div className="container mx-auto 2xl:max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Welcome & Info */}
          <div className="space-y-8 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start gap-4">
              <Image
                src="https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?q=80&w=400&auto=format&fit=crop"
                alt="Contact Nouveau Construction"
                width={200}
                height={120}
                className="rounded-xl shadow-md object-cover"
              />
              <h2 className="text-3xl font-bold sm:text-4xl">Contact Us</h2>
              <p className="text-muted-foreground text-lg max-w-md">
                We'd love to talk about how we can help you. Reach out for project inquiries, partnerships, or just to say hello!
              </p>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground mt-4">
                <span><strong>Email:</strong> info@nouveauconstruction.com</span>
                <span><strong>Phone:</strong> +1 (555) 123-4567</span>
                <span><strong>Address:</strong> 123 Main St, City, Country</span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-md">
            <CardContent className="p-8">
              <h3 className="mb-8 text-2xl font-semibold text-center md:text-left">Let's get in touch</h3>
              <form>
                <div className="grid gap-4 lg:gap-6">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
                    <div>
                      <Label htmlFor="firstname" className="mb-2">
                        First Name
                      </Label>
                      <Input
                        type="text"
                        id="firstname"
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastname" className="mb-2">
                        Last Name
                      </Label>
                      <Input
                        type="text"
                        id="lastname"
                        placeholder="Enter your last name"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
                    <div>
                      <Label htmlFor="email" className="mb-2">
                        Email
                      </Label>
                      <Input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="mb-2">
                        Phone Number
                      </Label>
                      <Input
                        type="tel"
                        id="phone"
                        placeholder="Enter your phone"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="mb-2">
                      Details
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project"
                      rows={4}
                      required
                    />
                  </div>
                </div>

                <div className="mt-8 grid">
                  <Button type="submit" size="lg" className="w-full">
                    Send inquiry
                  </Button>
                </div>

                <div className="mt-3 text-center">
                  <p className="text-muted-foreground text-sm">
                    We'll get back to you in 1-2 business days.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
