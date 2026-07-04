import { FileText, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";


type Props = {
    resume: any;
};

export default function RecentResumeCard({ resume }: Props) {

    const navigate = useNavigate();

    if (!resume) {
        return (
            <div className="rounded-2xl border border-dashed border-white/10 p-6 text-center text-gray-400">
                No resumes uploaded yet.
            </div>
        );
    }

    return (
        <div className="rounded-2xl border border-white/10 bg-[#111827] p-5 flex items-center justify-between hover:border-violet-500 transition">

            <div className="flex items-center gap-4">

                <div className="bg-violet-500/10 p-3 rounded-xl">
                    <FileText className="text-violet-400"/>
                </div>

                <div>

                    <h3 className="font-semibold text-lg">
                        {resume.title}
                    </h3>

                    <p className="text-sm text-gray-400">
                        ATS Score : {resume.analysis?.atsScore ?? "--"}
                    </p>

                </div>

            </div>

            <button
                onClick={() => navigate(`/resume/${resume._id}`)}
                className="flex items-center gap-2 text-violet-400 hover:text-violet-300"
            >

                View

                <ArrowRight size={18}/>

            </button>

        </div>
    );
}