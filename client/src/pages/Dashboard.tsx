import { useEffect, useState } from "react";

import HeroSection from "../components/dashboard/HeroSection";
import ATSScoreCard from "../components/dashboard/ScoreBadge";
import SkillsCard from "../components/dashboard/SkillsCard";
import SuggestionsCard from "../components/dashboard/SuggestionsCard";
import SummaryCard from "../components/dashboard/SummaryCard";
import RecentResumes from "../components/dashboard/RecentResumeCard";
import QuickActions from "../components/dashboard/QuickActions";
import StatsCard from "../components/dashboard/StatsCard";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import { getLatestResume } from "../services/resume.service";
import { getDashboardStats } from "../services/dashboard.service";
import DashboardSkeleton from "../components/dashboard/DashboardSkeleton";

export default function Dashboard() {

    const [resumeData, setResumeData] = useState<any>(null);
    const [stats, setStats] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()

    const { user } = useAuth();

    useEffect(() => {

        async function loadDashboard() {

            try {

                const [resumeRes, statsRes] = await Promise.all([
                    getLatestResume(),
                    getDashboardStats()
                ]);

                console.log("Latest Resume:", resumeRes.data);
                console.log("Dashboard Stats:", statsRes.data);

                setResumeData(resumeRes.data.data);
                setStats(statsRes.data.data);

            } catch (error) {

                console.error("Dashboard Error:", error);

            } finally {

                setLoading(false);

            }

        }

        loadDashboard();

    }, []);


    // console.log("resumeData State : ", resumeData)
    // console.log("stats state : ", stats)



    if (loading) {

       return <DashboardSkeleton/>

    }

    if (!resumeData) {
    return (
        <div className="flex flex-col items-center justify-center h-[70vh]">

            <div className="text-7xl mb-6">
                📄
            </div>

            <h2 className="text-3xl font-bold mb-3">
                No Resume Uploaded
            </h2>

            <p className="text-gray-400 mb-8 text-center max-w-md">
                Upload your first resume to receive AI analysis,
                ATS score and job matching.
            </p>

            <button
                onClick={() => navigate("/upload")}
                className="px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 transition"
            >
                Upload Resume
            </button>

        </div>
    );
}

    const resume = resumeData?.resume;
    const analysis = resumeData?.analysis;

    return (

        <div className="space-y-8">

            <HeroSection
                name={user?.fullName ?? "User"}
            />

            <section className="grid grid-cols-1 xl:grid-cols-3 gap-8">

                <div className="xl:col-span-1">

                    <ATSScoreCard
                        score={analysis?.atsScore ?? 0}
                    />

                </div>

                <div className="xl:col-span-2">

                    <SummaryCard
                        summary={analysis?.summary ?? "No summary available."}
                    />

                </div>

            </section>

            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                <SkillsCard
                    title="Top Strengths"
                    variant="success"
                    skills={analysis?.strengths ?? []}
                />

                <SkillsCard
                    title="Missing Skills"
                    variant="warning"
                    skills={analysis?.missingSkills ?? []}
                />

            </section>

            <section>

                <SuggestionsCard
                    suggestions={analysis?.suggestions ?? []}
                />

            </section>

            <section className="space-y-6">

                <div>

                    <h2 className="text-2xl font-bold mb-5">
                        Recent Resume
                    </h2>

                    <RecentResumes
                        resume={resume}
                    />

                </div>

                <QuickActions />

            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <StatsCard
                    title="Total Resumes"
                    value={stats?.totalResumes ?? 0}
                />

                <StatsCard
                    title="Highest ATS"
                    value={stats?.highestATS ?? 0}
                />

                <StatsCard
                    title="AI Analyses"
                    value={stats?.totalAnalyses ?? 0}
                />

            </section>

        </div>

    );

}