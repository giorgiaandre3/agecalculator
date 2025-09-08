import React, { useState } from 'react';
import { format, differenceInYears, differenceInMonths, differenceInDays, addYears } from 'date-fns';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import DateInputSection from './components/DateInputSection';
import AgeResultsSection from './components/AgeResultsSection';
import NextBirthdaySection from './components/NextBirthdaySection';
import FunFactsSection from './components/FunFactsSection';
import FooterSection from './components/FooterSection';
import AdContainer from './components/AdContainer';

const AgeCalculatorMain = () => {
  const [birthDate, setBirthDate] = useState('');
  const [ageData, setAgeData] = useState(null);
  const [nextBirthdayData, setNextBirthdayData] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const calculateAge = async () => {
    if (!birthDate) return;

    setIsCalculating(true);
    setShowResults(false);

    // Simulate calculation delay for better UX
    await new Promise(resolve => setTimeout(resolve, 800));

    try {
      const birth = new Date(birthDate);
      const today = new Date();

      // Validate date
      if (birth > today) {
        alert('Birth date cannot be in the future!');
        setIsCalculating(false);
        return;
      }

      // Calculate age components
      const years = differenceInYears(today, birth);
      const months = differenceInMonths(today, birth) % 12;
      const days = differenceInDays(today, new Date(today.getFullYear(), today.getMonth(), birth.getDate()));
      
      // Adjust days if negative
      let adjustedDays = days;
      if (days < 0) {
        const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, birth.getDate());
        adjustedDays = differenceInDays(today, lastMonth);
      }

      // Calculate total days lived
      const totalDays = differenceInDays(today, birth);

      // Get birth day of week
      const birthDayOfWeek = format(birth, 'EEEE');

      // Calculate next birthday
      let nextBirthday = new Date(today.getFullYear(), birth.getMonth(), birth.getDate());
      if (nextBirthday < today) {
        nextBirthday = addYears(nextBirthday, 1);
      }

      const monthsToNextBirthday = differenceInMonths(nextBirthday, today);
      const daysToNextBirthday = differenceInDays(nextBirthday, today) % 30;
      const nextBirthdayDayOfWeek = format(nextBirthday, 'EEEE');
      const nextBirthdayDate = format(nextBirthday, 'MMMM do, yyyy');

      setAgeData({
        years,
        months: Math.abs(months),
        days: Math.abs(adjustedDays),
        totalDays,
        birthDayOfWeek
      });

      setNextBirthdayData({
        months: monthsToNextBirthday,
        days: daysToNextBirthday,
        dayOfWeek: nextBirthdayDayOfWeek,
        date: nextBirthdayDate
      });

      setShowResults(true);
    } catch (error) {
      console.error('Error calculating age:', error);
      alert('Error calculating age. Please try again.');
    } finally {
      setIsCalculating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-surface">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <HeroSection />
        
        {/* Top Ad - After Hero Section */}
        <div className="mb-8">
          <AdContainer 
            id="ad-top-banner" 
            size="large" 
            position="center"
            className="fade-in-up"
            ariaLabel="Top Banner Advertisement"
          />
        </div>
        
        <DateInputSection
          birthDate={birthDate}
          setBirthDate={setBirthDate}
          onCalculate={calculateAge}
          isCalculating={isCalculating}
        />
        
        <AgeResultsSection
          ageData={ageData}
          isVisible={showResults}
        />
        
        {/* Middle Ad - After Age Results */}
        {showResults && (
          <div className="my-8">
            <AdContainer 
              id="ad-middle-banner" 
              size="medium" 
              position="center"
              className="fade-in-up fade-in-up-delay-3"
              ariaLabel="Middle Banner Advertisement"
            />
          </div>
        )}
        
        <NextBirthdaySection
          nextBirthdayData={nextBirthdayData}
          isVisible={showResults}
        />
        
        <FunFactsSection
          ageData={ageData}
          isVisible={showResults}
        />
        
        {/* Bottom Ad - Before Footer */}
        {showResults && (
          <div className="mt-8 mb-4">
            <AdContainer 
              id="ad-bottom-banner" 
              size="large" 
              position="center"
              className="fade-in-up fade-in-up-delay-4"
              ariaLabel="Bottom Banner Advertisement"
            />
          </div>
        )}
      </main>
      
      <FooterSection />
    </div>
  );
};

export default AgeCalculatorMain;