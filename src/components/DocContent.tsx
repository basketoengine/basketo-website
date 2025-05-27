'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface DocContentProps {
  activeContent: string;
  setActiveContent: (contentId: string) => void;
}

const DocContent: React.FC<DocContentProps> = ({ activeContent, setActiveContent }) => {

  const contentSections: Record<string, { title: string; content: React.ReactNode }> = {

    "introduction": {
      title: "Introduction to Basketo Engine",
      content: (
        <div className="space-y-4">
          <p>
            Welcome to the Basketo Engine documentation! This guide will help you understand the engine's
            capabilities and how to utilize them to create amazing 2D games.
          </p>
          <p>
            Basketo Engine is a lightweight, powerful game development framework designed to streamline
            your game creation process. It combines traditional coding with AI-assisted development,
            making it accessible to developers of all skill levels.
          </p>
          <h3 className="text-xl font-semibold mt-8 mb-2">Key Features</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Intuitive 2D rendering pipeline with hardware acceleration</li>
            <li>Comprehensive physics system for realistic in-game interactions</li>
            <li>Advanced animation system with keyframe and sprite support</li>
            <li>Built-in audio engine with spatial sound capabilities</li>
            <li>AI-assisted content generation and code suggestions</li>
            <li>Cross-platform deployment with a single codebase</li>
          </ul>
          <div className="bg-basketo-dark/30 p-4 rounded-lg border border-basketo-blue/20 mt-6">
            <h4 className="font-semibold mb-2 text-basketo-blue">Getting Started</h4>
            <p className="mb-4">
              If this is your first time using Basketo Engine, we recommend following our quick start guide:
            </p>
            <div className="flex flex-col space-y-2">
              <Link href="/docs/installation" className="text-basketo-blue hover:text-basketo-purple transition-colors flex items-center">
                <ArrowRight className="h-4 w-4 mr-2" />
                <span>Installation Guide</span>
              </Link>
              <Link href="/docs/first-project" className="text-basketo-blue hover:text-basketo-purple transition-colors flex items-center">
                <ArrowRight className="h-4 w-4 mr-2" />
                <span>Create Your First Project</span>
              </Link>
            </div>
          </div>
        </div>
      )
    },
    "installation": {
      title: "Installing Basketo Engine",
      content: (
        <div className="space-y-4">
          <p>
            Basketo Engine can be installed through several methods, depending on your preferred workflow.
            Below are the most common installation options:
          </p>
          
          <h3 className="text-xl font-semibold mt-8 mb-2">Prerequisites</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Node.js (v14.0 or higher)</li>
            <li>npm or yarn package manager</li>
            <li>A modern web browser (for development)</li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-8 mb-2">Option 1: Using NPM</h3>
          <div className="bg-basketo-darker p-4 rounded-lg font-mono text-sm mb-4">
            <code>npm install basketo-engine</code>
          </div>
          
          <h3 className="text-xl font-semibold mt-8 mb-2">Option 2: Using Yarn</h3>
          <div className="bg-basketo-darker p-4 rounded-lg font-mono text-sm mb-4">
            <code>yarn add basketo-engine</code>
          </div>
          
          <h3 className="text-xl font-semibold mt-8 mb-2">Option 3: Using the CLI</h3>
          <p>We also provide a command-line interface for quickly setting up new projects:</p>
          <div className="bg-basketo-darker p-4 rounded-lg font-mono text-sm mb-4">
            <code>npx create-basketo-app my-game</code>
          </div>
          
          <h3 className="text-xl font-semibold mt-8 mb-2">Verifying Installation</h3>
          <p>After installation, you can verify that everything is working correctly:</p>
          <div className="bg-basketo-darker p-4 rounded-lg font-mono text-sm mb-4">
            <code>npx basketo --version</code>
          </div>
          
          <div className="bg-basketo-dark/30 p-4 rounded-lg border border-basketo-blue/20 mt-6">
            <h4 className="font-semibold mb-2 text-basketo-blue">Next Steps</h4>
            <p className="mb-4">
              Now that you've installed the engine, you're ready to create your first project:
            </p>
            <div className="flex flex-col space-y-2">
              <Link href="/docs/first-project" className="text-basketo-blue hover:text-basketo-purple transition-colors flex items-center">
                <ArrowRight className="h-4 w-4 mr-2" />
                <span>Create Your First Project</span>
              </Link>
            </div>
          </div>
        </div>
      )
    },
    "first-project": {
      title: "Creating Your First Project",
      content: (
        <div className="space-y-4">
          <p>
            Let's walk through creating your first game project with Basketo Engine. This guide will help you
            set up a basic 2D game that you can expand upon later.
          </p>
          
          <h3 className="text-xl font-semibold mt-8 mb-2">Using the CLI</h3>
          <p>The easiest way to get started is using our CLI tool:</p>
          <div className="bg-basketo-darker p-4 rounded-lg font-mono text-sm mb-4">
            <code>npx create-basketo-app my-first-game</code>
          </div>
          <p>This will create a new directory with a basic project structure and necessary files.</p>
          
          <h3 className="text-xl font-semibold mt-8 mb-2">Project Structure</h3>
          <p>Your new project will have the following structure:</p>
          <div className="bg-basketo-darker p-4 rounded-lg font-mono text-sm mb-4">
            <code>
              my-first-game/<br/>
              ├── assets/<br/>
              │   ├── images/<br/>
              │   ├── audio/<br/>
              │   └── fonts/<br/>
              ├── src/<br/>
              │   ├── scenes/<br/>
              │   ├── entities/<br/>
              │   ├── components/<br/>
              │   ├── index.js<br/>
              │   └── config.js<br/>
              ├── package.json<br/>
              └── basketo.config.js
            </code>
          </div>
          
          <h3 className="text-xl font-semibold mt-8 mb-2">Running Your Game</h3>
          <p>To start the development server and see your game in action:</p>
          <div className="bg-basketo-darker p-4 rounded-lg font-mono text-sm mb-4">
            <code>
              cd my-first-game<br/>
              npm start
            </code>
          </div>
          <p>This will open your default browser to <code>http://localhost:3000</code> where you can see your game running.</p>
          
          <h3 className="text-xl font-semibold mt-8 mb-2">Making Your First Changes</h3>
          <p>Open <code>src/index.js</code> in your favorite code editor. You'll see something like this:</p>
          <div className="bg-basketo-darker p-4 rounded-lg font-mono text-sm mb-4">
            <pre>
              {`import Basketo from 'basketo-engine';

// Initialize the engine
const game = new Basketo.Game({
  width: 800,
  height: 600,
  background: '#000'
});

// Create a scene
const mainScene = new Basketo.Scene('Main');

// Add the scene to the game
game.addScene(mainScene);

// Start the game
game.start();`}
            </pre>
          </div>
          
          <div className="bg-basketo-dark/30 p-4 rounded-lg border border-basketo-blue/20 mt-6">
            <h4 className="font-semibold mb-2 text-basketo-blue">Next Steps</h4>
            <p className="mb-4">
              Now that you have a basic project running, learn how to navigate the editor:
            </p>
            <div className="flex flex-col space-y-2">
              <Link href="/docs/editor-interface" className="text-basketo-blue hover:text-basketo-purple transition-colors flex items-center">
                <ArrowRight className="h-4 w-4 mr-2" />
                <span>Editor Interface Guide</span>
              </Link>
            </div>
          </div>
        </div>
      )
    },
    // ...other content sections for each sidebar item
    "2d-graphics": {
      title: "2D Graphics",
      content: (
        <div className="space-y-4">
          <p>
            Basketo Engine provides a powerful 2D graphics system that allows you to create visually stunning games
            with minimal effort. This section covers all the essential 2D rendering features.
          </p>
          
          <h3 className="text-xl font-semibold mt-8 mb-2">Sprites and Images</h3>
          <p>
            Loading and displaying sprites is straightforward with Basketo Engine:
          </p>
          <div className="bg-basketo-darker p-4 rounded-lg font-mono text-sm mb-4">
            <pre>
              {`// Load an image
const playerTexture = Basketo.Texture.from('assets/player.png');

// Create a sprite
const player = new Basketo.Sprite(playerTexture);

// Position the sprite
player.x = 100;
player.y = 100;

// Add to scene
scene.add(player);`}
            </pre>
          </div>
          
          <h3 className="text-xl font-semibold mt-8 mb-2">Animation</h3>
          <p>
            Create frame-by-frame animations using sprite sheets:
          </p>
          <div className="bg-basketo-darker p-4 rounded-lg font-mono text-sm mb-4">
            <pre>
              {`// Create a spritesheet
const sheet = Basketo.SpriteSheet.from('assets/character.png', {
  frameWidth: 32,
  frameHeight: 32
});

// Define an animation
sheet.addAnimation('walk', [0, 1, 2, 3]);

// Create an animated sprite
const character = new Basketo.AnimatedSprite(sheet);
character.play('walk');

// Add to scene
scene.add(character);`}
            </pre>
          </div>
          
          <h3 className="text-xl font-semibold mt-8 mb-2">Particle Effects</h3>
          <p>
            Create stunning particle effects for visual flourishes:
          </p>
          <div className="bg-basketo-darker p-4 rounded-lg font-mono text-sm mb-4">
            <pre>
              {`// Create a particle emitter
const emitter = new Basketo.ParticleEmitter({
  texture: 'assets/particle.png',
  lifespan: [1, 2],
  speed: [50, 100],
  scale: [0.5, 1],
  alpha: [1, 0],
  color: ['#ff0000', '#ffff00']
});

// Start emitting particles
emitter.start();

// Add to scene
scene.add(emitter);`}
            </pre>
          </div>
          
          <div className="bg-basketo-dark/30 p-4 rounded-lg border border-basketo-purple/20 mt-6">
            <h4 className="font-semibold mb-2 text-basketo-purple">Performance Tips</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use texture atlases to minimize draw calls</li>
              <li>Implement object pooling for frequently created objects</li>
              <li>Use the built-in culling system to only render on-screen objects</li>
              <li>Consider using lower resolution textures for mobile games</li>
            </ul>
          </div>
        </div>
      )
    },
    "editor-interface": {
      title: "Editor Interface",
      content: (
        <div className="space-y-4">
          <p>
            The Basketo Engine editor interface is designed to be intuitive and productive,
            with all the tools you need within easy reach.
          </p>
          <h3 className="text-xl font-semibold mt-8 mb-2">Main Workspace</h3>
          <p>
            The editor is divided into several key areas:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Scene View</strong> - Where you visualize and edit your game world</li>
            <li><strong>Game View</strong> - Preview how your game will look when played</li>
            <li><strong>Inspector</strong> - Edit properties of selected objects</li>
            <li><strong>Hierarchy</strong> - Organize game objects in a parent-child structure</li>
            <li><strong>Project Browser</strong> - Access all assets and files in your project</li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-2">Toolbar</h3>
          <p>
            The toolbar contains essential tools for manipulating objects in your scene:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Transform Tools</strong> - Move, rotate, and scale objects</li>
            <li><strong>Play Controls</strong> - Test your game directly in the editor</li>
            <li><strong>Layers</strong> - Organize objects for visibility and physics</li>
            <li><strong>Layout</strong> - Customize your workspace arrangement</li>
          </ul>
          
          <div className="bg-basketo-dark/30 p-4 rounded-lg border border-basketo-blue/20 mt-6">
            <h4 className="font-semibold mb-2 text-basketo-blue">Keyboard Shortcuts</h4>
            <p className="mb-4">
              Master these common shortcuts to speed up your workflow:
            </p>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex justify-between">
                <span>Ctrl+S</span>
                <span>Save Project</span>
              </div>
              <div className="flex justify-between">
                <span>F</span>
                <span>Focus on Selection</span>
              </div>
              <div className="flex justify-between">
                <span>Q, W, E, R</span>
                <span>Select, Move, Rotate, Scale</span>
              </div>
              <div className="flex justify-between">
                <span>Ctrl+D</span>
                <span>Duplicate</span>
              </div>
              <div className="flex justify-between">
                <span>Ctrl+Z</span>
                <span>Undo</span>
              </div>
              <div className="flex justify-between">
                <span>Ctrl+Y</span>
                <span>Redo</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    "ui-system": {
      title: "UI System",
      content: (
        <div className="space-y-4">
          <p>
            The Basketo Engine UI system provides a powerful and flexible framework for creating game interfaces that are both functional and visually appealing.
          </p>
          
          <h3 className="text-xl font-semibold mt-8 mb-2">Core Concepts</h3>
          <p>
            The UI system is built on these fundamental principles:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Component-Based</strong> - Build complex interfaces from simple, reusable components</li>
            <li><strong>Responsive</strong> - Automatically adapts to different screen sizes and resolutions</li>
            <li><strong>Styleable</strong> - Easy to customize with themes and style properties</li>
            <li><strong>Performant</strong> - Optimized rendering for smooth gameplay even with complex UIs</li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-2">Creating UI Elements</h3>
          <p>
            You can create UI elements either through code or the visual editor:
          </p>
          <pre className="bg-basketo-darker p-4 rounded-lg font-mono text-sm mb-4">
            {`// Create a button programmatically
const button = new UI.Button({
  text: "Play Game",
  width: 200,
  height: 50,
  onClick: () => startGame()
});

// Add it to a canvas
ui.canvas.add(button);`}
          </pre>
          
          <div className="bg-basketo-dark/30 p-4 rounded-lg border border-basketo-blue/20 mt-6">
            <h4 className="font-semibold mb-2 text-basketo-blue">Best Practices</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use anchors to create responsive layouts that work across screen sizes</li>
              <li>Group related UI elements with containers for easier management</li>
              <li>Use the UI prefab system to create reusable interface components</li>
              <li>Implement UI animations to improve user experience and feedback</li>
            </ul>
          </div>
        </div>
      )
    },


    "security": {
      title: "Security",
      content: (
        <div className="space-y-4">
          <div className="bg-basketo-blue/10 border border-basketo-blue rounded-lg p-4 mb-6">
            <div className="flex items-center">
              <span className="inline-block bg-basketo-blue text-white text-xs px-2 py-1 rounded mr-2">UPDATED</span>
              <span className="text-sm">Last updated: May 22, 2025</span>
            </div>
          </div>
          
          <p>
            Security is a critical aspect of game development, especially for games with online features or user-generated content.
            Basketo Engine provides several security features to help protect your game and its players.
          </p>
          
          <h3 className="text-xl font-semibold mt-8 mb-2">Network Security</h3>
          <p>
            For multiplayer games, Basketo Engine implements these security measures:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Encrypted Communications</strong> - All network traffic is encrypted using TLS 1.3</li>
            <li><strong>Anti-Cheat Measures</strong> - Client-side prediction with server verification</li>
            <li><strong>Rate Limiting</strong> - Protection against DDoS and spam attacks</li>
            <li><strong>Authentication</strong> - Secure player identity verification</li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-2">Content Security</h3>
          <p>
            For games with user-generated content:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Content Validation</strong> - Server-side validation of all uploaded content</li>
            <li><strong>Asset Sandboxing</strong> - Isolated execution of user scripts and content</li>
            <li><strong>Content Moderation Tools</strong> - APIs for implementing moderation workflows</li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-8 mb-2">Player Data Protection</h3>
          <p>
            To help comply with data protection regulations (GDPR, CCPA, etc.):
          </p>
          
          <pre className="bg-basketo-darker p-4 rounded-lg font-mono text-sm mb-4">
            {`// Example of using the data protection API

// Store player data with encryption
const playerData = new BasketoEngine.PlayerData({
  userId: "player123",
  region: "eu",  // Affects where data is stored
  consent: {    // Track consent for different data types
    analytics: true,
    marketing: false
  }
});

// Save data with encryption
await playerData.set({
  progress: gameProgress,
  settings: playerSettings
});

// Data export for player (GDPR right to access)
const exportData = await BasketoEngine.DataProtection.exportPlayerData("player123");

// Data deletion (GDPR right to be forgotten)
await BasketoEngine.DataProtection.deletePlayerData("player123");`}
          </pre>
          
          <div className="bg-basketo-dark/30 p-4 rounded-lg border border-basketo-blue/20 mt-6">
            <h4 className="font-semibold mb-2 text-basketo-blue">Security Best Practices</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Never trust client-side data for critical game operations</li>
              <li>Implement proper authentication for all sensitive operations</li>
              <li>Keep your engine and dependencies updated to the latest versions</li>
              <li>Use the security audit tool regularly: <code>basketo audit</code></li>
              <li>Follow the <a href="#" className="text-basketo-blue hover:underline">Security Checklist</a> before releasing your game</li>
            </ul>
          </div>
          
          <h3 className="text-xl font-semibold mt-8 mb-2">New Security Features</h3>
          <p>
            The latest engine update includes these security enhancements:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Enhanced Anti-Tampering</strong> - Better protection against memory editing and injection attacks</li>
            <li><strong>Improved Authentication</strong> - Support for multi-factor authentication</li>
            <li><strong>Automated Security Scanning</strong> - Built-in tools to identify common security issues</li>
            <li><strong>Secure Asset Storage</strong> - Encrypted asset bundle support</li>
          </ul>
        </div>
      )
    },
    "advanced-configuration": {
      title: "Advanced Configuration",
      content: (
        <div className="space-y-4">
          <div className="bg-basketo-teal/10 border border-basketo-teal rounded-lg p-4 mb-6">
            <div className="flex items-center">
              <span className="inline-block bg-basketo-teal text-white text-xs px-2 py-1 rounded mr-2">UPDATED</span>
              <span className="text-sm">Last updated: May 24, 2025</span>
            </div>
          </div>
          
          <p>
            Basketo Engine offers powerful configuration options for advanced users who need to fine-tune their game's performance, behavior, and features.
          </p>
          
          <h3 className="text-xl font-semibold mt-8 mb-2">Configuration File</h3>
          <p>
            The main configuration file is <code>basketo.config.js</code> at the root of your project. This file allows you to customize various aspects of the engine:
          </p>
          <pre className="bg-basketo-darker p-4 rounded-lg font-mono text-sm mb-4">
            {`// basketo.config.js
module.exports = {
  project: {
    name: "My Awesome Game",
    version: "1.0.0",
    author: "Your Name",
    description: "A 2D platformer adventure"
  },
  
  build: {
    outputDir: "./dist",
    assetsDir: "./assets",
    sourceMaps: true,
    minify: true,
    target: ["web", "desktop", "mobile"],
    experimentalFeatures: false
  },
  
  rendering: {
    defaultResolution: [1920, 1080],
    defaultPixelRatio: 1,
    vsync: true,
    maxFPS: 60,
    antialiasing: "MSAA_4X",
    renderer: "WebGL2"
  },
  
  physics: {
    engine: "arcade",  
    gravity: [0, 980],  
    fps: 60,  
    debug: false  
  },
  
  audio: {
    engine: "Web Audio",
    channels: 32,
    spatialAudio: true
  },
  
  advanced: {
    workerThreads: true,
    memoryManagement: "automatic",
    asyncLoading: true,
    networkingProtocol: "websocket"
  },
  
  // Plugins
  plugins: [
    {
      name: "basketo-plugin-analytics",
      options: {
        // plugin-specific options
      }
    }
  ]
};`}
          </pre>
          
          <h3 className="text-xl font-semibold mt-8 mb-2">Runtime Configuration</h3>
          <p>
            You can also configure the engine at runtime using the API:
          </p>
          <pre className="bg-basketo-darker p-4 rounded-lg font-mono text-sm mb-4">
            {`// Configure the engine at runtime
BasketoEngine.configure({
  rendering: {
    pixelRatio: window.devicePixelRatio,
    resolution: detectOptimalResolution()
  },
  physics: {
    gravity: [0, playerPreferences.gravity || 980]
  }
});

// You can also get current configuration
const config = BasketoEngine.getConfiguration();
console.log(config.rendering.maxFPS);`}
          </pre>
          
          <h3 className="text-xl font-semibold mt-8 mb-2">Custom Build Pipeline</h3>
          <p>
            For advanced users, the engine allows for customization of the build pipeline:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Custom Asset Processors</strong> - Create processors for your specific asset formats</li>
            <li><strong>Build Hooks</strong> - Run custom code during different phases of the build process</li>
            <li><strong>Bundle Optimization</strong> - Configure how assets are packaged and loaded</li>
          </ul>
          
          <pre className="bg-basketo-darker p-4 rounded-lg font-mono text-sm mb-4">
            {`// Custom build pipeline in basketo.config.js
module.exports = {
  // ... other config options
  
  build: {
    // ... standard build options
    
    hooks: {
      preBuild: async () => {
        console.log("Running pre-build tasks...");
        await generateVersionFile();
      },
      postBuild: async () => {
        console.log("Running post-build tasks...");
        await optimizeAssets();
      }
    },
    
    assetProcessors: [
      {
        name: "custom-model-processor",
        test: /\.mymodel$/,
        process: async (file) => {
          // Convert .mymodel to engine format
          return convertMyModelFormat(file);
        }
      }
    ],
    
    bundleOptimization: {
      splitChunks: true,
      lazyLoading: true,
      compressionLevel: "high"
    }
  }
};`}
          </pre>
          
          <div className="bg-basketo-dark/30 p-4 rounded-lg border border-basketo-teal/20 mt-6">
            <h4 className="font-semibold mb-2 text-basketo-teal">New Configuration Features</h4>
            <p className="mb-4">
              The latest update adds these advanced configuration options:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>WebGPU Support</strong> - Enable the next-generation graphics API</li>
              <li><strong>Asset Streaming</strong> - Configure how assets are loaded dynamically</li>
              <li><strong>Memory Profiles</strong> - Optimize for different target platforms</li>
              <li><strong>Custom Shaders Pipeline</strong> - More control over shader compilation</li>
              <li><strong>Debug Instrumentation</strong> - Advanced profiling and debugging tools</li>
            </ul>
          </div>
        </div>
      )
    },
    "api-reference": {
      title: "API Reference",
      content: (
        <div className="space-y-4">
          <div className="bg-basketo-purple/10 border border-basketo-purple rounded-lg p-4 mb-6">
            <div className="flex items-center">
              <span className="inline-block bg-basketo-purple text-white text-xs px-2 py-1 rounded mr-2">BETA</span>
              <span className="text-sm">This documentation is in beta and subject to change</span>
            </div>
          </div>
          
          <p>
            Welcome to the Basketo Engine API Reference. This comprehensive documentation details all the classes, methods, and properties available in the engine.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-basketo-dark/40 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Core API</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-basketo-blue hover:underline">Engine</a> - Main engine instance</li>
                <li><a href="#" className="text-basketo-blue hover:underline">Scene</a> - Scene management</li>
                <li><a href="#" className="text-basketo-blue hover:underline">Game</a> - Game loop and lifecycle</li>
                <li><a href="#" className="text-basketo-blue hover:underline">Asset</a> - Asset loading and management</li>
              </ul>
            </div>
            
            <div className="bg-basketo-dark/40 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Graphics API</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-basketo-blue hover:underline">Renderer</a> - Rendering pipeline</li>
                <li><a href="#" className="text-basketo-blue hover:underline">Texture</a> - Texture management</li>
                <li><a href="#" className="text-basketo-blue hover:underline">Material</a> - Material system</li>
                <li><a href="#" className="text-basketo-blue hover:underline">Shader</a> - Shader programming</li>
              </ul>
            </div>
            
            <div className="bg-basketo-dark/40 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">UI API</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-basketo-blue hover:underline">UI</a> - UI namespace</li>
                <li><a href="#" className="text-basketo-blue hover:underline">Control</a> - Base UI control</li>
                <li><a href="#" className="text-basketo-blue hover:underline">Theme</a> - UI theming system</li>
                <li><a href="#" className="text-basketo-blue hover:underline">Layout</a> - Layout management</li>
              </ul>
            </div>
            
            <div className="bg-basketo-dark/40 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Physics API</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-basketo-blue hover:underline">Physics</a> - Physics namespace</li>
                <li><a href="#" className="text-basketo-blue hover:underline">Body</a> - Physics bodies</li>
                <li><a href="#" className="text-basketo-blue hover:underline">Collider</a> - Collision shapes</li>
                <li><a href="#" className="text-basketo-blue hover:underline">Joint</a> - Physics constraints</li>
              </ul>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mt-8 mb-2">API Explorer</h3>
          <div className="bg-basketo-darker p-4 rounded-lg">
            <p className="mb-4">The interactive API explorer is currently under development. It will provide a more interactive way to browse and search the API documentation.</p>
            
            <div className="flex items-center justify-center p-8 border border-dashed border-basketo-purple/30 rounded-lg">
              <div className="text-center">
                <span className="text-basketo-purple font-semibold">Coming Soon</span>
                <p className="text-sm text-gray-400 mt-2">API Explorer with interactive examples</p>
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mt-8 mb-2">Example Usage</h3>
          <pre className="bg-basketo-darker p-4 rounded-lg font-mono text-sm mb-4">
            {`// Initialize the engine
const engine = new BasketoEngine.Engine({
  canvas: document.getElementById('game-canvas'),
  width: 1280,
  height: 720
});

// Create a new scene
const scene = new BasketoEngine.Scene();

// Load assets
await engine.assets.loadPackage('game-assets.pack');

// Create a sprite
const playerSprite = new BasketoEngine.Sprite({
  texture: engine.assets.get('player.png'),
  position: { x: 100, y: 100 }
});

// Add sprite to scene
scene.add(playerSprite);

// Set up input handling
engine.input.onKeyDown('ArrowRight', () => {
  playerSprite.position.x += 5;
});

// Start the game loop
engine.start();`}
          </pre>
        </div>
      )
    },
  };

  // Render content based on active section
  const renderContent = () => {
    const contentSection = contentSections[activeContent];
    
    if (!contentSection) {
      return (
        <div className="space-y-6">
          <div className="bg-basketo-dark/50 border border-white/10 rounded-lg p-6 mb-8 animate-scale-in">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-basketo-purple to-basketo-blue bg-clip-text text-transparent">
              Content Coming Soon
            </h2>
            <p className="text-lg text-muted-foreground">
              This documentation section is currently being developed.
              Please check back later.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-basketo-dark/30 border border-white/10 rounded-lg p-4 hover:bg-basketo-dark/50 transition-all duration-300">
              <h3 className="text-lg font-semibold mb-2 text-basketo-purple">Looking for something else?</h3>
              <p className="text-sm">
                Check out our Getting Started guide or explore other available documentation sections in the sidebar.
              </p>
            </div>
            
            <div className="bg-basketo-dark/30 border border-white/10 rounded-lg p-4 hover:bg-basketo-dark/50 transition-all duration-300">
              <h3 className="text-lg font-semibold mb-2 text-basketo-blue">Need Help?</h3>
              <p className="text-sm">
                Join our community forums or Discord server to ask questions and get assistance from other developers.
              </p>
            </div>
          </div>
        </div>
      );
    }
    
    return (
      <div>
        <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-basketo-purple to-basketo-blue bg-clip-text text-transparent">{contentSection.title}</h1>
        {contentSection.content}
      </div>
    );
  };

  return <div className="w-full">{renderContent()}</div>;
};

export default DocContent;
