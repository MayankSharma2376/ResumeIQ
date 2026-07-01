import React from "react";

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function Input({ label, ...props }: InputProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">
        {label}
      </label>

      <input
        {...props}
        className="w-full rounded-lg border p-3 outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default Input;