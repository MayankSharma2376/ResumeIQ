import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
    score: number;
};

export default function ATSScoreCard({ score }: Props) {

    const getStatus = () => {

        if (score >= 85)
            return "Excellent";

        if (score >= 70)
            return "Good";

        return "Needs Improvement";
    };

    return (

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl border border-white/10 bg-[#101827] p-8 shadow-2xl"
        >

            <div className="flex items-center justify-between mb-8">

                <h2 className="text-2xl font-semibold">

                    ATS Score

                </h2>

                <span className="text-white/50">

                    AI Analysis

                </span>

            </div>

            <div className="flex items-center justify-center w-full">
    <div className="w-64 h-64">
        <CircularProgressbarWithChildren
            value={score}
            strokeWidth={8}
            styles={buildStyles({
                trailColor: "#1F2937",
                pathColor: "#8B5CF6",
            })}
        >
            <div className="text-center">
                <h1 className="text-7xl font-bold">{score}</h1>
                <p className="text-gray-400">/100</p>
            </div>
        </CircularProgressbarWithChildren>
    </div>
</div>

            <div className="mt-8 flex justify-center">

                <div className="flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-6 py-3">

                    <TrendingUp size={18} />

                    <span className="font-semibold">

                        {getStatus()}

                    </span>

                </div>

            </div>

            <p className="text-center text-gray-400 mt-5">

                Your resume is ATS friendly

            </p>

        </motion.div>

    );

}