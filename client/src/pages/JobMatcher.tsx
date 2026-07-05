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

               className="w-full md:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 font-semibold transition-all"

            >

                {

                    loading

                    ?

                    "Analyzing..."

                    :

                    "Analyze Match"

                }

            </button>

            {!result && !loading && (

<div className="bg-zinc-900 rounded-2xl p-12 text-center border border-zinc-800">

    <div className="text-7xl">
        💼
    </div>

    <h2 className="text-3xl font-bold mt-6">
        Analyze Job Description
    </h2>

    <p className="text-gray-400 mt-4 max-w-xl mx-auto">

        Paste any job description above and ResumeIQ AI
        will compare it with your latest uploaded resume.

    </p>

</div>

)}





            {result && (

<div className="space-y-6">

    <div className="bg-gradient-to-br from-violet-600 to-indigo-700 rounded-2xl p-8 shadow-xl">

    <h2 className="text-xl font-bold text-center">
        🎯 Resume Match Score
    </h2>

    <div className="text-center mt-8">

        <div className="text-7xl font-extrabold">
            {result.matchScore}%
        </div>

        <p className="text-violet-100 mt-2">
            ATS Compatibility
        </p>

    </div>

    <div className="mt-8">

        <div className="w-full h-4 rounded-full bg-white/20 overflow-hidden">

            <div
                className="h-full bg-green-400 transition-all duration-700"
                style={{
                    width: `${result.matchScore}%`
                }}
            />

        </div>

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
                        className="bg-green-500/20 border border-green-500 text-green-300 px-4 py-2 rounded-full text-sm font-medium"
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
                        className="bg-red-500/20 border border-red-500 text-red-300 px-4 py-2 rounded-full text-sm font-medium"
                      
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

        <div className="space-y-4">

    {result.suggestions.map((item: string, index: number) => (

        <div
            key={index}
            className="bg-zinc-800 border border-zinc-700 rounded-xl p-4 flex gap-3"
        >

            <span className="text-yellow-400 text-xl">
                💡
            </span>

            <p className="text-gray-300">
                {item}
            </p>

        </div>

    ))}

</div>

    </div>

</div>

)}

            

        </div>

    );

}