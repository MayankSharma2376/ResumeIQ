import GlassCard from "../ui/GlassCard";
import { FileText } from "lucide-react";

export default function SummaryCard({
  summary,
}: {
  summary: string;
}) {
  return (
    <GlassCard title="AI Resume Summary">

      <div className="flex items-start gap-4">

        <div className="rounded-xl bg-violet-600/15 p-3">

          <FileText className="text-violet-400" />

        </div>

        <p className="leading-7 text-slate-300">
          {summary}
        </p>

      </div>

    </GlassCard>
  );
}