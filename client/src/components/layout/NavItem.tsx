import { NavLink } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  label: string;
  to: string;
};

export default function NavItem({
  icon: Icon,
  label,
  to,
}: Props) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-4 rounded-xl px-4 py-3 transition-all duration-300
        ${
          isActive
            ? "bg-violet-600 text-white shadow-lg shadow-violet-600/30"
            : "text-slate-400 hover:bg-slate-800 hover:text-white"
        }`
      }
    >
      <Icon size={20} />

      <span>{label}</span>
    </NavLink>
  );
}