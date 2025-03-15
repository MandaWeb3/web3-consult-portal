import React from 'react';
import { Reveal } from './animations/Reveal';

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
    "title": "Partner",
    "description": "Self-employed Partner at DualX.",
    "iconSrc": "https://media.licdn.com/dms/image/v2/D4D0BAQE6J7sKTkomxQ/company-logo_100_100/company-logo_100_100/0/1728993671848?e=1750291200&v=beta&t=r_zcCKvN5UYm298AfE1Apz9jaje5QTNF1iGBDPa9w_k",
    "date": "Apr 2024 - Present",
    "location": "Dubai, United Arab Emirates (Hybrid)",
    "responsibilities": []
  },
  {
    "title": "Investment Advisor & Due Dilligence Partner",
    "description": "Contract role at X+ DeGods focusing on investment advisory and due diligence.",
    "iconSrc": "https://media.licdn.com/dms/image/v2/D560BAQFRaSAExQcuOQ/company-logo_100_100/company-logo_100_100/0/1713962960469?e=1750291200&v=beta&t=fUHbyi9MfRIRlM9o4p-LOunMMEs-QlikSUVUhTEB5KI",
    "date": "Dec 2023 - Present",
    "location": "United States (Hybrid)",
    "responsibilities": []
  },
  {
    "title": "Web3 & Blockchain Advisor",
    "description": "Contract role at Agile Dynamics, advising on Web3 and blockchain strategies.",
    "iconSrc": "https://media.licdn.com/dms/image/v2/C510BAQGe1XdlhjSHtA/company-logo_100_100/company-logo_100_100/0/1630633611205?e=1750291200&v=beta&t=nVNfqGqVDG7bQM-62Kn1aUdfsp9_YRQ1HULBZntbK2E",
    "date": "Feb 2023 - Present",
    "location": "United Arab Emirates (Hybrid)",
    "responsibilities": []
  },
  {
    "title": "Early Investor (Token presale)",
    "description": "Self-employed role at Sui Foundation, focused on early token presale investments.",
    "iconSrc": "https://media.licdn.com/dms/image/v2/D560BAQH-kGicb7yiEw/company-logo_100_100/B56ZUqxmQhHsAU-/0/1740179400257/sui_foundation_logo?e=1750291200&v=beta&t=bRcklO408mE1LzGFElBpMXf3I-lRwcOtNixkps5L3Dw",
    "date": "Apr 2023 - Present",
    "location": "",
    "responsibilities": []
  },
  {
    "title": "Polkadot Ambassador Rank 3",
    "description": "Freelance role contributing to community development and fundraising for Polkadot.",
    "iconSrc": "https://media.licdn.com/dms/image/v2/D4D0BAQEkcIEucZykkg/company-logo_100_100/company-logo_100_100/0/1723578362980/polkadot_network_logo?e=1750291200&v=beta&t=sUnZ-kPXE0B2S2EqOMW804JM9KOv5Obntj049liPM70",
    "date": "Jan 2025 - Present",
    "location": "Serbia (Hybrid)",
    "responsibilities": []
  },
  {
    "title": "Polkadot Ambassador Fellowship",
    "description": "Freelance role as part of the Polkadot Ambassador Fellowship, focusing on business development and technical leadership.",
    "iconSrc": "https://media.licdn.com/dms/image/v2/D4D0BAQEkcIEucZykkg/company-logo_100_100/company-logo_100_100/0/1723578362980/polkadot_network_logo?e=1750291200&v=beta&t=sUnZ-kPXE0B2S2EqOMW804JM9KOv5Obntj049liPM70",
    "date": "Nov 2024 - Present",
    "location": "Europe (Remote)",
    "responsibilities": []
  },
  {
    "title": "Polkadot Ecosystem Contributor",
    "description": "Self-employed role contributing to the growth and development of the Polkadot ecosystem.",
    "iconSrc": "https://media.licdn.com/dms/image/v2/D4D0BAQEkcIEucZykkg/company-logo_100_100/company-logo_100_100/0/1723578362980/polkadot_network_logo?e=1750291200&v=beta&t=sUnZ-kPXE0B2S2EqOMW804JM9KOv5Obntj049liPM70",
    "date": "Sep 2021 - Present",
    "location": "Serbia (Remote)",
    "responsibilities": []
  },
  {
    "title": "Senior Business Development Consultant",
    "description": "Contract role at Parasail focusing on sales management, business development, and strategic consulting.",
    "iconSrc": "https://media.licdn.com/dms/image/v2/D560BAQEwQAPcNuMTZg/company-logo_100_100/company-logo_100_100/0/1719297938319?e=1750291200&v=beta&t=0g21rQGadhTA5qr6C4PeI_CQFyzcCrCakklRLF3pyDw",
    "date": "Mar 2024 - Present",
    "location": "Singapore (Remote)",
    "responsibilities": []
  },
  {
    "title": "Limited Partner",
    "description": "Self-employed role at Blacknode Investments focusing on fundraising, investments, and product analysis.",
    "iconSrc": "https://placehold.co/50?text=BlacknodeInvestments",
    "date": "Jun 2023 - Present",
    "location": "Dubai, United Arab Emirates (Remote)",
    "responsibilities": []
  },
  {
    "title": "Advisory Board Chairman",
    "description": "Self-employed role as Advisory Board Chairman at Web3 Balkan, focusing on digital strategy and blockchain consulting.",
    "iconSrc": "https://media.licdn.com/dms/image/v2/D4D0BAQFwP7AFwhz-sw/company-logo_100_100/company-logo_100_100/0/1738692891463?e=1750291200&v=beta&t=rPbH4xixUQY-9FHS62obWbBqTOblNIW3Yq8KpjpzMAY",
    "date": "Jan 2023 - Present",
    "location": "Balkan (Hybrid)",
    "responsibilities": []
  },
  {
    "title": "Founder & CEO",
    "description": "Founded and led an organization with a focus on Web3, community development, and education.",
    "iconSrc": "https://media.licdn.com/dms/image/v2/D4D0BAQFwP7AFwhz-sw/company-logo_100_100/company-logo_100_100/0/1738692891463?e=1750291200&v=beta&t=rPbH4xixUQY-9FHS62obWbBqTOblNIW3Yq8KpjpzMAY",
    "date": "Jan 2020 - Jan 2023",
    "location": "",
    "responsibilities": []
  },
  {
    "title": "Chief Commercial Officer (CCO)",
    "description": "Full-time role at MVP Workshop driving business growth through partnerships, market research, and analysis in the Web3 space.",
    "iconSrc": "https://media.licdn.com/dms/image/v2/C4E0BAQF8J8xPJ-VQog/company-logo_100_100/company-logo_100_100/0/1648537299385?e=1750291200&v=beta&t=8B2BPFGODnk9iYMGML0OjDllD6TBF_yQ8dQuyZ8Ot2s",
    "date": "Jan 2023 - Jan 2025",
    "location": "Belgrade, Serbia (On-site)",
    "responsibilities": [
      "• Drive business growth in the Web3 space through developing partnerships, identifying new business opportunities and managing relationships with key stakeholders.",
      "• Conduct market research and analysis to stay up-to-date on industry trends, competitor activity, and customer needs."
    ]
  },
  {
    "title": "Partnerships/Account Manager",
    "description": "Full-time role at Gear Technologies focused on driving business development and managing strategic partnerships.",
    "iconSrc": "https://media.licdn.com/dms/image/v2/D4D0BAQE6Vopl1-ygYA/company-logo_100_100/company-logo_100_100/0/1732121282223/geartechnologies_logo?e=1750291200&v=beta&t=jNcGNh2G_8JCcw3rEqz6v1El17xuetpnJcJNgOGEZPw",
    "date": "Jan 2024 - Nov 2024",
    "location": "Wilmington, Delaware, United States (Remote)",
    "responsibilities": []
  },
  {
    "title": "Business Development Specialist",
    "description": "Full-time role at We3 focusing on business-to-business development, sales, and strategic consulting.",
    "iconSrc": "https://media.licdn.com/dms/image/v2/C4D0BAQFt0P-n4M-JGw/company-logo_100_100/company-logo_100_100/0/1668257901130/we3talent_logo?e=1750291200&v=beta&t=2e2LCnUZPFRjTbTPNZNRueAK4xI5DlygFboPNtEHb3k",
    "date": "Mar 2020 - Sep 2023",
    "location": "",
    "responsibilities": []
  },
  {
    "title": "Community Manager & Co-Founder",
    "description": "Self-employed role at SolSquatters, serving as community manager and founding team member of a Solana-based NFT collection.",
    "iconSrc": "https://placehold.co/50?text=SolSquatters",
    "date": "Jun 2020 - Nov 2022",
    "location": "",
    "responsibilities": []
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
