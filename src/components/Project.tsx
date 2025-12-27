import { FaArrowLeft, FaLayerGroup } from "react-icons/fa";
import PortfolioWebsiteDetail from "../Projects/Details/PortfolioWebsiteDetail";
import PortfolioWebsiteCard from "../Projects/PortfolioWebsiteCard";
import ContinuousCard from "../Projects/ContinuousCard";
import { useProjectStore } from "../stores/useProjectStore";
import { useModalReset } from "../hooks/useModalReset";
import { useScrollTop } from "../hooks/useScrollTop";

export default function Project() {
  const { projectDetailId, setProjectDetailId, reset } = useProjectStore();
  useModalReset(reset);
  useScrollTop(projectDetailId);

  // --- 상세 페이지 (Details) ---
  if (projectDetailId) {
    return (
      <div className="animate-fade-in-up flex flex-col h-full select-none">
        {/* --- 상단 고정 헤더 --- */}
        <div className="sticky top-0 z-20 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 mt-5 px-6 py-4 md:px-12 md:py-6">
          <button
            onClick={() => setProjectDetailId(null)}
            className="group flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gray-900 transition-all bg-white border border-gray-200 hover:border-gray-400 rounded-full px-4 py-2 shadow-sm hover:shadow-md cursor-pointer"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            목록으로 돌아가기
          </button>
        </div>

        {/* --- 상세 내용 본문 --- */}
        <div className="px-6 md:px-12 pt-8 pb-12">
          {projectDetailId === "portfolio" && <PortfolioWebsiteDetail />}
        </div>
      </div>
    );
  }

  // --- 리스트 페이지 (Projects) ---
  return (
    <div className="flex flex-col h-full px-6 md:px-12 pb-12 pt-6 md:pt-12 select-none">
      <div className="animate-fade-in-up mb-8">
        <div className="flex items-center gap-2 mb-2 text-gray-800">
          <FaLayerGroup className="text-xl text-blue-500" />
          <h3 className="font-bold text-3xl tracking-tight">Projects</h3>
        </div>
        <p className="text-gray-500 text-sm md:text-base leading-relaxed">
          아이디어 구상부터 배포까지, 고민의 흔적이 담긴 작업물입니다.
        </p>
      </div>

      <div className="animate-fade-in-up grid grid-cols-1 lg:grid-cols-2 gap-6 pb-10">
        <div className="transform transition duration-300 hover:-translate-y-1">
          <PortfolioWebsiteCard
            onClick={() => setProjectDetailId("portfolio")}
          />
        </div>

        <div className="transform transition duration-300 hover:-translate-y-1">
          <ContinuousCard />
        </div>
      </div>
    </div>
  );
}
