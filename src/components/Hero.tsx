import React, { useEffect, useRef } from 'react';
import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './animations/Reveal';
import { PopupWidget } from "react-calendly";

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 3 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = `rgba(155, 135, 245, ${Math.random() * 0.3})`;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x < 0 || this.x > width) this.speedX *= -1;
        if (this.y < 0 || this.y > height) this.speedY *= -1;
      }
      
      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    const particles: Particle[] = [];
    const particleCount = Math.min(80, width * height / 15000);
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      
      for (const particle of particles) {
        particle.update();
        particle.draw();
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <div className="relative min-h-screen flex items-center bg-[url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80')] bg-cover bg-center">
      <div className="absolute inset-0 bg-white opacity-80" /> {/* Added whiteish filter overlay */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 right-0 bottom-0 -z-10"
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 to-background -z-10" />
      
      <div className="container mx-auto px-4 pt-20 pb-8 md:py-24"> {/* Adjusted padding */}
        <div className="max-w-4xl mx-auto text-center"> {/* Centered text */}
          <Reveal>
            <p className="text-web3-accent font-bold text-2xl mb-3">Web3 & AI Consultant</p>
          </Reveal>
          
          <Reveal delay={100}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              Transforming Businesses with <span className="text-gradient">Blockchain & AI</span> Solutions
            </h1>
          </Reveal>
          
          <Reveal delay={200}>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              Navigating the complex landscape of emerging technologies to deliver practical solutions that drive innovation and create real business value.
            </p>
          </Reveal>
          
          <Reveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"> {/* Centered button group */}
              <Button 
                variant="gradient" 
                size="lg"
                onClick={() => {
                  const popup = document.querySelector(".calendly-badge-content");
                  if (popup) {
                    (popup as HTMLElement).click();
                  }
                }}
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <div id="calendly-popup" style={{ display: 'none' }}>
                <PopupWidget
                  url="https://calendly.com/nikola-mandic-web3/30min"
                  rootElement={document.getElementById("root") as HTMLElement} // Type assertion to ensure it's not null
                  text="Click here to schedule!"
                  textColor="#ffffff"
                  color="#00a2ff"
                />
              </div>
              
              <div className="hidden">
                <PopupWidget
                  url="https://calendly.com/nikola-mandic-web3/30min"
                  rootElement={document.getElementById("root") as HTMLElement} // Type assertion to ensure it's not null
                  text="Click here to schedule!"
                  textColor="#ffffff"
                  color="#00a2ff"
                />
              </div>

              <Button variant="outline" size="lg" onClick={() => {
                const servicesSection = document.getElementById("services");
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}>
                View Services
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Hero;
