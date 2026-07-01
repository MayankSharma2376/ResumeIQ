type Props = {
  title: string;
  children: React.ReactNode;
};

export default function GlassCard({
  title,
  children,
}: Props) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur-xl p-6 shadow-lg transition-all duration-300 hover:border-violet-500/40 hover:shadow-violet-500/10">

      <h2 className="mb-5 text-xl font-semibold">
        {title}
      </h2>

      {children}

    </div>
  );
}