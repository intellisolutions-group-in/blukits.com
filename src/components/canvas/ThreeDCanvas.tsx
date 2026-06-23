"use client";

import { useEffect, useRef } from "react";

const ThreeDCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    // Mouse positions
    let mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000, active: false };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
      mouse.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Handle resize
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    // 3D Grid parameters
    const cols = 26;
    const rows = 26;
    const spacing = 35;
    const focalLength = 350;
    const amplitude = 38;
    const speed = 0.015;
    let time = 0;

    // Angle of view rotation
    const yaw = -0.15; // rotate slightly around Y
    const pitch = 0.55; // tilt view down around X

    // Helper for 3D projection
    interface Point2D {
      x: number;
      y: number;
      depth: number;
      active: boolean;
    }

    const grid2D: Point2D[][] = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => ({ x: 0, y: 0, depth: 0, active: false }))
    );

    // Check if system is in dark mode
    const isDarkMode = () => {
      if (typeof document !== "undefined") {
        return document.documentElement.classList.contains("dark");
      }
      return false;
    };

    // Animation Loop
    const draw = () => {
      time += speed;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      const centerX = width / 2;
      const centerY = height / 2.6; // Position the center slightly higher

      // Determine colors based on theme
      const darkTheme = isDarkMode();
      const lineColor = darkTheme 
        ? "rgba(74, 108, 247, 0.12)"   // soft primary blue in dark mode
        : "rgba(74, 108, 247, 0.08)";  // softer blue in light mode

      const nodeColor = darkTheme 
        ? "rgba(0, 242, 254, 0.35)"    // cyan glow nodes
        : "rgba(74, 108, 247, 0.2)";   // primary blue nodes

      const mouseConnectionColor = darkTheme
        ? "rgba(0, 242, 254, 0.08)"
        : "rgba(74, 108, 247, 0.05)";

      // Step 1: Calculate 3D math and project to 2D
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          // 3D local grid space coordinates
          const x3d = (c - cols / 2) * spacing;
          const z3d = (r - rows / 2) * spacing;

          // Standard wave equation height
          let y3d = Math.sin(x3d * 0.01 + time) * Math.cos(z3d * 0.01 + time) * amplitude;
          
          // Additional ripple wave originating from center
          const distFromCenter = Math.sqrt(x3d * x3d + z3d * z3d);
          y3d += Math.sin(distFromCenter * 0.02 - time * 2) * (amplitude * 0.3);

          // Rotate around Y-axis (Yaw)
          const xRotY = x3d * Math.cos(yaw) - z3d * Math.sin(yaw);
          const zRotY = x3d * Math.sin(yaw) + z3d * Math.cos(yaw);

          // Rotate around X-axis (Pitch)
          const yRotX = y3d * Math.cos(pitch) - zRotY * Math.sin(pitch);
          const zRotX = y3d * Math.sin(pitch) + zRotY * Math.cos(pitch);

          // Perspective Projection
          const scale = focalLength / (focalLength + zRotX);
          const projX = xRotY * scale + centerX;
          const projY = yRotX * scale + centerY;

          grid2D[r][c] = {
            x: projX,
            y: projY,
            depth: zRotX,
            active: false
          };

          // Mouse distortion interaction (push down/pull up wave nodes)
          if (mouse.active) {
            const dx = projX - mouse.x;
            const dy = projY - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 130) {
              const pullFactor = (1 - dist / 130) * 12;
              grid2D[r][c].y += pullFactor; // distort node vertically on screen
              grid2D[r][c].active = true;
            }
          }
        }
      }

      // Step 2: Draw the mesh grid lines
      ctx.lineWidth = 1;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const curr = grid2D[r][c];

          // Set drawing color
          ctx.strokeStyle = lineColor;

          // Connect to right neighbor
          if (c < cols - 1) {
            const right = grid2D[r][c + 1];
            ctx.beginPath();
            ctx.moveTo(curr.x, curr.y);
            ctx.lineTo(right.x, right.y);
            ctx.stroke();
          }

          // Connect to bottom neighbor
          if (r < rows - 1) {
            const bottom = grid2D[r + 1][c];
            ctx.beginPath();
            ctx.moveTo(curr.x, curr.y);
            ctx.lineTo(bottom.x, bottom.y);
            ctx.stroke();
          }

          // Draw floating glowing dot at key intersection nodes
          if ((r + c) % 4 === 0 && curr.depth < 150) {
            const radius = Math.max(0.5, (1.8 * (focalLength / (focalLength + curr.depth))));
            ctx.fillStyle = nodeColor;
            ctx.beginPath();
            ctx.arc(curr.x, curr.y, radius, 0, Math.PI * 2);
            ctx.fill();
            
            // Draw interactive mouse connection lines
            if (curr.active && mouse.active) {
              ctx.strokeStyle = mouseConnectionColor;
              ctx.beginPath();
              ctx.moveTo(curr.x, curr.y);
              ctx.lineTo(mouse.x, mouse.y);
              ctx.stroke();
            }
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    // Clean up
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full opacity-60 dark:opacity-40"
    />
  );
};

export default ThreeDCanvas;
