export default function ResumeHistorySkeleton() {
    return (
        <div className="animate-pulse space-y-6">

            <div className="h-12 w-72 rounded-xl bg-zinc-800"></div>

            <div className="h-14 rounded-xl bg-zinc-800"></div>

            {[1,2,3].map((item)=>(
                <div
                    key={item}
                    className="h-40 rounded-2xl bg-zinc-800"
                />
            ))}

        </div>
    );
}