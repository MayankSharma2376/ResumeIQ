import DashboardCard from "../ui/DashboardCard";

type Props = {
    score: number;
};

export default function ATSCard({ score }: Props) {
    return (
        <DashboardCard title="ATS Score">

            <div className="text-center ">

                <h1 className="text-6xl font-bold  text-violet-500">
                    {score}
                </h1>

                <p className="text-gray-400 mt-2">
                    out of 100
                </p>

            </div>

        </DashboardCard>
    );
}