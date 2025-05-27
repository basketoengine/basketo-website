'use client';

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Basketo Engine has completely transformed how I develop games. What used to take weeks now takes hours.",
      author: "Sarah Johnson",
      role: "Indie Game Developer",
      avatar: "👩‍💻",
    },
    {
      quote: "The AI-powered code generation is mind-blowing. I described a complex mechanic and it wrote flawless code instantly.",
      author: "Marcus Chen",
      role: "Lead Developer, GameCraft Studios",
      avatar: "👨‍💻",
    },
    {
      quote: "As someone new to game development, Basketo made it possible for me to create my first game without getting lost in complex code.",
      author: "Emma Rodriguez",
      role: "Student Developer",
      avatar: "👩‍🎓",
    },
    {
      quote: "Our studio switched to Basketo for prototyping and we've increased our production speed by 300%. It's revolutionary.",
      author: "James Wilson",
      role: "Creative Director, PixelPulse Games",
      avatar: "🧔",
    },
    {
      quote: "The visual scripting system is so intuitive, I was able to teach it to my entire team in just one afternoon.",
      author: "Olivia Kim",
      role: "Art Director, Pixel Dreams",
      avatar: "👩‍🎨",
    },
    {
      quote: "I've tried other engines, but none come close to the flexibility and ease of use that Basketo provides for et developers.",
      author: "David Garcia",
      role: "Solo Game Developer",
      avatar: "👨‍💻",
    },
    {
      quote: "The asset generation capabilities saved us thousands of dollars on our latest project. It's a game-changer!",
      author: "Lisa Thompson",
      role: "Producer, ET Collective",
      avatar: "👩‍💼",
    },
    {
      quote: "I was skeptical about AI-assisted development, but Basketo changed my mind. The quality of the code it produces is exceptional.",
      author: "Michael Stewart",
      role: "Technical Director, GameForge",
      avatar: "👨‍🔧",
    },
  ];

  // Split testimonials into two columns
  const leftColumnTestimonials = testimonials.slice(0, Math.ceil(testimonials.length / 2));
  const rightColumnTestimonials = testimonials.slice(Math.ceil(testimonials.length / 2));

  return (
    <section className="py-20 bg-basketo-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-basketo-purple/5 via-transparent to-basketo-teal/5 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-basketo-dark to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-basketo-dark to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-basketo-purple via-basketo-blue to-basketo-teal bg-clip-text text-transparent">Loved by ET Devs & Studios</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join the growing community of developers who've accelerated their game creation process with Basketo Engine.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left column - scrolling up */}
            <div className="overflow-hidden relative h-[550px]">
              <motion.div 
                animate={{ y: ["0%", "-50%"] }} 
                transition={{ 
                  repeat: Infinity, 
                  repeatType: "loop", 
                  duration: 30, 
                  ease: "linear",
                }}
                className="space-y-4"
              >
                {/* Double the testimonials to create a seamless loop */}
                {[...leftColumnTestimonials, ...leftColumnTestimonials].map((testimonial, index) => (
                  <div key={`left-${index}`} className="p-2">
                    <Card className="bg-basketo-darker/50 border border-white/10 hover:border-basketo-purple/50 transition-all duration-300 overflow-hidden hover:shadow-[0_0_15px_rgba(155,135,245,0.3)] transform hover:-translate-y-1">
                      <CardContent className="p-6">
                        <div className="mb-4">
                          <div className="w-12 h-12 rounded-full bg-basketo-purple/20 flex items-center justify-center text-2xl">
                            {testimonial.avatar}
                          </div>
                        </div>
                        <blockquote className="text-gray-300 mb-4">"{testimonial.quote}"</blockquote>
                        <div className="font-medium text-basketo-purple">{testimonial.author}</div>
                        <div className="text-gray-400 text-sm">{testimonial.role}</div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </motion.div>
            </div>
            
            {/* Right column - scrolling down */}
            <div className="overflow-hidden relative h-[550px]">
              <motion.div 
                animate={{ y: ["-50%", "0%"] }} 
                transition={{ 
                  repeat: Infinity, 
                  repeatType: "loop", 
                  duration: 35, 
                  ease: "linear",
                }}
                className="space-y-4"
              >
                {/* Double the testimonials to create a seamless loop */}
                {[...rightColumnTestimonials, ...rightColumnTestimonials].map((testimonial, index) => (
                  <div key={`right-${index}`} className="p-2">
                    <Card className="bg-basketo-darker/50 border border-white/10 hover:border-basketo-teal/50 transition-all duration-300 overflow-hidden hover:shadow-[0_0_15px_rgba(45,212,191,0.3)] transform hover:-translate-y-1">
                      <CardContent className="p-6">
                        <div className="mb-4">
                          <div className="w-12 h-12 rounded-full bg-basketo-teal/20 flex items-center justify-center text-2xl">
                            {testimonial.avatar}
                          </div>
                        </div>
                        <blockquote className="text-gray-300 mb-4">"{testimonial.quote}"</blockquote>
                        <div className="font-medium text-basketo-teal">{testimonial.author}</div>
                        <div className="text-gray-400 text-sm">{testimonial.role}</div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Call to action */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">Ready to join thousands of satisfied developers?</p>
          <Link 
            href="/downloads" 
            className="inline-block px-8 py-3 bg-basketo-purple hover:bg-basketo-purple/90 text-white font-medium rounded-md shadow-lg hover:shadow-basketo-purple/50 transition-all duration-300 transform hover:-translate-y-1"
          >
            Try Basketo Engine Free
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
