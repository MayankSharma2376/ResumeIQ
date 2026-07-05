import {
    LayoutDashboard,
    Upload,
    History,
    User,
    LogOut,
} from "lucide-react";

import NavItem from "./NavItem";
import logo from "../../assets/logo.png"

import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { logoutUser } from "../../services/auth.service";
import { useAuth } from "../../context/AuthContext";

export default function Sidebar() {
    const navigate = useNavigate()
    const {setUser} = useAuth()
    const handleLogout = async()=>{
        try{
            await logoutUser()
            setUser(null)
            toast.success("Logged out successfully")
            navigate("/login")
        }catch(err){
            toast.error("Logout failed")
        }
    }

    return (

        <aside className="w-72 bg-[#0F172A] border-r border-slate-800 flex flex-col">

            {/* Logo */}

            <div className="h-24 flex items-center justify-center border-b border-slate-800">

                <div className="flex items-center gap-4">

                    <img src={logo} alt="ResumeIQ AI" className="w-12 h-12 object-contain" />

                    <div>

                        <h1 className="font-bold text-xl">

                            ResumeIQ

                        </h1>

                        <p className="text-xs text-slate-400">

                            AI Resume Analyzer

                        </p>

                    </div>

                </div>

            </div>

            {/* Menu */}

            <nav className="flex-1 p-5 space-y-3">

                <NavItem
                    to="/dashboard"
                    label="Dashboard"
                    icon={LayoutDashboard}
                />

                <NavItem
                    to="/upload"
                    label="Upload Resume"
                    icon={Upload}
                />

                <NavItem
                    to="/history"
                    label="Resume History"
                    icon={History}
                />

                <NavItem
                    to="/profile"
                    label="Profile"
                    icon={User}
                />

            </nav>

            {/* Footer */}

            <div className="border-t border-slate-800 p-5">

                <button
                    onClick={handleLogout}

                
                    className="w-full flex items-center gap-3 rounded-xl bg-red-500/10 px-4 py-3 text-red-400 hover:bg-red-500/20 transition"
                >

                    <LogOut size={18} />

                    Logout

                </button>

            </div>

        </aside>

    );

}