interface ConfirmModalProps {
    open: boolean;
    title: string;
    message: string;
    loading?: boolean;
    onConfirm: () => void;
    onCancel: () => void;
}

export default function ConfirmModal({
    open,
    title,
    message,
    loading = false,
    onConfirm,
    onCancel
}: ConfirmModalProps) {

    if (!open) return null;

    return (

        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

            <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 w-full max-w-md">

                <h2 className="text-2xl font-bold">
                    {title}
                </h2>

                <p className="text-gray-400 mt-3">
                    {message}
                </p>

                <div className="flex justify-end gap-3 mt-8">

                    <button
                        onClick={onCancel}
                        className="px-5 py-2 rounded-xl border border-zinc-600 hover:bg-zinc-800"
                    >
                        Cancel
                    </button>

                    <button
                        disabled={loading}
                        onClick={onConfirm}
                        className="px-5 py-2 rounded-xl bg-red-600 hover:bg-red-700 disabled:opacity-50"
                    >
                        {loading ? "Deleting..." : "Delete"}
                    </button>

                </div>

            </div>

        </div>

    );

}