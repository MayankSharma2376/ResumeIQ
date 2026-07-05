import type { ReactNode } from "react";
import BackgroundEffects from "./BackgroundEffects";

type Props = {
  children: ReactNode;
};

export default function AuthLayout({ children }: Props) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0B1120] text-white">
      <BackgroundEffects />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        {children}
      </div>
    </div>
  );
}