export default function DashboardSkeleton() {
    return (
        <div className="animate-pulse space-y-8">

            {/* Hero */}
            <div className="h-28 rounded-2xl bg-zinc-800"></div>

            {/* ATS + Summary */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

                <div className="h-72 rounded-2xl bg-zinc-800"></div>

                <div className="xl:col-span-2 h-72 rounded-2xl bg-zinc-800"></div>

            </div>

            {/* Skills */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                <div className="h-64 rounded-2xl bg-zinc-800"></div>

                <div className="h-64 rounded-2xl bg-zinc-800"></div>

            </div>

            {/* Suggestions */}
            <div className="h-72 rounded-2xl bg-zinc-800"></div>

            {/* Recent Resume */}
            <div className="h-56 rounded-2xl bg-zinc-800"></div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">

                <div className="h-36 rounded-2xl bg-zinc-800"></div>

                <div className="h-36 rounded-2xl bg-zinc-800"></div>

                <div className="h-36 rounded-2xl bg-zinc-800"></div>

            </div>

        </div>
    );
}