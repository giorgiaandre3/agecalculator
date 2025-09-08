import React from 'react';

const HeroSection = () => {
  return (
    <div className="text-center mb-12 fade-in-up">
      <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 bg-gradient-primary bg-clip-text text-transparent">
        Age Calculator
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        Calculate your exact age in years, months, and days. Discover fascinating facts about your birthday and see how many days you've been alive! 🎂
      </p>
    </div>
  );
};

export default HeroSection;