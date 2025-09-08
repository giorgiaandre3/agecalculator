import React from 'react';
import Icon from '../../../components/AppIcon';

const FunFactsSection = ({ ageData, isVisible }) => {
  if (!isVisible || !ageData) return null;

  const funFacts = [
    {
      icon: 'Heart',
      title: 'Heartbeats',
      value: (ageData?.totalDays * 100000)?.toLocaleString(),
      description: 'Approximate heartbeats in your lifetime',
      color: 'text-red-500',
      bgColor: 'bg-red-50'
    },
    {
      icon: 'Moon',
      title: 'Lunar Cycles',
      value: Math.floor(ageData?.totalDays / 29.5),
      description: 'Full moon cycles you\'ve witnessed',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: 'Zap',
      title: 'Hours Awake',
      value: Math.floor(ageData?.totalDays * 16)?.toLocaleString(),
      description: 'Estimated hours you\'ve been awake',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: 'Globe',
      title: 'Earth Rotations',
      value: ageData?.totalDays?.toLocaleString(),
      description: 'Times Earth has rotated since your birth',
      color: 'text-green-500',
      bgColor: 'bg-green-50'
    }
  ];

  return (
    <div className="fade-in-up fade-in-up-delay-3 mt-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">Fun Facts About Your Life 🌟</h2>
        <p className="text-muted-foreground">Some interesting statistics based on your age</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {funFacts?.map((fact, index) => (
          <div
            key={fact?.title}
            className={`bg-card rounded-xl p-6 shadow-md border border-border hover:shadow-lg transition-shadow duration-300 fade-in-up`}
            style={{ animationDelay: `${(index + 4) * 200}ms` }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className={`p-2 ${fact?.bgColor} rounded-lg`}>
                <Icon name={fact?.icon} size={20} className={fact?.color} />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{fact?.title}</h3>
            </div>
            <div className={`text-2xl font-bold ${fact?.color} mb-2`}>
              {fact?.value}
            </div>
            <p className="text-sm text-muted-foreground">{fact?.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FunFactsSection;