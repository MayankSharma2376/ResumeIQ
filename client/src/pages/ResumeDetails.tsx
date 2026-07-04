import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

import { getResumeAnalysis } from "../services/resume.service";
import ATSScoreCard from "../components/dashboard/ScoreBadge";
import SummaryCard from "../components/dashboard/SummaryCard";
import SkillsCard from "../components/dashboard/SkillsCard";
import SuggestionsCard from "../components/dashboard/SuggestionsCard";

export default function ResumeDetails() {
    const { id } = useParams();

    const [resume, setResume] = useState<any>(null);
    const [analysis, setAnalysis] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadResume();
    }, []);

    async function loadResume() {
        try {
            const res = await getResumeAnalysis(id!);

            setResume(res.data.resume);
            setAnalysis(res.data.analysis);

        } catch (err) {
            console.error(err);
            toast.error("Failed to load analysis");
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return (
            <div className="text-center py-20">
                Loading...
            </div>
        );
    }

    return (
        <div className="space-y-8">

            <div>
                <h1 className="text-3xl font-bold">
                    {resume.title}
                </h1>
                <p className="text-gray-400">
                    Uploaded on {new Date(resume.createdAt).toLocaleDateString()}
                </p>
            </div>

            <section className="grid grid-cols-1 xl:grid-cols-3 gap-8">

                <ATSScoreCard
                    score={analysis.atsScore}
                />

                <div className="xl:col-span-2">
                    <SummaryCard
                        summary={analysis.summary}
                    />
                </div>

            </section>

            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                <SkillsCard
                    title="Strengths"
                    variant="success"
                    skills={analysis.strengths}
                />

                <SkillsCard
                    title="Missing Skills"
                    variant="warning"
                    skills={analysis.missingSkills}
                />

            </section>

            <SuggestionsCard
                suggestions={analysis.suggestions}
            />

        </div>
    );
}