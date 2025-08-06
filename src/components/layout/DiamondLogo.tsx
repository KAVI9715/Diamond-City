export const DiamondLogo = ({ width = 56, height = 56, className }: { width?: number; height?: number; className?: string }) => (
    <svg 
        width={width} 
        height={height} 
        viewBox="0 0 100 100" 
        className={className} 
        xmlns="http://www.w3.org/2000/svg"
    >
        <g>
            {/* Diamond shape */}
            <path 
                d="M50 5 L10 40 L50 95 L90 40 Z" 
                fill="none" 
                stroke="#FF4136" 
                strokeWidth="4" 
            />
            <path 
                d="M10 40 L90 40" 
                stroke="#FF4136" 
                strokeWidth="4" 
            />
            <path 
                d="M50 5 L30 40 L50 95 L70 40 Z" 
                fill="none" 
                stroke="#FF4136" 
                strokeWidth="2"
            />
             <path 
                d="M30 40 L70 40" 
                stroke="#FF4136" 
                strokeWidth="2"
            />
            <path
                d="M50 5 L10 40"
                stroke="#FF4136"
                strokeWidth="2"
            />
             <path
                d="M50 5 L90 40"
                stroke="#FF4136"
                strokeWidth="2"
            />

            {/* "Diamond" Text */}
            <text 
                x="50" 
                y="65" 
                fontFamily="cursive, serif" 
                fontSize="20" 
                fill="#004d40" 
                textAnchor="middle" 
                transform="rotate(-10 50 60)"
            >
                Diamond
            </text>
            
            {/* "CITY" Text */}
            <text 
                x="75" 
                y="78" 
                fontFamily="sans-serif" 
                fontSize="8" 
                fill="#004d40" 
                textAnchor="middle"
            >
                CITY
            </text>

             {/* Swash */}
            <path 
                d="M15,55 Q50,40 85,60" 
                stroke="#004d40" 
                strokeWidth="2.5" 
                fill="none" 
            />
             <path 
                d="M18,53 Q30,65 10,75" 
                stroke="#004d40" 
                strokeWidth="2.5" 
                fill="none" 
            />
        </g>
    </svg>
);
