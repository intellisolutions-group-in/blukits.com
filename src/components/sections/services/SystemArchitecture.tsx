"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Laptop, Cpu, Database, Network, ShieldCheck, Zap } from "lucide-react";

const flows = [
  {
    id: "web-app",
    title: "Web Request Flow",
    desc: "A typical user request visiting a web app, optimized through Next.js edge caching and DB queries.",
    pathIndices: [0, 1, 2],
    highlightedNodes: ["client", "gateway", "database"]
  },
  {
    id: "api-sync",
    title: "Mobile API Sync Flow",
    desc: "Mobile client requests calling background Node.js APIs with authentication validation and server logs.",
    pathIndices: [0, 3, 4],
    highlightedNodes: ["client", "auth", "services"]
  },
  {
    id: "cdn-cache",
    title: "CDN Edge Cache Delivery",
    desc: "Static assets loaded instantly from the nearest Content Delivery Network edge nodes, bypassing database lookups.",
    pathIndices: [5],
    highlightedNodes: ["client", "cdn"]
  }
];

export default function SystemArchitecture() {
  const [activeFlowId, setActiveFlowId] = useState("web-app");
  const activeFlow = flows.find(f => f.id === activeFlowId) || flows[0];

  return (
    <div className="mt-16 rounded-3xl border border-stroke bg-white p-8 shadow-two dark:border-stroke-dark dark:bg-dark dark:shadow-three">
      <div className="mb-10 text-center lg:text-left">
        <span className="mb-3 inline-flex items-center gap-1 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
          <Zap size={12} className="animate-pulse" />
          Interactive System Blueprint
        </span>
        <h3 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl">
          System Architecture Visualizer
        </h3>
        <p className="mx-auto max-w-[600px] text-base text-body-color dark:text-body-color-dark lg:mx-0">
          Click on different system flows below to see how our engineering architectures coordinate requests, load balancing, and data pipes in real-time.
        </p>
      </div>

      {/* Tabs */}
      <div className="mb-10 flex flex-wrap justify-center lg:justify-start gap-3">
        {flows.map((flow) => {
          const isActive = flow.id === activeFlowId;
          return (
            <button
              key={flow.id}
              onClick={() => setActiveFlowId(flow.id)}
              className={`rounded-xl px-5 py-3.5 text-sm font-bold transition-all ${
                isActive
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-gray-light text-body-color hover:bg-stroke dark:bg-dark-2 dark:text-body-color-dark dark:hover:bg-dark-2/80"
              }`}
            >
              {flow.title}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Visual Map (8 Columns) */}
        <div className="lg:col-span-8 flex items-center justify-center bg-gray-light/60 dark:bg-black/20 rounded-2xl p-6 border border-stroke/40 dark:border-stroke-dark/40 min-h-[360px]">
          <div className="relative w-full max-w-[600px] aspect-[16/9]">
            
            {/* SVG Connection Lines */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none" 
              viewBox="0 0 600 338" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="flowGrad" x1="0" y1="0" x2="600" y2="338" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#4A6CF7" />
                  <stop offset="1" stopColor="#00f2fe" />
                </linearGradient>
              </defs>

              {/* Static Background circuit wires */}
              {/* Path 0: Client to Edge/Gateway */}
              <path d="M 80 169 L 220 90" stroke="#E2E8F0" strokeWidth="2.5" className="dark:stroke-stroke-dark" />
              {/* Path 1: Edge/Gateway to Database */}
              <path d="M 280 90 L 520 169" stroke="#E2E8F0" strokeWidth="2.5" className="dark:stroke-stroke-dark" />
              {/* Path 2: Gateway/Edge to Services (indirect) */}
              <path d="M 280 90 L 380 250" stroke="#E2E8F0" strokeWidth="2.5" className="dark:stroke-stroke-dark" />
              {/* Path 3: Client to Auth Node */}
              <path d="M 80 169 L 220 250" stroke="#E2E8F0" strokeWidth="2.5" className="dark:stroke-stroke-dark" />
              {/* Path 4: Auth Node to Backend Microservices */}
              <path d="M 280 250 L 380 250" stroke="#E2E8F0" strokeWidth="2.5" className="dark:stroke-stroke-dark" />
              {/* Path 5: Client to CDN Cache */}
              <path d="M 80 169 C 180 80, 420 80, 520 169" stroke="#E2E8F0" strokeWidth="2.5" className="dark:stroke-stroke-dark" />

              {/* Active Glowing Flow Lines with animating dash offset */}
              {activeFlow.pathIndices.includes(0) && (
                <path 
                  d="M 80 169 L 220 90" 
                  stroke="url(#flowGrad)" 
                  strokeWidth="3.5" 
                  strokeDasharray="8 6" 
                  style={{ animation: "dash 1.2s linear infinite" }}
                />
              )}
              {activeFlow.pathIndices.includes(1) && (
                <path 
                  d="M 280 90 L 520 169" 
                  stroke="url(#flowGrad)" 
                  strokeWidth="3.5" 
                  strokeDasharray="8 6" 
                  style={{ animation: "dash 1.2s linear infinite" }}
                />
              )}
              {activeFlow.pathIndices.includes(2) && (
                <path 
                  d="M 280 90 L 380 250" 
                  stroke="url(#flowGrad)" 
                  strokeWidth="3.5" 
                  strokeDasharray="8 6" 
                  style={{ animation: "dash 1.2s linear infinite" }}
                />
              )}
              {activeFlow.pathIndices.includes(3) && (
                <path 
                  d="M 80 169 L 220 250" 
                  stroke="url(#flowGrad)" 
                  strokeWidth="3.5" 
                  strokeDasharray="8 6" 
                  style={{ animation: "dash 1.2s linear infinite" }}
                />
              )}
              {activeFlow.pathIndices.includes(4) && (
                <path 
                  d="M 280 250 L 380 250" 
                  stroke="url(#flowGrad)" 
                  strokeWidth="3.5" 
                  strokeDasharray="8 6" 
                  style={{ animation: "dash 1.2s linear infinite" }}
                />
              )}
              {activeFlow.pathIndices.includes(5) && (
                <path 
                  d="M 80 169 C 180 80, 420 80, 520 169" 
                  stroke="url(#flowGrad)" 
                  strokeWidth="3.5" 
                  strokeDasharray="8 6" 
                  style={{ animation: "dash 1.2s linear infinite" }}
                />
              )}
            </svg>

            {/* Architecture Node 1: Client App (Laptop) */}
            <div className="absolute left-[30px] top-[140px] z-10 flex flex-col items-center">
              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-300 ${
                activeFlow.highlightedNodes.includes("client") 
                  ? "bg-primary border-primary text-white shadow-lg shadow-primary/20 scale-105" 
                  : "bg-white border-stroke text-body-color dark:border-stroke-dark dark:bg-dark dark:text-white"
              }`}>
                <Laptop size={24} />
              </div>
              <span className="mt-2 text-xs font-semibold text-dark dark:text-white">Client App</span>
            </div>

            {/* Architecture Node 2: Edge Gateway (CDN API Gateway) */}
            <div className="absolute left-[200px] top-[60px] z-10 flex flex-col items-center">
              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-300 ${
                activeFlow.highlightedNodes.includes("gateway") 
                  ? "bg-primary border-primary text-white shadow-lg shadow-primary/20 scale-105" 
                  : "bg-white border-stroke text-body-color dark:border-stroke-dark dark:bg-dark dark:text-white"
              }`}>
                <Network size={24} />
              </div>
              <span className="mt-2 text-xs font-semibold text-dark dark:text-white">Edge Gateway</span>
            </div>

            {/* Architecture Node 3: Auth Gateway */}
            <div className="absolute left-[200px] top-[220px] z-10 flex flex-col items-center">
              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-300 ${
                activeFlow.highlightedNodes.includes("auth") 
                  ? "bg-primary border-primary text-white shadow-lg shadow-primary/20 scale-105" 
                  : "bg-white border-stroke text-body-color dark:border-stroke-dark dark:bg-dark dark:text-white"
              }`}>
                <ShieldCheck size={24} />
              </div>
              <span className="mt-2 text-xs font-semibold text-dark dark:text-white">Auth Node</span>
            </div>

            {/* Architecture Node 4: Backend API (Microservices) */}
            <div className="absolute left-[350px] top-[220px] z-10 flex flex-col items-center">
              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-300 ${
                activeFlow.highlightedNodes.includes("services") 
                  ? "bg-primary border-primary text-white shadow-lg shadow-primary/20 scale-105" 
                  : "bg-white border-stroke text-body-color dark:border-stroke-dark dark:bg-dark dark:text-white"
              }`}>
                <Cpu size={24} />
              </div>
              <span className="mt-2 text-xs font-semibold text-dark dark:text-white">Backend APIs</span>
            </div>

            {/* Architecture Node 5: Database Cluster */}
            <div className="absolute left-[490px] top-[140px] z-10 flex flex-col items-center">
              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-300 ${
                activeFlow.highlightedNodes.includes("database") 
                  ? "bg-primary border-primary text-white shadow-lg shadow-primary/20 scale-105" 
                  : "bg-white border-stroke text-body-color dark:border-stroke-dark dark:bg-dark dark:text-white"
              }`}>
                <Database size={24} />
              </div>
              <span className="mt-2 text-xs font-semibold text-dark dark:text-white">DB Cluster</span>
            </div>

            {/* Architecture Node 6: CDN Cache */}
            <div className="absolute left-[350px] top-[30px] z-0 flex flex-col items-center opacity-0 pointer-events-none">
              <span className="text-xs font-semibold text-dark dark:text-white">CDN Cache</span>
            </div>
            {/* Direct CDN label indicator */}
            <div className="absolute left-[490px] top-[140px] z-10">
              {/* Overlapping with DB for representation */}
            </div>

          </div>
        </div>

        {/* Informational details Panel (4 Columns) */}
        <div className="lg:col-span-4 flex flex-col justify-center border-l border-stroke/60 pl-0 lg:pl-8 dark:border-stroke-dark/60">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFlowId}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <h4 className="text-xl font-bold text-dark dark:text-white flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                {activeFlow.title}
              </h4>
              <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                {activeFlow.desc}
              </p>
              
              <div className="rounded-2xl bg-primary/5 p-5 border border-primary/10 dark:bg-primary/10">
                <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-2">Technical Highlight</span>
                <p className="text-sm text-body-color dark:text-body-color-dark leading-relaxed">
                  {activeFlowId === "web-app" && "Utilizes CDN Edge redirects to serve static layouts in &lt;100ms, forwarding data requests dynamically to PostgreSQL clusters with Read Replica sync."}
                  {activeFlowId === "api-sync" && "Auth gateway parses JSON Web Tokens (JWT) at the middleware layer. Requests are loaded into message queues to protect core databases from server peaks."}
                  {activeFlowId === "cdn-cache" && "Caching triggers standard invalidation rules on content update. Static files, scripts, and SVG visuals load close to the reader, saving bandwidth costs."}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Embedded CSS for SVG line animations */}
      <style jsx global>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -40;
          }
        }
      `}</style>
    </div>
  );
}
