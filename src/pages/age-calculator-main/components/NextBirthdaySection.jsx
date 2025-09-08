import React from 'react';
import Icon from '../../../components/AppIcon';

const NextBirthdaySection = ({ nextBirthdayData, isVisible }) => {
  if (!isVisible || !nextBirthdayData) return null;

  return (
    <div className="fade-in-up fade-in-up-delay-3 mt-8">
      <div className="bg-gradient-primary rounded-2xl p-8 text-white shadow-xl">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Icon name="Gift" size={32} color="white" />
            <h2 className="text-2xl font-bold">Next Birthday Countdown</h2>
            <Icon name="PartyPopper" size={32} color="white" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold animate-breathe">
              {nextBirthdayData?.months}
            </div>
            <div className="text-lg opacity-90">Months</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold animate-breathe">
              {nextBirthdayData?.days}
            </div>
            <div className="text-lg opacity-90">Days</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold animate-breathe">
              {nextBirthdayData?.dayOfWeek}
            </div>
            <div className="text-lg opacity-90">Day of Week</div>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-lg opacity-90">
            Your next birthday is on <span className="font-bold">{nextBirthdayData?.date}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NextBirthdaySection;