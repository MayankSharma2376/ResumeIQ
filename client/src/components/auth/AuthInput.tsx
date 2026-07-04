type Props = React.InputHTMLAttributes<HTMLInputElement>;

export default function AuthInput({
  className = "",
  ...props
}: Props) {
  return (
    <input
      {...props}
      className={`w-full rounded-xl border border-white/10 bg-[#111827] px-4 py-3 text-white outline-none transition-all focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 ${className}`}
    />
  );
}