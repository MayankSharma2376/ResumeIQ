import DashboardCard from "../ui/DashboardCard";
import ATSScoreCard from "../dashboard/ScoreBadge";
import SkillsCard from "../dashboard/SkillsCard";
import SuggestionsCard from "../dashboard/SuggestionsCard";

type Props = {
    result: any;
};

export default function MatchResultCard({
    result,
}: Props) {

    if (!result) {

        return (

            <DashboardCard title="AI Match Result">

                <div className="flex h-[650px] items-center justify-center">

                    <div className="text-center">

                        <div className="text-7xl mb-6">
                            🎯
                        </div>

                        <h2 className="text-2xl font-bold">

                            No Analysis Yet

                        </h2>

                        <p className="text-gray-400 mt-3">

                            Paste a job description and click
                            Analyze Match.

                        </p>

                    </div>

                </div>

            </DashboardCard>

        );
    }

    return (

        <div className="space-y-6">

            <ATSScoreCard
                score={result.matchScore}
            />

            <SkillsCard
                title="Matched Skills"
                variant="success"
                skills={result.matchedSkills}
            />

            <SkillsCard
                title="Missing Skills"
                variant="warning"
                skills={result.missingSkills}
            />

            <SuggestionsCard
                suggestions={result.suggestions}
            />

        </div>

    );
}