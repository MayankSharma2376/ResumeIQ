import { useState } from "react";
import JobMatchHero from "../components/job/JobMatchHero";
import JobDescriptionCard from "../components/job/JobDescriptionCard";
import MatchResultCard from "../components/job/MatchResultCard";

export default function JobMatcher() {

    const [result, setResult] = useState<any>(null);

    return (
        <div className="space-y-8">

            <JobMatchHero />

            <div className="grid xl:grid-cols-2 gap-8">

                <JobDescriptionCard
                    setResult={setResult}
                />

                <MatchResultCard
                    result={result}
                />

            </div>

        </div>
    );
}