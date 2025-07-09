interface BenzeneLogoProps {
  size?: number;
  className?: string;
}

export default function BenzeneLogo({ size = 24, className = "" }: BenzeneLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer hexagon ring */}
      <path
        d="M50 10 L78.66 25 L78.66 55 L50 70 L21.34 55 L21.34 25 Z"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Inner circle representing delocalized electrons */}
      <circle
        cx="50"
        cy="40"
        r="15"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      
      {/* Carbon atoms at vertices */}
      <circle cx="50" cy="10" r="2" fill="currentColor" />
      <circle cx="78.66" cy="25" r="2" fill="currentColor" />
      <circle cx="78.66" cy="55" r="2" fill="currentColor" />
      <circle cx="50" cy="70" r="2" fill="currentColor" />
      <circle cx="21.34" cy="55" r="2" fill="currentColor" />
      <circle cx="21.34" cy="25" r="2" fill="currentColor" />
    </svg>
  );
}