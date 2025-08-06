export const DiamondLogo = ({ width = 45, height = 56, className }: { width?: number; height?: number; className?: string }) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M32 4L12 24L32 60L52 24L32 4Z"
            stroke="gold"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M12 24H52"
            stroke="gold"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M32 60V24"
            stroke="gold"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M22 24L32 4L42 24"
            stroke="gold"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);
