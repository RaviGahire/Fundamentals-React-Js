import type { ReactNode } from "react";

type BtnProps = {
  title: string;
  icon?: ReactNode;
  style?: string;
  onClick?: () => void;
};

export const Button = ({ title, icon, style, onClick }: BtnProps) => {
 

  return (
    <button
      onClick={onClick}
      className={`font-semibold text-[14px] md:text-base capitalize tracking-tight px-4 border border-white/50 w-45 py-2.5 inline-flex items-center justify-center gap-1.5 
     rounded-xl shadow-inner shadow-[#7732B0] cursor-pointer active:scale-95 transition-transform duration-200 ease-linear text-white ${style} `}
    >
      <span>{icon}</span>
      <span>{title}</span>
    </button>
  );
};
