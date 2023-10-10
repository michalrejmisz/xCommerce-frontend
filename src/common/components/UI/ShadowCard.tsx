import React, { ReactNode } from "react";

interface ShadowCardProps {
  children: ReactNode;
  className?: string;
}

const ShadowCard: React.FC<ShadowCardProps> = ({ children, className }) => {
  return <div className={`shadow-custom ${className}`}>{children}</div>;
};

export default ShadowCard;
