
import React from 'react';
import { Reveal } from './animations/Reveal';
import { Shield, Cpu, Brain, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-background to-white/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              About My <span className="text-gradient">Expertise</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-lg text-foreground/80">
              With years of experience in blockchain development and artificial intelligence, I help businesses implement cutting-edge technologies to gain competitive advantages.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <Reveal>
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold">Blockchain Pioneer & AI Strategist</h3>
                <p className="text-foreground/80">
                  I've spent the last decade at the intersection of blockchain and artificial intelligence, helping organizations navigate the complexities of these transformative technologies.
                </p>
                <p className="text-foreground/80">
                  My approach combines deep technical knowledge with strategic business thinking, ensuring solutions that not only leverage cutting-edge technology but also align with your business objectives.
                </p>
                
                <div className="grid grid-cols-2 gap-y-8 gap-x-4 pt-6">
                  {[
                    { icon: <Shield className="h-6 w-6 text-web3-primary" />, title: "Security Focused" },
                    { icon: <Cpu className="h-6 w-6 text-web3-accent" />, title: "Web3 Development" },
                    { icon: <Brain className="h-6 w-6 text-web3-primary" />, title: "AI Integration" },
                    { icon: <Zap className="h-6 w-6 text-web3-accent" />, title: "Performance" }
                  ].map((item, index) => (
                    <Reveal key={index} delay={index * 100}>
                      <div className="flex items-center space-x-3">
                        {item.icon}
                        <span className="font-medium">{item.title}</span>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
          
          <div className="order-1 md:order-2">
            <Reveal direction="left">
              <div className="relative">
                <div className="aspect-square bg-gradient-to-tr from-web3-primary to-web3-accent rounded-2xl overflow-hidden shadow-lg animate-float">
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-sm p-8 flex items-center justify-center">
                    <div className="glass-card p-6 rounded-xl max-w-xs text-center">
                      <h4 className="text-xl font-bold mb-3 text-white">Trusted by Industry Leaders</h4>
                      <p className="text-white/90 text-sm">
                        Helping companies build groundbreaking blockchain and AI solutions since 2015.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-2/3 aspect-square bg-gradient-glass rounded-2xl border border-white/20 backdrop-blur-xl shadow-xl -z-10" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
