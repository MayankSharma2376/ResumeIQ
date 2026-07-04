import { UploadCloud } from "lucide-react";

type Props = {
    onSelect: (file: File) => void;
};

export default function UploadCard({
    onSelect
}: Props) {

    return (

        <label className="cursor-pointer block rounded-3xl border-2 border-dashed border-violet-500/30 bg-[#111827] p-16 text-center hover:border-violet-500 transition">

            <input

                type="file"

                accept=".pdf"

                hidden

                onChange={(e) => {

                    if (e.target.files?.length) {

                        onSelect(e.target.files[0]);

                    }

                }}

            />

            <UploadCloud
                className="mx-auto text-violet-400"
                size={60}
            />

            <h2 className="mt-6 text-2xl font-semibold">

                Drag & Drop Resume

            </h2>

            <p className="mt-3 text-gray-400">

                or click here to browse your PDF

            </p>

            <p className="mt-8 text-sm text-gray-500">

                Only PDF files are supported

            </p>

        </label>

    );

}