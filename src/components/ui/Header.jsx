import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    {
      name: 'Age Calculator',
      href: '/age-calculator-main',
      icon: 'Calculator'
    }
  ];

  const isActiveRoute = (href) => {
    return location?.pathname === href;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
              <Icon name="Calculator" size={20} color="white" />
            </div>
            <span className="font-bold text-xl text-foreground">AgeCalculator</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 ml-8">
          {navigationItems?.map((item) => (
            <Link
              key={item?.name}
              to={item?.href}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary hover:bg-muted ${
                isActiveRoute(item?.href)
                  ? 'text-primary bg-muted' :'text-muted-foreground'
              }`}
            >
              <Icon name={item?.icon} size={16} />
              <span>{item?.name}</span>
            </Link>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="ml-auto flex items-center space-x-4">
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              iconName="Github"
              iconPosition="left"
              onClick={() => window.open('https://github.com', '_blank')}
            >
              GitHub
            </Button>
            <Button
              variant="outline"
              size="sm"
              iconName="Share2"
              iconPosition="left"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: 'Age Calculator',
                    text: 'Calculate your age with precision',
                    url: window.location?.href
                  });
                }
              }}
            >
              Share
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={toggleMobileMenu}
            iconName={isMobileMenuOpen ? "X" : "Menu"}
          >
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container py-4 space-y-2">
            {navigationItems?.map((item) => (
              <Link
                key={item?.name}
                to={item?.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center space-x-3 px-3 py-3 rounded-md text-sm font-medium transition-colors hover:text-primary hover:bg-muted ${
                  isActiveRoute(item?.href)
                    ? 'text-primary bg-muted' :'text-muted-foreground'
                }`}
              >
                <Icon name={item?.icon} size={18} />
                <span>{item?.name}</span>
              </Link>
            ))}
            
            {/* Mobile Actions */}
            <div className="pt-4 border-t border-border space-y-2">
              <Button
                variant="ghost"
                size="sm"
                fullWidth
                iconName="Github"
                iconPosition="left"
                onClick={() => {
                  window.open('https://github.com', '_blank');
                  setIsMobileMenuOpen(false);
                }}
              >
                GitHub
              </Button>
              <Button
                variant="outline"
                size="sm"
                fullWidth
                iconName="Share2"
                iconPosition="left"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: 'Age Calculator',
                      text: 'Calculate your age with precision',
                      url: window.location?.href
                    });
                  }
                  setIsMobileMenuOpen(false);
                }}
              >
                Share
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;