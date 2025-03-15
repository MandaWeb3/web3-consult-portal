
import React from 'react';
import { Reveal } from './animations/Reveal';
import { Link, Code, Database, Globe, MessageSquareCode, FileCode, Wallet, ChartBarIncreasing, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/Button';

interface ServiceCardProps {
  title: string;
  description: string;
  bulletPoints?: string[];
  icon: React.ReactNode;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, bulletPoints, icon, index }) => {
  return (
    <Reveal delay={index * 100}>
      <div className="group relative p-8 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl bg-white border border-gray-100 h-full">
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-web3-primary to-web3-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        <div className="mb-6 p-3 rounded-lg inline-block bg-primary/5 text-primary">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-foreground/70 mb-2">{description}</p>
        {bulletPoints && (
          <ul className="text-foreground/70 list-disc list-inside">
            {bulletPoints.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        )}
      </div>
    </Reveal>
  );
};

const About2: React.FC = () => {
  const services = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Advisory",
      description: "Strategic guidance across Singapore, Malaysia, UAE, Saudi Arabia, and China",
      bulletPoints: [
        "Market Entry Strategy",
        "Regional Partnerships",
        "Regulatory Compliance",
      ],
    },
    {
      icon: <Wallet className="h-6 w-6" />,
      title: "Fundraising Expert",
      description: "Secured over $10M+ in funding for Web3 projects",
      bulletPoints: [
        "Venture Capital",
        "Strategic Investors",
        "Token Economics"
      ],
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Revenue Generation",
      description: "Generated $3M+ in Annual Recurring Revenue",
      bulletPoints: [
        "Business Development",
        "Growth Strategy",
        "Revenue Optimization"
      ]
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Advisory",
      description: "Strategic guidance across Singapore, Malaysia, UAE, Saudi Arabia, and China",
      bulletPoints: [
        "Market Entry Strategy",
        "Regional Partnerships",
        "Regulatory Compliance"
      ],
    },
    {
      icon: <Wallet className="h-6 w-6" />,
      title: "Fundraising Expert",
      description: "Secured over $10M+ in funding for Web3 projects",
      bulletPoints: [
        "Venture Capital",
        "Strategic Investors",
        "Token Economics"
      ],
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Revenue Generation",
      description: "Generated $3M+ in Annual Recurring Revenue",
      bulletPoints: [
        "Business Development",
        "Growth Strategy",
        "Revenue Optimization"
      ]
    }
  ];

  return (
    <section id="about2" className="py-20 md:py-32 bg-gradient-to-b from-white/50 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              My <span className="text-gradient">Expertise</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-2xl text-foreground/80">
              Comprehensive solutions for businesses looking to leverage blockchain and AI technologies
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              index={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              bulletPoints={service.bulletPoints}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About2;

// Import Brain icon
function Brain({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={cn("lucide lucide-brain", className)}
    >
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5V5a2 2 0 0 0 2 2h.5A2.5 2.5 0 0 1 17 9.5a2.5 2.5 0 0 1 2.5 2.5.5.5 0 0 1-.5.5h-.5a2 2 0 0 0-2 2v.5a2.5 2.5 0 0 1-2.5 2.5 2.5 2.5 0 0 1-2.5-2.5.5.5 0 0 0-.5-.5 2 2 0 0 1-2-2v-.5A2.5 2.5 0 0 0 6.5 9.5a2.5 2.5 0 0 0-2.5 2.5A.5.5 0 0 1 3.5 12a2.5 2.5 0 0 1-2.5-2.5v-2A4.5 4.5 0 0 1 5.5 3H6a2 2 0 0 0 2-2 .5.5 0 0 1 .5-.5H9Z" />
      <path d="M17 12a5 5 0 0 0-10 0" />
      <path d="M12 17a5 5 0 0 0 0-10" />
    </svg>
  );
}
