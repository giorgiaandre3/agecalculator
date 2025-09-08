import React from 'react';

const AdContainer = ({ 
  id = 'ad-container', 
  size = 'medium', 
  position = 'center',
  className = '',
  ariaLabel = 'Advertisement'
}) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'w-full max-w-xs h-24'; // Mobile banner size
      case 'medium':
        return 'w-full max-w-lg h-32 md:h-40'; // Standard banner
      case 'large':
        return 'w-full max-w-2xl h-40 md:h-48'; // Large banner
      case 'sidebar':
        return 'w-full max-w-xs h-96'; // Sidebar/skyscraper
      case 'square':
        return 'w-full max-w-sm aspect-square'; // Square ad
      default:
        return 'w-full max-w-lg h-32 md:h-40';
    }
  };

  const getPositionClasses = () => {
    switch (position) {
      case 'left':
        return 'mx-0 mr-auto';
      case 'right':
        return 'mx-0 ml-auto';
      case 'center':
      default:
        return 'mx-auto';
    }
  };

  return (
    <div 
      id={id}
      className={`ad-container bg-muted/30 border-2 border-dashed border-muted/50 rounded-lg flex items-center justify-center ${getSizeClasses()} ${getPositionClasses()} ${className}`}
      role="banner"
      aria-label={ariaLabel}
    >
      <div className="text-center space-y-1">
        <div className="text-muted-foreground/60 text-sm font-medium">
          Advertisement
        </div>
        <div className="text-xs text-muted-foreground/40">
          {size} - {id}
        </div>
      </div>
    </div>
  );
};

export default AdContainer;