"use client"
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sophia Turner",
    role: "Architect",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=48&h=48&fit=crop&crop=faces",
    rating: 5,
    content:
      "Working with Nouveau Construction Ltd was a seamless experience. Their attention to architectural detail truly brought our vision to life.",
  },
  {
    id: 2,
    name: "James Wilson",
    role: "Real Estate Investor",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=48&h=48&fit=crop&crop=faces",
    rating: 5,
    content:
      "Professional, transparent, and efficient. Nouveau Construction handled everything from permits to final walkthroughs with ease.",
  },
  {
    id: 3,
    name: "Alice Johnson",
    role: "Homebuyer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=48&h=48&fit=crop&crop=faces",
    rating: 5,
    content:
      "I found my dream home thanks to Nouveau Construction. The craftsmanship and finishes were way above standard.",
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "Property Developer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop&crop=faces",
    rating: 5,
    content:
      "They brought our multi-unit housing project in under budget and ahead of schedule. Truly impressive work ethic.",
  },
  {
    id: 5,
    name: "Emily Davis",
    role: "Commercial Tenant",
    avatar: "https://images.unsplash.com/photo-1569913486515-b74bf7751574?w=48&h=48&fit=crop&crop=faces",
    rating: 5,
    content:
      "Leasing through Nouveau Construction was smooth and professional. The space was move-in ready and exceeded expectations.",
  },
];


export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef(null);

  // Auto-sliding functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    // Clear interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  // Calculate which testimonials to show
  const visibleTestimonials = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      const index = (activeIndex + i) % testimonials.length;
      items.push(testimonials[index]);
    }
    return items;
  };

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

        {/* Slider Controls */}
        <div className="flex justify-end mb-6 space-x-2">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white border border-slate-200 shadow-sm hover:bg-slate-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-slate-600" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white border border-slate-200 shadow-sm hover:bg-slate-50 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-slate-600" />
          </button>
        </div>

        {/* Testimonial Cards */}
        <div 
          ref={sliderRef}
          className="relative flex justify-center gap-6 transition-all duration-500 ease-out"
          style={{ 
            transform: `translateX(${isTransitioning ? '-20px' : '0px'})`,
            opacity: isTransitioning ? 0.8 : 1
          }}
        >
          {visibleTestimonials().map((testimonial, idx) => (
            <div
              key={testimonial.id}
              className={`bg-white rounded-xl shadow-lg p-6 w-full max-w-md flex-1 backdrop-blur-sm transition-all duration-500 
                ${idx === 0 ? 'translate-x-4 opacity-90 scale-95 blur-sm' : 
                  idx === 1 ? 'z-10 scale-100' : 
                  'translate-x-4 opacity-90 scale-95 blur-sm'}`}
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

        {/* Pagination Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                index === activeIndex ? 'bg-blue-600' : 'bg-slate-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <div className="text-center mt-8">
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
    </div>
  );
}