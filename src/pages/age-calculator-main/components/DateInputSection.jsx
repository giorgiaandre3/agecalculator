import React from 'react';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const DateInputSection = ({ birthDate, setBirthDate, onCalculate, isCalculating }) => {
  const handleDateChange = (e) => {
    setBirthDate(e?.target?.value);
  };

  const getTodayDate = () => {
    const today = new Date();
    return today?.toISOString()?.split('T')?.[0];
  };

  return (
    <div className="bg-card rounded-2xl p-8 shadow-lg border border-border mb-8 fade-in-up fade-in-up-delay-1">
      <div className="flex items-center justify-center mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-gradient-primary rounded-full">
            <Icon name="Calendar" size={24} color="white" />
          </div>
          <h2 className="text-2xl font-semibold text-foreground">Select Your Birth Date</h2>
        </div>
      </div>
      
      <div className="max-w-md mx-auto space-y-6">
        <Input
          type="date"
          label="Birth Date"
          value={birthDate}
          onChange={handleDateChange}
          max={getTodayDate()}
          required
          className="text-center"
          description="Choose the date you were born"
        />
        
        <Button
          variant="default"
          size="lg"
          fullWidth
          onClick={onCalculate}
          loading={isCalculating}
          disabled={!birthDate}
          className="bg-gradient-primary hover-glow micro-press text-white font-semibold py-4 text-lg"
          iconName="Calculator"
          iconPosition="left"
        >
          {isCalculating ? 'Calculating...' : 'Calculate My Age'}
        </Button>
      </div>
    </div>
  );
};

export default DateInputSection;