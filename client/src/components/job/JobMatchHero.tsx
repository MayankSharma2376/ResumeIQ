import { Sparkles } from "lucide-react";

export default function JobMatchHero() {
    return (
        <div className="rounded-3xl bg-gradient-to-r from-violet-700 via-indigo-700 to-slate-900 p-10 border border-white/10">

            <div className="flex items-center gap-4">

                <div className="h-16 w-16 rounded-2xl bg-white/10 flex items-center justify-center">

                    <Sparkles size={32} />

                </div>

                <div>

                    <h1 className="text-4xl font-bold text-white">

                        AI Job Matcher

                    </h1>

                    <p className="text-gray-300 mt-2">

                        Compare your latest resume with any job description using AI.

                    </p>

                </div>

            </div>

        </div>
    );
}