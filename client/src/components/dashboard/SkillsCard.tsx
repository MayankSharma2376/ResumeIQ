import GlassCard from "../ui/GlassCard";
import { CheckCircle2, CircleAlert } from "lucide-react";

type Props = {
  title: string;
  skills: string[];
  variant?: "success" | "warning";
};

export default function SkillsCard({
  title,
  skills,
  variant = "success",
}: Props) {
  const success = variant === "success";

  return (
    <GlassCard title={title}>
      <div className="flex flex-wrap gap-3">

        {skills.map((skill) => (
          <div
            key={skill}
            className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105
              ${
                success
                  ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                  : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
              }`}
          >
            {success ? (
              <CheckCircle2 size={16} />
            ) : (
              <CircleAlert size={16} />
            )}

            {skill}
          </div>
        ))}

      </div>
    </GlassCard>
  );
}