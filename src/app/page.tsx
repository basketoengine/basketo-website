import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Demo from '@/components/Demo';
import Donate from '@/components/Donate';
import CodeShowcase from '@/components/CodeShowcase';
import EngineFunctions from '@/components/EngineFunctions';
import Platforms from '@/components/Platforms';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-basketo-darker text-white relative overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-basketo-purple/5 via-transparent to-basketo-teal/5 pointer-events-none"></div>
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-basketo-purple/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-basketo-teal/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none"></div>
      
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTkuNSA2MEgwVjAuNUw1OS41IDYweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvc3ZnPg==')] opacity-20 pointer-events-none"></div>
      
      <Header />
      <main className="relative">
        <Hero />
        <Features />
        <Demo />
        <CodeShowcase />
        <EngineFunctions />
        <Platforms />
        <Testimonials />
        <Donate />
      </main>
      <Footer />
      
      <div className="fixed inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s linear infinite`,
              animationDelay: `${-Math.random() * 5}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}
