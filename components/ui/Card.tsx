import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  clickable?: boolean;
};

export default function Card({
  children,
  className = "",
  clickable = false,
}: CardProps) {
  return (
    <div
      className={`
        bg-white
        rounded-2xl
        shadow
        ${clickable ? "transition active:scale-95" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
