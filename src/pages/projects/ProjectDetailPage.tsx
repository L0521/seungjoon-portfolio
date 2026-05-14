import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useHeaderVisible } from "../../hooks/useHeaderVisible";
import PortfolioWebsiteDetail from "./components/details/PortfolioWebsiteDetail";
import ProovyDetail from "./components/details/ProovyDetail";
import HarangDetail from "./components/details/HarangDetail";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { visible: isHeaderVisible, isTop, isReady } = useHeaderVisible(id);

  return (
    <div className="flex flex-col h-full select-none relative">
      {/* --- 상단 고정 헤더 --- */}
      <div
        className={`sticky top-0 z-20 w-full px-6 md:px-12 ${
          !isReady
            ? "!transition-none"
            : "transition-all duration-500 ease-in-out"
        } ${isHeaderVisible ? "translate-y-0" : "-translate-y-full"} ${
          isTop
            ? "pt-6 pb-2 md:pt-12 md:pb-4 bg-transparent border-transparent"
            : "py-4 md:py-6 bg-transparent md:bg-white/10 md:backdrop-blur-sm border-transparent"
        }`}
      >
        <button
          onClick={() => navigate("/projects")}
          className="group flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-all bg-white border border-gray-200 hover:border-gray-400 rounded-full px-4 py-2 shadow-sm cursor-pointer whitespace-nowrap"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          목록으로 돌아가기
        </button>
      </div>

      {/* --- 상세 내용 본문 --- */}
      <div className="animate-fade-in-up px-6 md:px-12 pt-8 pb-12">
        {id === "portfolio" && <PortfolioWebsiteDetail />}
        {id === "proovy" && <ProovyDetail />}
        {id === "harang" && <HarangDetail />}
      </div>
    </div>
  );
}
