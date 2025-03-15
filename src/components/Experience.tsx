import React from 'react';
import { Reveal } from './animations/Reveal';
import { cn } from '@/lib/utils';
import { Button } from './ui/Button';

interface ExperienceCardProps {
  title: string;
  description: string;
  iconSrc: string;
  date: string;
  location: string; // Added location property
  responsibilities: string[];
}

const experiences: ExperienceCardProps[] = [
  {
    title: "Business Advisor - DualX",
    description: "Leading Web3 initiatives across multiple regions, focusing on strategic partnerships and ecosystem growth.",
    iconSrc: "https://media.licdn.com/dms/image/v2/D4D0BAQEkcIEucZykkg/company-logo_100_100/company-logo_100_100/0/1723578362980/polkadot_network_logo?e=1750291200&v=beta&t=sUnZ-kPXE0B2S2EqOMW804JM9KOv5Obntj049liPM70",
    date: "2023 - Present",
    location: "Remote", // Added location
    responsibilities: [
      "• Developed go-to-market strategies for blockchain products",
      "• Established partnerships with key industry players",
      "• Advised on token economics and governance structures"
    ]
  },
  {
    title: "Strategic Advisor - Blockchain Ecosystems",
    description: "Advised major blockchain networks including Polkadot, Ethereum, and Polygon on ecosystem development.",
    iconSrc: "https://media.licdn.com/dms/image/v2/D4D0BAQEkcIEucZykkg/company-logo_100_100/company-logo_100_100/0/1723578362980/polkadot_network_logo?e=1750291200&v=beta&t=sUnZ-kPXE0B2S2EqOMW804JM9KOv5Obntj049liPM70",
    date: "2022 - 2023",
    location: "Global", // Added location
    responsibilities: [
      "• Scaled infrastructure projects",
      "• Facilitated strategic partnerships",
      "• Guided technical implementation"
    ]
  }
];

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, description, iconSrc, date, location, responsibilities }) => {
  return (
    <div className="relative pl-8 border-l-2 border-blue-400">
      <div className="absolute w-4 h-4 bg-blue-400 rounded-full -left-[9px] top-0"></div>
      <div className="mb-1 text-blue-400 text-lg">{date} | {location}</div> {/* Displaying location */}
      <div className="flex items-center mb-2">
        <img src={iconSrc} alt={`${title} Logo`} className="h-10 mr-2" />
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-400 mb-4 text-lg">{description}</p>
      <ul className="text-gray-400 space-y-2">
        {responsibilities.map((item, index) => (
          <li key={index} className="text-lg">{item}</li>
        ))}
      </ul>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experiences" className="py-20 md:py-32 bg-gradient-to-b from-white/50 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Professional Journey</h2>
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <Reveal key={index}>
                <ExperienceCard {...experience} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
