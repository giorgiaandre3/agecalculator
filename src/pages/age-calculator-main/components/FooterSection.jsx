import React from 'react';
import Icon from '../../../components/AppIcon';

const FooterSection = () => {
  const currentYear = new Date()?.getFullYear();

  return (
    <footer className="mt-16 py-8 border-t border-border bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
              <Icon name="Calculator" size={20} color="white" />
            </div>
            <span className="font-bold text-xl text-foreground">AgeCalculator</span>
          </div>
          
          <p className="text-muted-foreground max-w-md mx-auto">
            Calculate your age with precision and discover fascinating facts about your life journey. 
            Simple, accurate, and fun! ✨
          </p>
          
          <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
            <span>Made with ❤️ for curious minds</span>
            <span>•</span>
            <span>© {currentYear} AgeCalculator</span>
          </div>
          
          <div className="flex items-center justify-center space-x-4 pt-4">
            <button className="p-2 rounded-full hover:bg-muted transition-colors">
              <Icon name="Github" size={20} className="text-muted-foreground hover:text-foreground" />
            </button>
            <button className="p-2 rounded-full hover:bg-muted transition-colors">
              <Icon name="Twitter" size={20} className="text-muted-foreground hover:text-foreground" />
            </button>
            <button className="p-2 rounded-full hover:bg-muted transition-colors">
              <Icon name="Share2" size={20} className="text-muted-foreground hover:text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;