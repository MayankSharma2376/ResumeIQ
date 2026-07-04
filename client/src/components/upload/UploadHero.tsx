import { UploadCloud } from "lucide-react";

export default function UploadHero() {
    return (
        <div className="text-center mb-10">

            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-violet-500/10">

                <UploadCloud
                    size={42}
                    className="text-violet-400"
                />

            </div>

            <h1 className="text-4xl font-bold">

                Upload Your Resume

            </h1>

            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">

                Upload your latest resume and receive an AI-powered ATS score,
                resume summary, missing skills, and personalized suggestions.

            </p>

        </div>
    );
}