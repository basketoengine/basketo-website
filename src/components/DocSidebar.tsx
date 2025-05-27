'use client';

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  ChevronDown, 
  ChevronRight, 
  Image,
  LayoutDashboard,
  Shield,
  Settings,
  Search,
  Code
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { ScrollArea } from "../components/ui/scroll-area";
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from "../components/ui/collapsible";
import { Badge } from "../components/ui/badge";

const itemVariants = {
  closed: { opacity: 0, x: -4 },
  open: { opacity: 1, x: 0 }
};

interface SidebarLink {
  title: string;
  contentId: string;
  badge?: string;
  tag?: {
    text: string;
    variant: string;
  };
}

interface SidebarSection {
  id: string;
  title: string;
  icon: any;
  color: string;
  links: SidebarLink[];
}


const sidebarSections: SidebarSection[] = [
  {
    id: "getting-started",
    title: "Getting Started",
    icon: BookOpen,
    color: "text-basketo-blue",
    links: [
      { title: "Introduction", contentId: "introduction" },
      { title: "Installation", contentId: "installation" },
      { title: "First Project", contentId: "first-project" },
      { title: "Editor Interface", contentId: "editor-interface" }
    ]
  },
  {
    id: "graphics",
    title: "Graphics",
    icon: Image,
    color: "text-basketo-purple",
    links: [
      { title: "2D Graphics", contentId: "2d-graphics", tag: { text: "Updated", variant: "default" } },
      { title: "Materials", contentId: "materials", tag: { text: "Updated", variant: "default" } },
      { title: "Shaders", contentId: "shaders", tag: { text: "Updated", variant: "default" } }
    ]
  },
  {
    id: "user-interface",
    title: "User Interface",
    icon: LayoutDashboard,
    color: "text-basketo-blue",
    links: [
      { title: "UI System", contentId: "ui-system", tag: { text: "Updated", variant: "default" } },
      { title: "Controls", contentId: "ui-controls", tag: { text: "Updated", variant: "default" } },
      { title: "Layout", contentId: "ui-layout", tag: { text: "Updated", variant: "default" } },
      { title: "Themes", contentId: "ui-themes", tag: { text: "Updated", variant: "default" } }
    ]
  }
];


const additionalItems = [
  {
    id: "security",
    title: "Security",
    icon: Shield,
    contentId: "security",
    color: "text-basketo-blue",
    tag: { text: "Updated", variant: "default" }
  },
  {
    id: "advanced",
    title: "Advanced Configuration",
    icon: Settings,
    contentId: "advanced-configuration",
    color: "text-basketo-teal",
    tag: { text: "Updated", variant: "default" }
  },
  {
    id: "api-reference",
    title: "API Reference",
    icon: Code,
    contentId: "api-reference",
    color: "text-basketo-purple",
    tag: { text: "Beta", variant: "secondary" }
  }
];

interface DocSidebarProps {
  activeContent: string;
  setActiveContent: (contentId: string) => void;
  onHover: (contentId: string) => void;
}

const DocSidebar: React.FC<DocSidebarProps> = ({ activeContent, setActiveContent, onHover }) => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    "getting-started": true,
    "graphics": false,
    "user-interface": false,
  });
  const pathname = usePathname();


  useEffect(() => {
    if (activeContent) {
      // Find which section contains the active content
      for (const section of sidebarSections) {
        for (const link of section.links) {
          if (link.contentId === activeContent) {
            setOpenSections(prev => ({ ...prev, [section.id]: true }));
            break;
          }
        }
      }
    }
  }, [activeContent]);

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    
    // If search query exists, open all sections to show matches
    if (e.target.value.length > 0) {
      const allOpen = Object.fromEntries(
        sidebarSections.map(section => [section.id, true])
      );
      setOpenSections(allOpen);
    }
  };


  const isMatch = (text: string) => {
    return text.toLowerCase().includes(searchQuery.toLowerCase());
  };

  const handleLinkHover = (contentId: string) => {
    // Use hover to change content instead of click
    onHover && onHover(contentId);
    setActiveContent(contentId);
  };

  const handleLinkLeave = () => {
    // Optional: If you want to clear the hover state when leaving
  };

  if (isMobile && !isOpen) {
    return null;
  }

  return (
    <aside className={cn(
      "bg-sidebar border-r border-sidebar-border fixed top-16 bottom-0 z-40 w-64",
      "transition-all duration-300 ease-in-out",
      isMobile && !isOpen && "-translate-x-full"
    )}>
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-basketo-purple" />
            <h2 className="font-semibold tracking-tight">Documentation</h2>
          </div>
        </div>
        
        <div className="p-4 border-b border-sidebar-border">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search documentation..."
              className="w-full bg-background pl-8"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
        </div>
        
        <ScrollArea className="flex-1">
          <div className="p-4 space-y-2">
            {sidebarSections.map((section) => {
              const filteredLinks = searchQuery 
                ? section.links.filter(link => isMatch(link.title))
                : section.links;
              if (searchQuery && filteredLinks.length === 0) return null;
              return (
                <Collapsible 
                  key={section.id}
                  open={openSections[section.id]} 
                  onOpenChange={() => toggleSection(section.id)}
                  className="transition-all duration-200 ease-in-out"
                >
                  <CollapsibleTrigger className="flex w-full items-center justify-between py-2 hover:text-foreground transition-colors rounded-md px-2 hover:bg-sidebar-accent group">
                    <div className="flex items-center gap-2">
                      <section.icon className={`h-4 w-4 ${section.color}`} />
                      <span className="font-medium">{section.title}</span>
                    </div>
                    <motion.div
                      animate={{ rotate: openSections[section.id] ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="h-4 w-4 opacity-60 group-hover:opacity-100" />
                    </motion.div>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pl-6 pt-1 pb-2 space-y-1 animate-accordion-down">
                    {filteredLinks.map((link, idx) => (
                      <motion.div
                        key={`${section.id}-${idx}`}
                        variants={itemVariants}
                        initial="closed"
                        animate="open"
                        transition={{ delay: idx * 0.05 }}
                      >
                        <div 
                          onMouseEnter={() => handleLinkHover(link.contentId)}
                          onMouseLeave={handleLinkLeave}
                          className={`w-full text-left py-1.5 px-2 text-sm rounded-md hover:bg-sidebar-accent hover:text-basketo-purple transition-colors flex justify-between items-center cursor-pointer ${
                            activeContent === link.contentId ? "bg-sidebar-accent text-basketo-purple font-medium" : ""
                          }`}
                        >
                          <span>{link.title}</span>
                          {link.tag && (
                            <Badge variant="outline" className={`text-xs px-1.5 py-0 h-5 ${
                              link.tag.text === "New" ? "bg-basketo-blue text-white border-basketo-blue" : 
                              link.tag.text === "Beta" ? "bg-basketo-purple text-white border-basketo-purple" :
                              link.tag.text === "Updated" ? "bg-basketo-teal text-white border-basketo-teal" :
                              ""
                            }`}>
                              {link.tag.text}
                            </Badge>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              );
            })}
            
            <div className="pt-4 mt-4 border-t border-sidebar-border space-y-1">
              {additionalItems
                .filter(item => searchQuery ? isMatch(item.title) : true)
                .map((item, idx) => (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    transition={{ delay: idx * 0.05 }}
                  >
                    <div 
                      onMouseEnter={() => handleLinkHover(item.contentId)}
                      onMouseLeave={handleLinkLeave}
                      className={`flex w-full items-center justify-between py-2 px-2 hover:text-foreground transition-colors rounded-md hover:bg-sidebar-accent cursor-pointer ${
                        activeContent === item.contentId ? "bg-sidebar-accent text-basketo-purple font-medium" : ""
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <item.icon className={`h-4 w-4 ${item.color}`} />
                        <span>{item.title}</span>
                      </div>
                      {item.tag && (
                        <Badge variant="outline" className={`text-xs px-1.5 py-0 h-5 ${
                          item.tag.text === "New" ? "bg-basketo-blue text-white border-basketo-blue" : 
                          item.tag.text === "Beta" ? "bg-basketo-purple text-white border-basketo-purple" :
                          item.tag.text === "Updated" ? "bg-basketo-teal text-white border-basketo-teal" :
                          ""
                        }`}>
                          {item.tag.text}
                        </Badge>
                      )}
                    </div>
                  </motion.div>
                ))}
            </div>
            

          </div>
        </ScrollArea>
      </div>
    </aside>
  );
};

export default DocSidebar;
