import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import Image from "next/image";
import { useForm, ValidationError } from '@formspree/react';
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [state, handleSubmit] = useForm("mjkwjpdb");
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: any) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  return (
    <section className="relative bg-background py-24 px-4 md:px-0">
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
              <h2 className="text-3xl font-bold sm:text-4xl text-foreground">Contact Us</h2>
              <p className="text-muted-foreground text-lg max-w-md">
                We'd love to talk about how we can help you. Reach out for project inquiries, partnerships, or just to say hello!
              </p>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground mt-4">
                <span><strong>Email:</strong> contact@nouveauconstructionltd.com</span>
                <span><strong>Phone:</strong> 09039833569</span>
                <span><strong>Address:</strong> 1 Bouar Close, Off Bangui Street, Wuse 2, Abuja, FCT</span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <Card className="shadow-xl border border-border bg-card">
            <CardContent className="p-8">
              {state.succeeded ? (
                <div className="text-center py-8 space-y-4">
                  <div className="flex justify-center">
                    <CheckCircle2 className="w-16 h-16 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-card-foreground">Thank You!</h3>
                  <p className="text-muted-foreground">Your message has been sent successfully. We'll get back to you soon.</p>
                  <Button 
                    onClick={() => window.location.reload()} 
                    variant="outline" 
                    className="mt-4"
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <>
                  <h3 className="mb-8 text-2xl font-semibold text-center md:text-left text-card-foreground">Let's get in touch</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 lg:gap-6">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
                        <div>
                          <Label htmlFor="firstname" className="mb-2">
                            First Name
                          </Label>
                          <Input
                            type="text"
                            id="firstname"
                            name="firstname"
                            placeholder="Enter your first name"
                            required
                            value={formData.firstname}
                            onChange={handleInputChange}
                          />
                          <ValidationError prefix="First Name" field="firstname" errors={state.errors} className="text-destructive text-sm mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="lastname" className="mb-2">
                            Last Name
                          </Label>
                          <Input
                            type="text"
                            id="lastname"
                            name="lastname"
                            placeholder="Enter your last name"
                            required
                            value={formData.lastname}
                            onChange={handleInputChange}
                          />
                          <ValidationError prefix="Last Name" field="lastname" errors={state.errors} className="text-destructive text-sm mt-1" />
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
                            name="email"
                            placeholder="Enter your email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                          <ValidationError prefix="Email" field="email" errors={state.errors} className="text-destructive text-sm mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="phone" className="mb-2">
                            Phone Number
                          </Label>
                          <Input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Enter your phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                          />
                          <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-destructive text-sm mt-1" />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message" className="mb-2">
                          Details
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your project"
                          rows={4}
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                        />
                        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-destructive text-sm mt-1" />
                      </div>
                    </div>

                    <div className="mt-8 grid">
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                        disabled={state.submitting}
                      >
                        {state.submitting ? "Sending..." : "Send inquiry"}
                      </Button>
                    </div>

                    <div className="mt-3 text-center">
                      <p className="text-muted-foreground text-sm">
                        We'll get back to you in 1-2 business days.
                      </p>
                    </div>
                  </form>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}