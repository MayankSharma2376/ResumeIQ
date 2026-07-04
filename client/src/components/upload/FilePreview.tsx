import { FileText, X } from "lucide-react";

type Props = {
    file: File;
    onRemove: () => void;
};

export default function FilePreview({
    file,
    onRemove,
}: Props) {

    return (

        <div className="mt-6 rounded-2xl border border-white/10 bg-[#111827] p-5 flex justify-between items-center">

            <div className="flex items-center gap-4">

                <div className="bg-violet-500/10 p-3 rounded-xl">

                    <FileText className="text-violet-400"/>

                </div>

                <div>

                    <h3 className="font-semibold">

                        {file.name}

                    </h3>

                    <p className="text-sm text-gray-400">

                        {(file.size / 1024 / 1024).toFixed(2)} MB

                    </p>

                </div>

            </div>

            <button
                onClick={onRemove}
                className="text-red-400 hover:text-red-500"
            >
                <X />
            </button>

        </div>

    );

}