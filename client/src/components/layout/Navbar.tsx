import { Bell, Moon, Search } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-40 h-20 bg-[#0F172A]/90 backdrop-blur-xl border-b border-slate-800">

      <div className="h-full px-8 flex items-center justify-between">

        {/* Left */}

        <div>

          <h1 className="text-2xl font-bold">
            Dashboard
          </h1>

          <p className="text-sm text-slate-400">
            Welcome back 👋
          </p>

        </div>

        {/* Right */}

        <div className="flex items-center gap-5">

          {/* Search */}

          <div className="hidden lg:flex items-center gap-3 rounded-xl bg-slate-800 px-4 py-3">

            <Search
              size={18}
              className="text-slate-400"
            />

            <input
              placeholder="Search..."
              className="bg-transparent outline-none w-64"
            />

          </div>

          {/* Notification */}

          <button className="h-11 w-11 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition">

            <Bell size={19} />

          </button>

          {/* Theme */}

          <button className="h-11 w-11 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition">

            <Moon size={18} />

          </button>

          {/* User */}

          <div className="flex items-center gap-3">

            <div className="h-11 w-11 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center font-bold">

              {user?.fullName?.charAt(0)}

            </div>

            <div className="hidden md:block">

              <h3 className="font-semibold">

                {user?.fullName}

              </h3>

              <p className="text-xs text-slate-400">

                {user?.email}

              </p>

            </div>

          </div>

        </div>

      </div>

    </header>
  );
}