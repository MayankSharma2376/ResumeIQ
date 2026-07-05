import  type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function AuthCard({ children }: Props) {
  return (
    <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_60px_rgba(139,92,246,0.15)] p-10">
      {children}
    </div>
  );
}