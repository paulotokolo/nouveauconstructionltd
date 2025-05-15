"use client"
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Lead Architect, Innovate Designs",
    avatar: "https://images.unsplash.com/photo-1507152832244-10d45c7eda57?w=48&h=48&fit=crop&crop=faces",
    rating: 5,
    content:
      "It's one thing to design a complex structure, but seeing Nouveau Construction bring those blueprints to life with such precision was incredible. They really understood the nuances of our architectural vision and collaborated every step of the way. A dream team for any architect!",
  },
  {
    id: 2,
    name: "Michael B. Jordan",
    role: "Project Owner, Summit Properties",
    avatar: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=48&h=48&fit=crop&crop=faces",
    rating: 5,
    content:
      "As a project owner, juggling a new build can be stressful, but Nouveau Construction made it surprisingly straightforward. They handled all the complexities, from groundbreaking to the final finishes, keeping me informed and confident throughout. Their project management is top-notch.",
  },
  {
    id: 3,
    name: "The Adebayo Family",
    role: "Homeowners",
    avatar: "https://images.unsplash.com/photo-1565884280295-98eb83e41c65?w=48&h=48&fit=crop&crop=faces",
    rating: 5,
    content:
      "We're absolutely thrilled with our new home built by Nouveau Construction. The quality of the build, the stunning finishes, and the attention to every little detail just blew us away. It's more than a house; it's our dream realized.",
  },
  {
    id: 4,
    name: "Chris Kurt",
    role: "Property Developer",
    avatar: "https://images.unsplash.com/photo-1529111290557-82f6d5c6cf85?w=48&h=48&fit=crop&crop=faces",
    rating: 5,
    content:
      "In property development, time and budget are everything. Nouveau Construction didn't just meet our targets for our latest multi-unit complex; they exceeded them. Their proactive approach and skilled team are a game-changer. Highly recommend!",
  },
  {
    id: 5,
    name: "David Lee",
    role: "Business Owner, TechSpark Solutions",
    avatar: "https://images.unsplash.com/photo-1611432579402-7037e3e2c1e4?w=48&h=48&fit=crop&crop=faces",
    rating: 5,
    content:
      "We needed our new commercial space built out quickly and to a very specific design for our business. Nouveau Construction was phenomenal – they understood our operational needs, managed the build efficiently, and the quality of their work means our new headquarters is not only functional but also incredibly impressive to clients.",
  },
  {
    id: 6,
    name: "Maria Gonzalez",
    role: "Interior Designer",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=48&h=48&fit=crop&crop=faces",
    rating: 5,
    content:
      "I've collaborated with many construction firms, but Nouveau stands out. Their team respects the design integrity while offering practical construction solutions. The communication was excellent, making the entire process smooth for both me and our mutual client. The final space was a testament to their craftsmanship."
  },
  {
    id: 7,
    name: "Tom Richardson",
    role: "Facilities Manager, Global Corp",
    avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=48&h=48&fit=crop&crop=faces",
    rating: 4,
    content:
      "Nouveau Construction undertook a significant renovation of our office wing. They were professional, worked hard to minimize disruption to our operations, and were very responsive to our evolving needs. The project was completed to a high standard. A reliable partner for major construction works."
  }
];

// Duplicate testimonials for continuous scroll effect
const duplicatedTestimonials = [...testimonials, ...testimonials];

export default function TestimonialSlider() {
  const sliderRef = useRef(null);

  return (
    <div className="w-full bg-gradient-to-r from-slate-50 to-slate-100 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-2">
            Meet our happy clients
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Join a global network of thought leaders, product developers, and innovators.
          </p>
          <div className="mt-4">
            <span className="inline-flex items-center bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
              <svg className="w-4 h-4 mr-1 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Rated 5 stars by 1000+ clients
            </span>
          </div>
        </div>

        {/* Testimonial Cards - Continuous Scroll */}
        <div 
          ref={sliderRef}
          className="flex overflow-x-hidden group" // Use group for hover pause
        >
          <div className="flex animate-scroll group-hover:pause"> {/* Apply animation here and pause on hover */}
            {duplicatedTestimonials.map((testimonial, idx) => (
              <div
                key={`${testimonial.id}-${idx}`} // Ensure unique keys for duplicated items
                className="bg-white rounded-xl shadow-lg p-6 w-[350px] sm:w-[400px] md:w-[450px] flex-shrink-0 mx-3" // Fixed width and margin
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 gap-4">
                  <div className="flex-shrink-0">
                    <img 
                      className="h-12 w-12 rounded-full" 
                      src={testimonial.avatar}
                      alt={`${testimonial.name}'s avatar`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-medium text-slate-900 truncate">{testimonial.name}</h3>
                    <p className="text-sm text-slate-500 truncate">{testimonial.role}</p>
                  </div>
                  <div className="flex-shrink-0 flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg 
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-slate-700 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Optional: You might remove pagination and manual controls for a continuous scroller */}
        {/* <div className="flex justify-end my-6 space-x-2">
          <button className="p-2 rounded-full bg-white border border-slate-200 shadow-sm hover:bg-slate-50 transition-colors">
            <ChevronLeft className="w-5 h-5 text-slate-600" />
          </button>
          <button className="p-2 rounded-full bg-white border border-slate-200 shadow-sm hover:bg-slate-50 transition-colors">
            <ChevronRight className="w-5 h-5 text-slate-600" />
          </button>
        </div>
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-colors bg-slate-300`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div> 
        */}

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            View all testimonials
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
      {/* Add CSS for the animation in your global CSS file or a style tag */}
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%); /* Scrolls one full set of testimonials */
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite; /* Adjust duration as needed */
        }
        .group-hover\\:pause:hover { /* Tailwind class for pausing on hover */
            animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}