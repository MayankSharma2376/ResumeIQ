import React from "react";

import type { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

function AuthLayout({ title, children }: Props) {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold">
          {title}
        </h1>

        {children}
      </div>
    </div>
  );
}

export default AuthLayout;