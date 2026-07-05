import { Calendar, Trash2, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Props {
    resume: any;
    onDelete: (id: string) => void;
}

export default function ResumeHistoryCard({
    resume,
    onDelete
}: Props) {

    const navigate = useNavigate()

    return (

        <div className="bg-[#18181B] border border-zinc-800 rounded-2xl p-6">

            <div className="flex justify-between">

                <div>

                    <h2 className="font-semibold text-lg">

                        {resume.title}

                    </h2>

                    <div className="flex items-center gap-2 mt-2 text-sm text-gray-400">

                        <Calendar size={16}/>

                        {new Date(resume.createdAt).toLocaleDateString()}

                    </div>

                </div>

                <div>

                    <span className="bg-violet-600 px-4 py-2 rounded-full font-bold">

                        ATS {resume.analysis?.atsScore ?? "--"}

                    </span>

                </div>

            </div>

            <div className="flex gap-3 mt-6">

                <button onClick={()=> navigate(`/resume/${resume._id}`)} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-700 hover:bg-zinc-600">

                    <Eye size={18}/>

                    View

                </button>

                <button
                    onClick={() => onDelete(resume._id)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700"
                >

                    <Trash2 size={18}/>

                    Delete

                </button>

            </div>

        </div>

    );

}