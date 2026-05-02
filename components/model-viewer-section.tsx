'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function ModelViewerSection() {
  const modelRef = useRef<any>(null);
  const ModelViewerTag = 'model-viewer' as any;

  useEffect(() => {
    // Import the custom element from Google
    import('@google/model-viewer');
  }, []);

  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-20">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-600 mb-6">
              Interactive Experience
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Explore our tech from <span className="text-blue-600">every angle.</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We've integrated a 3D viewer so you can inspect the precision engineering of our terminals. Rotate, zoom, and explore the details that make Tulip Industries the leader in industrial hardware.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">1</div>
                <span className="text-gray-700 font-medium">Click and drag to rotate the machine</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">2</div>
                <span className="text-gray-700 font-medium">Scroll to zoom in on components</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">3</div>
                <span className="text-gray-700 font-medium">Try AR on mobile to see it in your room</span>
              </div>
            </div>
          </motion.div>

          {/* 3D Viewer */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full aspect-square relative"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-blue-100/50 rounded-full blur-3xl animate-pulse" />
            
            <ModelViewerTag
              ref={modelRef}
              src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
              alt="3D Kiosk Model"
              auto-rotate
              camera-controls
              shadow-intensity="1"
              environment-image="neutral"
              exposure="1"
              loading="lazy"
              ar
              ar-modes="webxr scene-viewer quick-look"
              style={{ width: '100%', height: '100%', outline: 'none' }}
              class="w-full h-full cursor-grab active:cursor-grabbing"
            >
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button className="bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg text-xs font-bold text-gray-800 border border-gray-100">
                  3D VIEW
                </button>
              </div>
            </ModelViewerTag>
            
            <p className="text-center text-xs text-gray-400 mt-4 italic">
              * Note: Using a demo model while the Tulip 3D file is being prepared.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
