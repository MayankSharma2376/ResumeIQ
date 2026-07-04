import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";
import FilePreview from "../components/upload/FilePreview";
import UploadHero from "../components/upload/UploadHero";
import UploadCard from "../components/upload/UploadCard";
import { uploadResume } from "../services/resume.service";

export default function Upload() {

    const navigate = useNavigate();

    const [file, setFile] = useState<File | null>(null);

    const [loading, setLoading] = useState(false);

    const handleUpload = async () => {

        if (!file) {

            toast.error("Please select a resume");

            return;

        }

        try {

            setLoading(true);

            await uploadResume(file);

            toast.success("Resume uploaded successfully");
            setTimeout(() => {
               navigate("/");
              
            }, 1000);

           

        }

        catch (error: any) {

            toast.error(

                error?.response?.data?.message ||

                "Upload failed"

            );

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <div className="max-w-5xl mx-auto py-10">

            <UploadHero />

            <UploadCard onSelect={setFile} />

            {file && (

    <FilePreview

        file={file}

        onRemove={() => setFile(null)}

    />

)}

           

            <button

                onClick={handleUpload}

                disabled={loading}

               className="mt-8 w-full rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 py-4 font-semibold hover:opacity-90 transition flex items-center justify-center gap-3 disabled:opacity-50"

            >

                {

                    loading

                        ?

                        <>

                            <Loader2 className="animate-spin" />

                            Analyzing Resume...

                        </>

                        :

                        "Analyze Resume"

                }

            </button>

        </div>

    );

}