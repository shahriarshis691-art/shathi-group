import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light' | 'monochrome';
}

export const CortexLogo: React.FC<LogoProps> = ({ 
  className = "h-9 w-auto", 
  variant = 'dark' 
}) => {
  const isLight = variant === 'light';
  const textColor = isLight ? '#FFFFFF' : '#0F172A';
  const subTextColor = isLight ? '#94A3B8' : '#64748B';
  const accentColor = '#2563EB';

  return (
    <svg
      viewBox="0 0 390 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g transform="translate(4, 4)">
        <polygon
          points="28,2 50,15 50,41 28,54 6,41 6,15"
          fill="none"
          stroke={isLight ? '#38BDF8' : '#2563EB'}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line x1="28" y1="2" x2="28" y2="28" stroke={isLight ? '#94A3B8' : '#0F172A'} strokeWidth="2" />
        <line x1="6" y1="41" x2="28" y2="28" stroke={isLight ? '#94A3B8' : '#0F172A'} strokeWidth="2" />
        <line x1="50" y1="41" x2="28" y2="28" stroke={isLight ? '#94A3B8' : '#0F172A'} strokeWidth="2" />
        <circle cx="28" cy="28" r="4.5" fill={accentColor} />
        <circle cx="28" cy="2" r="2.5" fill={isLight ? '#FFFFFF' : '#0F172A'} />
        <circle cx="50" cy="15" r="2.5" fill={accentColor} />
        <circle cx="50" cy="41" r="2.5" fill={isLight ? '#FFFFFF' : '#0F172A'} />
        <circle cx="28" cy="54" r="2.5" fill={accentColor} />
        <circle cx="6" cy="41" r="2.5" fill={isLight ? '#FFFFFF' : '#0F172A'} />
        <circle cx="6" cy="15" r="2.5" fill={accentColor} />
      </g>

      <text
        x="72"
        y="33"
        fill={textColor}
        fontFamily="var(--font-display), system-ui, sans-serif"
        fontSize="22"
        fontWeight="800"
        letterSpacing="0.18em"
      >
        CORTEXIO
      </text>

      <text
        x="73"
        y="49"
        fill={subTextColor}
        fontFamily="var(--font-display), system-ui, sans-serif"
        fontSize="8.5"
        fontWeight="600"
        letterSpacing="0.32em"
      >
        SOFTSOLUTIONS
      </text>
    </svg>
  );
};

export default CortexLogo;
