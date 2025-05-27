'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import DocSidebar from '../../../components/DocSidebar';
import DocContent from '../../../components/DocContent';
import DocHoverContent from '../../../components/DocHoverContent';
import { Button } from '../../../components/ui/button';
import { ChevronLeft, List, X } from 'lucide-react';
import { useIsMobile } from '../../../hooks/use-mobile';
import { ScrollArea } from '../../../components/ui/scroll-area';

export default function Documentation() {
  const params = useParams();
  const section = params.section as string;
  
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);
  const [activeContent, setActiveContent] = useState("introduction");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  
  // Set active content based on URL parameter
  useEffect(() => {
    if (section) {
      setActiveContent(section);
    } else {
      setActiveContent("introduction");
    }
  }, [section]);
  
  // Handle content change
  const handleContentChange = (contentId: string) => {
    setActiveContent(contentId);
    window.history.pushState({}, '', `/docs/${contentId}`);
  };

  const handleSidebarHover = (contentId: string) => {
    setHoveredItem(contentId);
  };

  // Close sidebar on mobile when component mounts
  useEffect(() => {
    if (isMobile) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
  }, [isMobile]);

  // Handle resize events to adjust sidebar
  useEffect(() => {
    const handleResize = () => {
      if (!isMobile && !sidebarOpen) {
        setSidebarOpen(true);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile, sidebarOpen]);
  
  // Function to check if the right side should have content
  const shouldShowRightContent = () => {
    // Always show right content now - removed exception for UI pages
    return hoveredItem !== null;
  }
  
  return (
    <div className="flex flex-col min-h-screen bg-basketo-darker">
      <Header />
      
      <div className="flex flex-1 pt-16 relative mb-16">
        {/* Mobile sidebar toggle */}
        <AnimatePresence>
          {isMobile && !sidebarOpen && (
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Button 
                variant="outline" 
                size="icon" 
                className="fixed left-4 top-20 z-40 bg-basketo-dark/80 backdrop-blur-sm border border-white/10"
                onClick={() => setSidebarOpen(true)}
              >
                <List className="h-5 w-5" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Sidebar and overlay */}
        <div className="fixed inset-y-0 left-0 z-40 pt-16">
          {/* Mobile overlay */}
          <AnimatePresence>
            {isMobile && sidebarOpen && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/70 z-30"
                onClick={() => setSidebarOpen(false)}
              />
            )}
          </AnimatePresence>
          
          {/* Sidebar container */}
          <motion.div 
            className="fixed top-16 bottom-0 left-0 w-64 bg-basketo-darker z-40"
            initial={{ x: isMobile ? '-100%' : 0 }}
            animate={{ x: sidebarOpen ? 0 : '-100%' }}
            transition={{ 
              type: "spring", 
              stiffness: 400, 
              damping: 30,
              mass: 1
            }}
          >
            <ScrollArea className="h-full">
              <DocSidebar 
                activeContent={activeContent} 
                setActiveContent={handleContentChange}
                onHover={handleSidebarHover}
              />
            </ScrollArea>
            
            {isMobile && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-2 top-2 text-muted-foreground hover:text-white"
                  onClick={() => setSidebarOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>
        
        {/* Main content with transition - Split into two equal halves */}
        <motion.div 
          className="flex-1 transition-all duration-300 relative"
          animate={{ 
            marginLeft: sidebarOpen && !isMobile ? '16rem' : '0',
          }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30 
          }}
        >
          <div className="flex flex-col md:flex-row h-[calc(100vh-8rem)]"> {/* Fixed height to ensure proper scrolling */}
            {/* Left half for document content with independent scrolling */}
            <div className="w-full md:w-1/2 border-r border-sidebar-border">
              <ScrollArea className="h-full">
                <div className="p-6">
                  <DocContent 
                    activeContent={activeContent} 
                    setActiveContent={handleContentChange}
                  />
                </div>
              </ScrollArea>
            </div>
            
            {/* Right half for hover content with independent scrolling - Always show the division */}
            <div className="w-full md:w-1/2 bg-basketo-dark/30">
              <ScrollArea className="h-full">
                <div className="p-6">
                  {hoveredItem ? (
                    <DocHoverContent hoveredItem={hoveredItem} />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400">
                      <p>Hover over sidebar items to see preview content</p>
                    </div>
                  )}
                </div>
              </ScrollArea>
            </div>
          </div>
        </motion.div>
        
        {/* Sidebar collapse button for desktop */}
        <AnimatePresence>
          {!isMobile && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: sidebarOpen ? 0 : -64 }}
              transition={{ duration: 0.3 }}
              className="fixed left-64 top-20 z-50"
            >
              <Button
                variant="ghost"
                size="icon"
                className="bg-basketo-dark/80 backdrop-blur-sm border border-white/10 hover:bg-basketo-dark"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <ChevronLeft className={`h-5 w-5 transition-transform duration-300 ${
                  sidebarOpen ? '' : 'rotate-180'
                }`} />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <Footer />
    </div>
  );
}
