import { NavLink } from "react-router-dom";

const menuItems = [
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Activities", path: "/activities" },
  { label: "Feedback", path: "/feedback" },
];

export default function Nav() {
  return (
    <div className="flex gap-5 md:gap-3 justify-center lg:justify-start pb-2 select-none">
      {menuItems.map(({ label, path }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) =>
            isActive
              ? "pb-1 text-black border-b-4 border-black rounded-sm transition-colors"
              : "pb-1 text-gray-300 hover:text-gray-500 transition-colors cursor-pointer"
          }
        >
          {label}
        </NavLink>
      ))}
    </div>
  );
}
