interface NavProps {
  activeMenu: string;
  onMenuClick: (menu: string) => void;
}

export default function Nav({ activeMenu, onMenuClick }: NavProps) {
  return (
    <div className="flex gap-5 justify-center md:justify-start pb-2">
      <button
        onClick={() => onMenuClick("About Me")}
        className={`${
          activeMenu === "About Me"
            ? "text-black border-b-4 border-black rounded-sm transition-colors"
            : "text-gray-300 hover:text-gray-500"
        } pb-1 transition-colors cursor-pointer`}
      >
        About Me
      </button>
      <button
        onClick={() => onMenuClick("Project")}
        className={`${
          activeMenu === "Project"
            ? "text-black border-b-4 border-black rounded-sm transition-colors"
            : "text-gray-300 hover:text-gray-500"
        } pb-1 transition-colors cursor-pointer`}
      >
        Project
      </button>
      <button
        onClick={() => onMenuClick("Activities")}
        className={`${
          activeMenu === "Activities"
            ? "text-black border-b-4 border-black rounded-sm transition-colors"
            : "text-gray-300 hover:text-gray-500"
        } pb-1 transition-colors cursor-pointer`}
      >
        Activities
      </button>
      <button
        onClick={() => onMenuClick("Feedback")}
        className={`${
          activeMenu === "Feedback"
            ? "text-black border-b-4 border-black rounded-sm transition-colors"
            : "text-gray-300 hover:text-gray-500"
        } pb-1 transition-colors cursor-pointer`}
      >
        Feedback
      </button>
    </div>
  );
}
