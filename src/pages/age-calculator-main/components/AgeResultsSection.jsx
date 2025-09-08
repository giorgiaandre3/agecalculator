import React, { useEffect, useState } from 'react';
import Icon from '../../../components/AppIcon';

const AgeResultsSection = ({ ageData, isVisible }) => {
  const [animatedValues, setAnimatedValues] = useState({
    years: 0,
    months: 0,
    days: 0,
    totalDays: 0
  });

  useEffect(() => {
    if (isVisible && ageData) {
      // Animate numbers counting up
      const duration = 1000; // 1 second
      const steps = 50;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setAnimatedValues({
          years: Math.floor(ageData?.years * progress),
          months: Math.floor(ageData?.months * progress),
          days: Math.floor(ageData?.days * progress),
          totalDays: Math.floor(ageData?.totalDays * progress)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
          setAnimatedValues({
            years: ageData?.years,
            months: ageData?.months,
            days: ageData?.days,
            totalDays: ageData?.totalDays
          });
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }
  }, [isVisible, ageData]);

  if (!isVisible || !ageData) return null;

  return (
    <div className="fade-in-up fade-in-up-delay-2">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">Your Age Results 🎉</h2>
        <p className="text-muted-foreground">Here's everything about your age!</p>
      </div>
      {/* Main Age Display */}
      <div className="bg-gradient-surface rounded-2xl p-8 shadow-xl border border-border mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="space-y-2">
            <div className="text-5xl md:text-6xl font-bold text-primary count-up">
              {animatedValues?.years?.toLocaleString()}
            </div>
            <div className="text-lg font-medium text-muted-foreground">Years</div>
          </div>
          <div className="space-y-2">
            <div className="text-5xl md:text-6xl font-bold text-secondary count-up">
              {animatedValues?.months}
            </div>
            <div className="text-lg font-medium text-muted-foreground">Months</div>
          </div>
          <div className="space-y-2">
            <div className="text-5xl md:text-6xl font-bold text-accent count-up">
              {animatedValues?.days}
            </div>
            <div className="text-lg font-medium text-muted-foreground">Days</div>
          </div>
        </div>
      </div>
      {/* Additional Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Total Days Lived */}
        <div className="bg-card rounded-xl p-6 shadow-md border border-border">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-success/10 rounded-lg">
              <Icon name="Clock" size={20} color="var(--color-success)" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Days Lived</h3>
          </div>
          <div className="text-3xl font-bold text-success count-up">
            {animatedValues?.totalDays?.toLocaleString()}
          </div>
          <p className="text-sm text-muted-foreground mt-2">Total days you've been alive</p>
        </div>

        {/* Birth Day of Week */}
        <div className="bg-card rounded-xl p-6 shadow-md border border-border">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-warning/10 rounded-lg">
              <Icon name="Star" size={20} color="var(--color-warning)" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Birth Day</h3>
          </div>
          <div className="text-2xl font-bold text-warning">
            {ageData?.birthDayOfWeek}
          </div>
          <p className="text-sm text-muted-foreground mt-2">Day of the week you were born</p>
        </div>
      </div>
    </div>
  );
};

export default AgeResultsSection;