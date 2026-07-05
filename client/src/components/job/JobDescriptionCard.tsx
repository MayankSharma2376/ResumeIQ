import { useState } from "react";
import { BriefcaseBusiness, Sparkles } from "lucide-react";
import DashboardCard from "../ui/DashboardCard";
import { matchResume } from "../../services/job.service";
import toast from "react-hot-toast";

type Props = {
    setResult: (data: any)=> void;
}

export default function JobDescriptionCard({setResult, }: Props) {

    const [jobDescription, setJobDescription] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleAnalyze() {

        if (jobDescription.trim().length < 100) {
            toast.error("Please paste a complete job description");
            return;
        }

        try {

            setLoading(true);

            const res = await matchResume({
                jobDescription
            });

            setResult(res.data.data);

            toast.success("Analysis Completed");

            // Next step:
            // send data to MatchResultCard

        } catch (err: any) {

            toast.error(
                err?.response?.data?.message ??
                "Something went wrong"
            );

        } finally {

            setLoading(false);

        }
    }

    return (

        <DashboardCard title="Job Description">

            <div className="space-y-6">

                <div className="flex items-center gap-3">

                    <div className="h-12 w-12 rounded-xl bg-violet-500/20 flex items-center justify-center">

                        <BriefcaseBusiness className="text-violet-400" />

                    </div>

                    <div>

                        <h3 className="font-semibold">

                            Paste Job Description

                        </h3>

                        <p className="text-sm text-gray-400">

                            AI will compare it with your latest resume

                        </p>

                    </div>

                </div>

                <textarea
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    rows={16}
                    placeholder="Paste complete job description here..."
                    className="w-full rounded-2xl bg-[#0F172A] border border-white/10 p-5 resize-none outline-none focus:border-violet-500 transition"
                />

                <button
                    onClick={handleAnalyze}
                    disabled={loading}
                    className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 py-4 font-semibold flex justify-center items-center gap-3 hover:opacity-90 transition disabled:opacity-50"
                >

                    <Sparkles size={18} />

                    {loading
                        ? "Analyzing..."
                        : "Analyze Match"}

                </button>

            </div>

        </DashboardCard>

    );
}