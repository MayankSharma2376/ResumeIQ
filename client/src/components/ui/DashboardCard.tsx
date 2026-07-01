type Props = {
    title: string;
    children: React.ReactNode;
};

export default function DashboardCard({
    title,
    children,
}: Props) {
    return (
        <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 shadow-sm">

            <h2 className="text-lg font-semibold mb-4">
                {title}
            </h2>

            {children}

        </div>
    );
}