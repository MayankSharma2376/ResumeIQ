import { FileText, Eye, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

type Props = {
    resume: any;
    onDelete: (id: string) => void;
};

export default function ResumeCard({
    resume,
    onDelete
}: Props) {

    const navigate = useNavigate();

    return (

        <div className="rounded-2xl border border-white/10 bg-[#111827] p-6 flex justify-between items-center">

            <div className="flex gap-4 items-center">

                <div className="bg-violet-500/10 p-4 rounded-xl">

                    <FileText className="text-violet-400"/>

                </div>

                <div>

                    <h2 className="font-semibold text-lg">

                        {resume.title}

                    </h2>

                    <p className="text-sm text-gray-400">

                        Uploaded {new Date(resume.createdAt).toLocaleDateString()}

                    </p>

                </div>

            </div>

            <div className="flex gap-3">

                <button

                    onClick={() => navigate(`/resume/${resume._id}`)}

                    className="bg-violet-600 px-4 py-2 rounded-lg flex items-center gap-2"

                >

                    <Eye size={18}/>

                    View

                </button>

                <button

                    onClick={() => onDelete(resume._id)}

                    className="bg-red-500 px-4 py-2 rounded-lg flex items-center gap-2"

                >

                    <Trash2 size={18}/>

                    Delete

                </button>

            </div>

        </div>

    );

}