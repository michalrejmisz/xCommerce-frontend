import React, { ReactNode } from "react";

interface HoverCardProps {
    children: ReactNode;
    className?: string;
}

const HoverCard: React.FC<HoverCardProps> = ({ children, className }) => {
    return(
        <div className={`xl:hover:shadow-specific rounded-[8px] ${className}`}>
            {children}
        </div>
    )
}

export default HoverCard;