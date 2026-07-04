import { Sparkles } from "lucide-react";
import GlassCard from "../ui/GlassCard";

type Props = {
  suggestions: string[];
};

export default function SuggestionsCard({
  suggestions,
}: Props) {
  return (
    <GlassCard title="AI Suggestions">

      <div className="space-y-4">

        {suggestions.map((item, index) => (

          <div
            key={index}
            className="flex gap-3 rounded-xl border border-slate-800 bg-slate-800/40 p-4"
          >

            <Sparkles
              className="mt-1 text-violet-400"
              size={18}
            />

            <p className="text-slate-300">
              {item}
            </p>

          </div>

        ))}

      </div>

    </GlassCard>
  );
}