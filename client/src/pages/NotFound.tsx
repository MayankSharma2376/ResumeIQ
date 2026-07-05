import { Link } from "react-router-dom";
import { Home } from "lucide-react";

export default function NotFound() {

    return (

        <div className="min-h-screen flex items-center justify-center bg-[#09090B] px-6">

            <div className="text-center">

                <h1 className="text-8xl font-extrabold text-violet-500">

                    404

                </h1>

                <h2 className="text-3xl font-bold mt-6">

                    Page Not Found

                </h2>

                <p className="text-gray-400 mt-4 max-w-md">

                    The page you're looking for doesn't exist or may have been moved.

                </p>

                <Link
                    to="/dashboard"
                    className="inline-flex items-center gap-2 mt-8 bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded-xl transition"
                >

                    <Home size={18} />

                    Back to Dashboard

                </Link>

            </div>

        </div>

    );

}