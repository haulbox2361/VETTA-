"use client";

import React, { useEffect, useRef, useState } from 'react';

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !canvasRef.current) return;
    
    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particlesArray: Particle[] = [];
    const numberOfParticles = 375;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 120
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.x;
      mouse.y = e.y;
    };
    const handleMouseOut = () => {
      mouse.x = null;
      mouse.y = null;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);

    class Particle {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      density: number;
      angle: number;
      velocity: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.size = Math.random() * 2 + 1;
        this.density = (Math.random() * 20) + 1;
        this.angle = Math.random() * Math.PI * 2;
        this.velocity = Math.random() * 0.015 + 0.005;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = '#1E3A8A4D'; // Dark blue, 30% opacity
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update() {
        // Floating on water oscillation
        this.angle += this.velocity;
        this.baseX += Math.cos(this.angle) * 0.2;
        this.baseY += Math.sin(this.angle) * 0.2;

        if (this.baseX > canvas.width) this.baseX = 0;
        if (this.baseX < 0) this.baseX = canvas.width;
        if (this.baseY > canvas.height) this.baseY = 0;
        if (this.baseY < 0) this.baseY = canvas.height;

        let dx = (mouse.x || -1000) - this.x;
        let dy = (mouse.y || -1000) - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouse.radius && mouse.x !== null) {
          let forceDirectionX = dx / distance;
          let forceDirectionY = dy / distance;
          let force = (mouse.radius - distance) / mouse.radius;
          let directionX = forceDirectionX * force * this.density;
          let directionY = forceDirectionY * force * this.density;
          
          this.x -= directionX;
          this.y -= directionY;
        } else {
          // Return to base position
          if (this.x !== this.baseX) {
            let dxBase = this.x - this.baseX;
            this.x -= dxBase / 20;
          }
          if (this.y !== this.baseY) {
            let dyBase = this.y - this.baseY;
            this.y -= dyBase / 20;
          }
        }
        this.draw();
      }
    }

    const init = () => {
      particlesArray = [];
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };
    init();

    let animationFrameId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-white">
      {/* Very Subtle Technical Pattern (dotted grid) */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, var(--color-brand-blue) 1px, transparent 0)',
          backgroundSize: '40px 40px',
          maskImage: 'linear-gradient(to bottom, black 0%, transparent 60%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 60%)'
        }}
      />

      {/* Soft Blue Ambient Glows */}
      <div 
        className="absolute top-[-5%] left-[-5%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] rounded-full blur-[100px] animate-blob" 
        style={{ backgroundColor: 'var(--color-brand-blue)', opacity: 0.03, animationDuration: '20s' }} 
      />
      <div 
        className="absolute top-[30%] right-[-10%] w-[60vw] h-[60vw] max-w-[900px] max-h-[900px] rounded-full blur-[120px] animate-blob" 
        style={{ backgroundColor: 'var(--color-info)', opacity: 0.03, animationDelay: '5s', animationDuration: '25s' }} 
      />
      
      {/* Subtle Indigo Accent Glow */}
      <div 
        className="absolute bottom-[-10%] left-[20%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full blur-[100px] animate-blob" 
        style={{ backgroundColor: '#4F46E5', opacity: 0.02, animationDelay: '2s', animationDuration: '22s' }} 
      />

      {/* Interactive Canvas Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
    </div>
  );
}
