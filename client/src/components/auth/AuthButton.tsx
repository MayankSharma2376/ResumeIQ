import { Loader2 } from "lucide-react";

type Props = {
  children: React.ReactNode;
  loading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function AuthButton({
  children,
  loading,
  ...props
}: Props) {
  return (
    <button
      {...props}
      disabled={loading}
      className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(139,92,246,0.45)] disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {loading ? (
        <span className="flex items-center justify-center gap-2">
          <Loader2 className="animate-spin" size={18} />
          Please wait...
        </span>
      ) : (
        children
      )}
    </button>
  );
}