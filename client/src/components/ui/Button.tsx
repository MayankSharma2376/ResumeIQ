import React from "react";
interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

function Button({
  children,
  loading,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={loading}
      className="w-full rounded-lg bg-blue-600 px-4 py-3 text-white font-semibold hover:bg-blue-700 disabled:opacity-50"
    >
      {loading ? "Please wait..." : children}
    </button>
  );
}

export default Button;