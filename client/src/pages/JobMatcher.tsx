import { useState } from "react";
import toast from "react-hot-toast";

import { matchResume } from "../services/job.service";

export default function JobMatch() {

    const [jobDescription, setJobDescription] = useState("");

    const [loading, setLoading] = useState(false);

    const [result, setResult] = useState<any>(null);

    async function handleAnalyze() {

        if (jobDescription.trim().length < 100) {

            return toast.error(
                "Please paste complete Job Description."
            );

        }

        try {

            setLoading(true);

            const res = await matchResume({

                jobDescription

            });

            setResult(res.data.data);

        } catch (err: any) {

            toast.error(

                err.response?.data?.message ||

                "Analysis Failed"

            );

        } finally {

            setLoading(false);

        }

    }

    return (

        <div className="space-y-8">

            <div>

                <h1 className="text-3xl font-bold">

                    Job Match

                </h1>

                <p className="text-gray-400 mt-2">

                    Compare your latest resume with a Job Description.

                </p>

            </div>

            <textarea

                rows={12}

                value={jobDescription}

                onChange={(e)=>setJobDescription(e.target.value)}

                placeholder="Paste complete Job Description..."

                className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-5 outline-none"

            />

            <button

                onClick={handleAnalyze}

                disabled={loading}

                className="bg-violet-600 hover:bg-violet-700 rounded-xl px-6 py-3"

            >

                {

                    loading

                    ?

                    "Analyzing..."

                    :

                    "Analyze Match"

                }

            </button>

            {result && (

<div className="space-y-6">

    <div className="bg-zinc-900 rounded-xl p-6">

        <h2 className="text-xl font-bold mb-4">
            Match Score
        </h2>

        <div className="text-6xl font-bold text-violet-500">
            {result.matchScore}%
        </div>

        <div className="w-full bg-zinc-700 h-3 rounded-full mt-6">

            <div
                className="bg-violet-500 h-3 rounded-full"
                style={{
                    width: `${result.matchScore}%`
                }}
            />

        </div>

    </div>

    <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-zinc-900 rounded-xl p-6">

            <h2 className="font-bold text-lg mb-4">
                ✅ Matching Skills
            </h2>

            <div className="flex flex-wrap gap-3">

                {result.matchedSkills.map((skill: string) => (

                    <span
                        key={skill}
                        className="bg-green-600 px-3 py-2 rounded-full"
                    >
                        {skill}
                    </span>

                ))}

            </div>

        </div>

        <div className="bg-zinc-900 rounded-xl p-6">

            <h2 className="font-bold text-lg mb-4">
                ❌ Missing Skills
            </h2>

            <div className="flex flex-wrap gap-3">

                {result.missingSkills.map((skill: string) => (

                    <span
                        key={skill}
                        className="bg-red-600 px-3 py-2 rounded-full"
                    >
                        {skill}
                    </span>

                ))}

            </div>

        </div>

    </div>

    <div className="bg-zinc-900 rounded-xl p-6">

        <h2 className="font-bold text-lg mb-4">

            💡 AI Suggestions

        </h2>

        <ul className="space-y-3">

            {result.suggestions.map((item: string, index: number) => (

                <li key={index}>

                    • {item}

                </li>

            ))}

        </ul>

    </div>

</div>

)}

            

        </div>

    );

}