import { useAuth } from "../context/AuthContext";
import { User, Mail, Calendar, Shield } from "lucide-react";

export default function Profile() {

    const { user } = useAuth();

    return (

        <div className="max-w-4xl mx-auto space-y-8">

            <div>

                <h1 className="text-3xl font-bold">

                    My Profile

                </h1>

                <p className="text-gray-400 mt-2">

                    Manage your ResumeIQ account.

                </p>

            </div>

            <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">

                <div className="flex items-center gap-6">

                    <div className="w-24 h-24 rounded-full bg-violet-600 flex items-center justify-center text-4xl font-bold">

                        {user?.fullName?.charAt(0).toUpperCase()}

                    </div>

                    <div>

                        <h2 className="text-2xl font-bold">

                            {user?.fullName}

                        </h2>

                        <p className="text-gray-400">

                            @{user?.username}

                        </p>

                    </div>

                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-10">

                    <div className="flex items-center gap-4">

                        <Mail className="text-violet-500"/>

                        <div>

                            <p className="text-sm text-gray-400">

                                Email

                            </p>

                            <p>

                                {user?.email}

                            </p>

                        </div>

                    </div>

                    <div className="flex items-center gap-4">

                        <Shield className="text-violet-500"/>

                        <div>

                            <p className="text-sm text-gray-400">

                                Provider

                            </p>

                            <p>

                                {user?.provider}

                            </p>

                        </div>

                    </div>

                    <div className="flex items-center gap-4">

                        <User className="text-violet-500"/>

                        <div>

                            <p className="text-sm text-gray-400">

                                Verification

                            </p>

                            <p>

                                {user?.isVerified ? "Verified" : "Not Verified"}

                            </p>

                        </div>

                    </div>

                    <div className="flex items-center gap-4">

                        <Calendar className="text-violet-500"/>

                        <div>

                            <p className="text-sm text-gray-400">

                                Joined

                            </p>

                            <p>

                                {user?.createdAt
                                    ? new Date(user.createdAt).toLocaleDateString()
                                    : "--"}

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}