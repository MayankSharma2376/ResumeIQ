import { Upload, Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function QuickActions() {

    const navigate = useNavigate();

    return (

        <div className="rounded-3xl bg-[#111827] border border-white/10 p-6">

            <h2 className="text-xl font-semibold mb-5">
                Quick Actions
            </h2>

            <div className="grid grid-cols-2 gap-4">

                <button
                    onClick={() => navigate("/upload")}
                    className="rounded-xl bg-violet-600 py-5 hover:bg-violet-700 transition"
                >
                    <Upload className="mx-auto mb-2"/>

                    Upload Resume
                </button>

                <button
                    onClick={() => navigate("/job-match")}
                    className="rounded-xl bg-sky-600 py-5 hover:bg-sky-700 transition"
                >
                    <Briefcase className="mx-auto mb-2"/>

                    Match Job
                </button>

            </div>

        </div>

    );

}