"use client";

import { useEffect, useRef, useState } from "react";

interface CityNode {
  name: string;
  lat: number;   // latitude in degrees (-90 to 90)
  lon: number;   // longitude in degrees (-180 to 180)
  label: string;
}

const cities: CityNode[] = [
  { name: "Vadodara (HQ)", lat: 22.3, lon: 73.2, label: "HQ Vadodara" },
  { name: "Mumbai Node", lat: 19.0, lon: 72.8, label: "Mumbai Node" },
  { name: "London Node", lat: 51.5, lon: -0.12, label: "London Cache" },
  { name: "San Francisco Node", lat: 37.77, lon: -122.42, label: "SF Proxy" }
];

export default function ThreeDGlobe() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    // Globe parameters
    const globeRadius = Math.min(width, height) * 0.38;
    const focalLength = 300;
    
    // Rotations & Momentum states
    let rotX = 0.3;
    let rotY = 0.8;
    let targetRotX = 0.3;
    let targetRotY = 0.8;
    let dragStartX = 0;
    let dragStartY = 0;
    let isDragging = false;

    // Mouse coordinates relative to canvas
    let mouse = { x: -1000, y: -1000 };

    // Resize handler
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    // Drag handlers to spin the globe
    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      dragStartX = e.clientX;
      dragStartY = e.clientY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;

      if (isDragging) {
        const deltaX = e.clientX - dragStartX;
        const deltaY = e.clientY - dragStartY;
        targetRotY += deltaX * 0.006;
        targetRotX += deltaY * 0.006;
        dragStartX = e.clientX;
        dragStartY = e.clientY;
      }
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    canvas.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    // Generate 3D grid points on sphere
    interface Point3D {
      x: number;
      y: number;
      z: number;
    }

    const spherePoints: Point3D[][] = [];
    const latCount = 14;
    const lonCount = 22;

    for (let i = 0; i <= latCount; i++) {
      const theta = (i / latCount) * Math.PI; // 0 to PI
      const ring: Point3D[] = [];
      
      for (let j = 0; j < lonCount; j++) {
        const phi = (j / lonCount) * 2 * Math.PI; // 0 to 2PI
        const x = globeRadius * Math.sin(theta) * Math.cos(phi);
        const y = globeRadius * Math.cos(theta);
        const z = globeRadius * Math.sin(theta) * Math.sin(phi);
        ring.push({ x, y, z });
      }
      spherePoints.push(ring);
    }

    const isDarkMode = () => {
      if (typeof document !== "undefined") {
        return document.documentElement.classList.contains("dark");
      }
      return false;
    };

    // Animation Loop
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Apply drag easing
      rotX += (targetRotX - rotX) * 0.08;
      rotY += (targetRotY - rotY) * 0.08;

      // Auto spin if not dragging
      if (!isDragging) {
        targetRotY += 0.002; // slow drift
      }

      // Constrain Pitch rotation (vertical flip prevention)
      targetRotX = Math.max(-Math.PI / 2.5, Math.min(Math.PI / 2.5, targetRotX));

      const centerX = width / 2;
      const centerY = height / 2;

      const darkTheme = isDarkMode();
      
      // Dynamic colors
      const wireframeColor = darkTheme 
        ? "rgba(74, 108, 247, 0.07)" 
        : "rgba(74, 108, 247, 0.05)";
      
      const particleColor = darkTheme 
        ? "rgba(0, 242, 254, 0.22)" 
        : "rgba(74, 108, 247, 0.15)";
        
      const beaconColor = darkTheme 
        ? "rgba(0, 242, 254, 1)" 
        : "rgba(74, 108, 247, 1)";

      // Projection mapping structure
      interface ProjectedPoint {
        x: number;
        y: number;
        depth: number;
      }

      const projectedSphere: ProjectedPoint[][] = spherePoints.map(ring =>
        ring.map(pt => {
          // Rotate around X axis (pitch)
          let y1 = pt.y * Math.cos(rotX) - pt.z * Math.sin(rotX);
          let z1 = pt.y * Math.sin(rotX) + pt.z * Math.cos(rotX);
          // Rotate around Y axis (yaw/spin)
          let x2 = pt.x * Math.cos(rotY) - z1 * Math.sin(rotY);
          let z2 = pt.x * Math.sin(rotY) + z1 * Math.cos(rotY);

          // Project
          const scale = focalLength / (focalLength + z2);
          return {
            x: x2 * scale + centerX,
            y: y1 * scale + centerY,
            depth: z2
          };
        })
      );

      // 1. Draw back-facing wireframe rings (depth > 0)
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = wireframeColor;
      for (let r = 0; r <= latCount; r++) {
        for (let c = 0; c < lonCount; c++) {
          const curr = projectedSphere[r][c];
          if (curr.depth > 0) {
            // Connect to next longitude node
            const nextL = projectedSphere[r][(c + 1) % lonCount];
            if (nextL.depth > 0) {
              ctx.beginPath();
              ctx.moveTo(curr.x, curr.y);
              ctx.lineTo(nextL.x, nextL.y);
              ctx.stroke();
            }

            // Connect to next latitude node
            if (r < latCount) {
              const nextLat = projectedSphere[r + 1][c];
              if (nextLat.depth > 0) {
                ctx.beginPath();
                ctx.moveTo(curr.x, curr.y);
                ctx.lineTo(nextLat.x, nextLat.y);
                ctx.stroke();
              }
            }
          }
        }
      }

      // 2. Draw front-facing wireframe rings (depth <= 0)
      ctx.strokeStyle = wireframeColor;
      for (let r = 0; r <= latCount; r++) {
        for (let c = 0; c < lonCount; c++) {
          const curr = projectedSphere[r][c];
          if (curr.depth <= 0) {
            const nextL = projectedSphere[r][(c + 1) % lonCount];
            if (nextL.depth <= 0) {
              ctx.beginPath();
              ctx.moveTo(curr.x, curr.y);
              ctx.lineTo(nextL.x, nextL.y);
              ctx.stroke();
            }

            if (r < latCount) {
              const nextLat = projectedSphere[r + 1][c];
              if (nextLat.depth <= 0) {
                ctx.beginPath();
                ctx.moveTo(curr.x, curr.y);
                ctx.lineTo(nextLat.x, nextLat.y);
                ctx.stroke();
              }
            }

            // Draw small grid node particles
            if ((r + c) % 2 === 0) {
              const rad = Math.max(0.5, (1.2 * (focalLength / (focalLength + curr.depth))));
              ctx.fillStyle = particleColor;
              ctx.beginPath();
              ctx.arc(curr.x, curr.y, rad, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }

      // 3. Project and Draw City Beacons (glowing hotspots)
      let currentHoveredCity: string | null = null;

      cities.forEach(city => {
        // Convert lat/lon degrees to radians
        const latRad = (90 - city.lat) * (Math.PI / 180);
        const lonRad = (city.lon) * (Math.PI / 180);

        // 3D Spherical coordinates
        const x3d = globeRadius * Math.sin(latRad) * Math.cos(lonRad);
        const y3d = globeRadius * Math.cos(latRad);
        const z3d = globeRadius * Math.sin(latRad) * Math.sin(lonRad);

        // Rotate
        let y1 = y3d * Math.cos(rotX) - z3d * Math.sin(rotX);
        let z1 = y3d * Math.sin(rotX) + z3d * Math.cos(rotX);
        let x2 = x3d * Math.cos(rotY) - z1 * Math.sin(rotY);
        let z2 = x3d * Math.sin(rotY) + z1 * Math.cos(rotY);

        // Render city only if on front hemisphere
        if (z2 <= 20) {
          const scale = focalLength / (focalLength + z2);
          const px = x2 * scale + centerX;
          const py = y1 * scale + centerY;

          // Draw pulsing halo
          const pulse = Math.abs(Math.sin(Date.now() * 0.003)) * 8 + 4;
          ctx.strokeStyle = beaconColor;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(px, py, pulse, 0, Math.PI * 2);
          ctx.stroke();

          // Draw center node
          ctx.fillStyle = beaconColor;
          ctx.beginPath();
          ctx.arc(px, py, 3.5, 0, Math.PI * 2);
          ctx.fill();

          // Hover detection
          const dx = px - mouse.x;
          const dy = py - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 15) {
            currentHoveredCity = city.name;
          }

          // Draw labels (always on, or larger on hover)
          const isThisHovered = currentHoveredCity === city.name;
          ctx.fillStyle = darkTheme ? "#ffffff" : "#0f172a";
          ctx.font = isThisHovered 
            ? "bold 11px 'Inter', sans-serif" 
            : "normal 9px 'Inter', sans-serif";
          ctx.fillText(city.label, px + 8, py - 4);
        }
      });

      setHoveredCity(currentHoveredCity);

      // Draw cursor hint text in canvas corners if dragging
      if (isDragging) {
        ctx.fillStyle = "rgba(74, 108, 247, 0.4)";
        ctx.font = "italic 9px monospace";
        ctx.fillText("spinning...", 15, height - 15);
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div className="relative w-full h-[240px] md:h-[280px]">
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      />
      {hoveredCity && (
        <div className="absolute top-2 left-1/2 -translate-x-1/2 rounded-md bg-primary/95 text-white px-3 py-1 text-[10px] font-bold shadow-md tracking-wider uppercase select-none transition-opacity">
          Connected to: {hoveredCity}
        </div>
      )}
    </div>
  );
}
