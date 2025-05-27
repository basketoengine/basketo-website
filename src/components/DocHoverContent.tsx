'use client';

import React from 'react';
import { Gem, Check } from 'lucide-react';
import { Button } from '../components/ui/button';

interface DocHoverContentProps {
  hoveredItem: string;
}

interface PreviewContent {
  title: string;
  description: string;
  image: string;
  features: string[];
  codeExample: string;
}

const DocHoverContent: React.FC<DocHoverContentProps> = ({ hoveredItem }) => {
  // Define preview content for each documentation item
  const previewContent: Record<string, PreviewContent> = {
    // Getting Started
    "introduction": {
      title: "Basketo Engine Introduction",
      description: "Comprehensive overview of Basketo Engine's capabilities and design philosophy.",
      image: "/docs/intro-preview.png",
      features: [
        "Overview of engine architecture",
        "Core principles and design goals",
        "Feature overview and comparison",
        "Integration possibilities"
      ],
      codeExample: `import { Engine } from 'basketo-engine';

// Initialize the engine
const engine = new Engine({
  width: 800,
  height: 600,
  mode: '2d'
});

// Start the game loop
engine.start();`
    },
    "installation": {
      title: "Installation Guide",
      description: "Step-by-step instructions for setting up Basketo Engine in your development environment.",
      image: "/docs/installation-preview.png",
      features: [
        "System requirements",
        "Multiple installation methods",
        "Configuration options",
        "Troubleshooting common issues"
      ],
      codeExample: `// Using npm
npm install basketo-engine

// Using the CLI tool
npx create-basketo-app my-new-game

// Import in your project
import Basketo from 'basketo-engine';`
    },
    "first-project": {
      title: "Your First Basketo Project",
      description: "Learn how to create, configure, and run your first game with Basketo Engine.",
      image: "/docs/first-project-preview.png",
      features: [
        "Project structure overview",
        "Creating scenes and entities",
        "Asset management",
        "Testing and deployment"
      ],
      codeExample: `// Create a new game
const game = new Basketo.Game();

// Add a main scene
const mainScene = new Basketo.Scene('Main');
game.addScene(mainScene);

// Create a player entity
const player = new Basketo.Entity('player');
mainScene.addEntity(player);

// Start the game
game.start();`
    },
    "2d-graphics": {
      title: "2D Graphics System",
      description: "Everything you need to know about creating stunning 2D visuals with Basketo Engine.",
      image: "/docs/2d-graphics-preview.png",
      features: [
        "Sprite rendering and management",
        "Animation systems",
        "Particle effects",
        "Camera controls and effects"
      ],
      codeExample: `// Create a sprite
const sprite = new Basketo.Sprite({
  texture: 'player.png',
  position: { x: 100, y: 100 },
  scale: { x: 2, y: 2 }
});

// Add animation
sprite.addAnimation('walk', {
  frames: [0, 1, 2, 3],
  frameRate: 8,
  loop: true
});

// Play animation
sprite.play('walk');`
    },
    // UI Section
    "ui-controls": {
      title: "UI Controls System",
      description: "Build interactive game interfaces with Basketo Engine's comprehensive UI controls.",
      image: "/docs/ui-controls-preview.png",
      features: [
        "Standard controls (Button, Text, Image, Slider)",
        "Input controls for player interaction",
        "Custom control creation",
        "Event handling system"
      ],
      codeExample: `// Create a button
const button = new UI.Button({
  text: "Click Me",
  position: { x: 100, y: 100 },
  width: 200,
  height: 50
});

// Add click event handler
button.onClick(() => {
  console.log("Button clicked!");
});

// Add to UI container
uiContainer.add(button);`
    },
    "ui-layout": {
      title: "UI Layout System",
      description: "Create well-organized and responsive game interfaces with Basketo's layout containers.",
      image: "/docs/ui-layout-preview.png",
      features: [
        "Layout containers (Panel, StackPanel, GridPanel)",
        "Responsive layout techniques",
        "Anchoring and alignment options",
        "Nested layout hierarchy"
      ],
      codeExample: `// Create a stack panel
const panel = new UI.StackPanel({
  direction: "vertical",
  spacing: 10,
  padding: 20,
  width: 300,
  height: 400
});

// Add UI elements
panel.add(
  new UI.Text({ text: "Inventory" }),
  new UI.Button({ text: "Item 1" }),
  new UI.Button({ text: "Item 2" })
);`
    },
    "ui-themes": {
      title: "UI Theming System",
      description: "Create consistent visual styles and customize the look of your game interfaces.",
      image: "/docs/ui-themes-preview.png",
      features: [
        "Theme definition and registration",
        "Global and local theme application",
        "Dynamic theme switching",
        "Custom style classes"
      ],
      codeExample: `// Define a custom theme
const darkTheme = new UI.Theme({
  name: "Dark Theme",
  styles: {
    "button": {
      backgroundColor: "#444",
      hoverColor: "#555",
      textColor: "#fff"
    },
    "text": {
      fontSize: 16,
      fontWeight: "normal",
      color: "#eee"
    }
  }
});

// Register and apply theme
UI.registerTheme(darkTheme);
UI.setActiveTheme("Dark Theme");`
    },
    // Advanced Sections
    "security": {
      title: "Security Features",
      description: "Protect your game and players with Basketo Engine's comprehensive security features.",
      image: "/docs/security-preview.png",
      features: [
        "Network security for multiplayer games",
        "Content validation for user-generated content",
        "Player data protection and compliance",
        "Anti-cheat measures"
      ],
      codeExample: `// Set up secure player data
const playerData = new BasketoEngine.PlayerData({
  userId: "player123",
  region: "eu",
  consent: {
    analytics: true,
    marketing: false
  }
});

// Save data with encryption
await playerData.set({
  progress: gameProgress,
  settings: playerSettings
});`
    },
    "advanced-configuration": {
      title: "Advanced Configuration",
      description: "Fine-tune your game's performance, behavior, and features with powerful configuration options.",
      image: "/docs/config-preview.png",
      features: [
        "Project configuration file structure",
        "Runtime configuration options",
        "Custom build pipeline integration",
        "Performance optimization settings"
      ],
      codeExample: `// basketo.config.js
module.exports = {
  project: {
    name: "My Awesome Game",
    version: "1.0.0"
  },
  rendering: {
    defaultResolution: [1920, 1080],
    renderer: "WebGL2"
  },
  physics: {
    engine: "arcade",
    gravity: [0, 980]
  }
};`
    },
    "api-reference": {
      title: "API Reference",
      description: "Comprehensive documentation of all classes, methods, and properties available in Basketo Engine.",
      image: "/docs/api-preview.png",
      features: [
        "Complete class and method references",
        "Parameter and return type documentation",
        "Code examples for common use cases",
        "Inheritance hierarchies and relationships"
      ],
      codeExample: `// Engine initialization
const engine = new BasketoEngine.Engine({
  canvas: document.getElementById('game-canvas'),
  width: 1280,
  height: 720
});

// Scene creation
const scene = new BasketoEngine.Scene();

// Asset loading
await engine.assets.loadPackage('game-assets.pack');

// Start the game
engine.start();`
    }
    // Add more preview content for other documentation items as needed
  };

  // Show generic content if specific preview is not available
  const getContent = () => {
    if (previewContent[hoveredItem]) {
      return previewContent[hoveredItem];
    }
    
    return {
      title: "Documentation Preview",
      description: "Hover over different items in the sidebar to see preview content.",
      image: "/docs/default-preview.png",
      features: [
        "Comprehensive documentation",
        "Code examples and best practices",
        "Interactive demos",
        "Troubleshooting guides"
      ],
      codeExample: `// Basketo Engine example
const engine = new Basketo.Engine();
engine.start();`
    };
  };
  
  const content = getContent();
  
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">{content.title}</h2>
      <p className="text-muted-foreground">{content.description}</p>
      
      {/* Image Preview - Uses a placeholder if image not available */}
      <div className="aspect-video bg-basketo-dark/50 rounded-lg overflow-hidden relative">
        <div className="absolute inset-0 flex items-center justify-center text-basketo-purple/30">
          <Gem className="w-16 h-16" />
        </div>
      </div>
      
      {/* Feature List */}
      <div className="space-y-2">
        <h3 className="font-semibold">What you'll learn:</h3>
        <ul className="space-y-1">
          {content.features.map((feature: string, index: number) => (
            <li key={index} className="flex items-start">
              <Check className="h-4 w-4 text-basketo-teal mr-2 mt-1" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Code Example */}
      <div className="space-y-2">
        <h3 className="font-semibold">Code Example:</h3>
        <pre className="bg-basketo-darker p-4 rounded-lg overflow-x-auto text-sm">
          <code>{content.codeExample}</code>
        </pre>
      </div>
      
      <div className="pt-4">
        <Button variant="outline" className="w-full">View Full Documentation</Button>
      </div>
    </div>
  );
};

export default DocHoverContent;
