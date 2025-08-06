import Image from 'next/image';

export const DiamondLogo = ({ width = 45, height = 56, className }: { width?: number; height?: number; className?: string }) => (
    <Image 
        src="https://6000-firebase-studio-1754287762762.cluster-isls3qj2gbd5qs4jkjqvhahfv6.cloudworkstations.dev/capra/attachedImages/9412cad3-dba1-4f0c-8f94-f3e0e7db9bd1/image_64a37749-6ce1-49c1-ab5b-d630f3020463.png" 
        alt="Diamond City Logo" 
        width={width} 
        height={height} 
        className={className} 
    />
);
