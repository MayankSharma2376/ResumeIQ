import { UploadCloud } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
  name: string;
};

export default function HeroSection({ name }: Props) {
  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 17
      ? "Good Afternoon"
      : "Good Evening";

  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-3xl border border-violet-500/20 bg-gradient-to-r from-violet-700 via-indigo-700 to-slate-900 p-8"
    >
      {/* Background Glow */}
      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="absolute -left-24 bottom-0 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-4xl font-bold text-white">
            {greeting}, {name} 👋
          </h1>

          <p className="mt-3 max-w-xl text-slate-300">
            Analyze your resume with AI, improve ATS compatibility,
            discover missing skills, and land more interviews.
          </p>
        </div>

        <button className="flex items-center gap-3 rounded-xl bg-white px-6 py-4 font-semibold text-slate-900 transition hover:scale-105">
          <UploadCloud size={22} />
          Upload Resume
        </button>
      </div>
    </motion.div>
  );
}