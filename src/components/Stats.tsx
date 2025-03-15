import React from 'react';

const Stats: React.FC = () => {
  const statsData = [
    { value: "$10M+", label: "Funds Raised" },
    { value: "$3M+", label: "Annual Revenue" },
    { value: "50+", label: "Projects Advised" },
    { value: "5", label: "Global Regions" },
  ];

  return (
    <div className="py-6 bg-gradient-to-b from-background/30 to-background -z-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">My Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold">{stat.value}</h3>
              <p className="text-gray-600 text-xl">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
