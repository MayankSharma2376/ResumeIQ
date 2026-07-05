import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";

import ResumeHistoryCard from "../components/history/ResumeHistoryCard";
import {
  getResumeHistory,
  deleteResume,
} from "../services/resume.service";
import ResumeHistorySkeleton from "../components/history/ResumeHistorySkeleton";
import ConfirmModal from "../components/common/ConfirmModal";

export default function ResumeHistory() {
  const [resumes, setResumes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedResume, setSelectedResume] = useState<string | null>(null)
  const [deleteLoading, setDeleteLoading] = useState(false)

  useEffect(() => {
    loadHistory();
  }, []);

  async function loadHistory() {
    try {
      setLoading(true);

      const res = await getResumeHistory();

      console.log("Resume History:", res.data);

      setResumes(res.data.data ?? []);
    } catch (err) {
      console.error(err);
      toast.error("Failed to load resume history");
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete() {

    if (!selectedResume) return;

    try {

        setDeleteLoading(true);

        await deleteResume(selectedResume);

        toast.success("Resume deleted");

        setResumes(prev =>
            prev.filter(r => r._id !== selectedResume)
        );

        setSelectedResume(null);

    } catch (err) {

        toast.error("Delete failed");

    } finally {

        setDeleteLoading(false);

    }

}

  const filteredResumes = useMemo(() => {

    return resumes.filter((resume) => {

        const keyword = search.toLowerCase();

        return (

            resume.title.toLowerCase().includes(keyword) ||

            resume.originalName.toLowerCase().includes(keyword)

        );

    });

}, [search, resumes]);

 

  if (loading) {
    return <ResumeHistorySkeleton/>
  }

  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold">
          Resume History
        </h1>

        <p className="text-gray-400 mt-2">
          View all uploaded resumes.
        </p>

      </div>

      <input
        type="text"
        placeholder="Search resume..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-xl border border-zinc-700 bg-zinc-900 p-4 outline-none"
      />

      {filteredResumes.length === 0 ? (
       <div className="flex flex-col items-center justify-center py-24">

    <div className="text-7xl">
        📂
    </div>

    <h2 className="text-3xl font-bold mt-6">

        No Resume Found

    </h2>

    <p className="text-gray-400 mt-3 text-center max-w-md">

        Upload your first resume and begin tracking
        your ATS score and AI analysis.

    </p>

</div>
      ) : (
        <div className="grid gap-6">
          {filteredResumes.map((resume) => (
            <ResumeHistoryCard
              key={resume._id}
              resume={resume}
              onDelete={(id)=> setSelectedResume(id)}
            />
          ))}
        </div>
      )}


      <ConfirmModal
    open={selectedResume !== null}
    title="Delete Resume"
    message="This action cannot be undone. Are you sure you want to permanently delete this resume?"
    loading={deleteLoading}
    onCancel={() => setSelectedResume(null)}
    onConfirm={handleDelete}
/>



    </div>
  );
}