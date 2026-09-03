import type { ReactNode } from "react";

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
    
      <main>{children}</main>
    </>
  );
};
