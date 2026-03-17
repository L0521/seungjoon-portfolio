import { FaArrowLeft, FaLayerGroup } from "react-icons/fa";
import PortfolioWebsiteDetail from "../Projects/Details/PortfolioWebsiteDetail";
import PortfolioWebsiteCard from "../Projects/PortfolioWebsiteCard";
import ContinuousCard from "../Projects/ContinuousCard";
import ProovyCard from "../Projects/ProovyCard";
import HarangCard from "../Projects/HarangCard";
import { useProjectStore } from "../stores/useProjectStore";
import { useModalReset } from "../hooks/useModalReset";
import { useScrollTop } from "../hooks/useScrollTop";
import { useHeaderVisible } from "../hooks/useHeaderVisible";
import ProovyDetail from "../Projects/Details/ProovyDetail";
import HarangDetail from "../Projects/Details/HarangDetail";

export default function Projects() {
  const {
    projectDetailId,
    setProjectDetailId,
    listScrollTrigger,
    triggerListScroll,
    reset,
  } = useProjectStore();
  useModalReset(reset);

  // 상세 진입 시 스크롤
  useScrollTop(projectDetailId);
  // 목록 복귀 시 스크롤 (주스탠드 트리거 감시)
  useScrollTop(listScrollTrigger);

  const {
    visible: isHeaderVisible,
    isTop,
    isReady,
  } = useHeaderVisible(projectDetailId);

  // --- 상세 페이지 (Details) ---
  if (projectDetailId) {
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
            onClick={() => {
              triggerListScroll();
              setProjectDetailId(null);
            }}
            className="group flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-all bg-white border border-gray-200 hover:border-gray-400 rounded-full px-4 py-2 shadow-sm cursor-pointer whitespace-nowrap"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            목록으로 돌아가기
          </button>
        </div>

        {/* --- 상세 내용 본문 --- */}
        <div className="animate-fade-in-up px-6 md:px-12 pt-8 pb-12">
          {projectDetailId === "portfolio" && <PortfolioWebsiteDetail />}
          {projectDetailId === "proovy" && <ProovyDetail />}
          {projectDetailId === "harang" && <HarangDetail />}
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
          아이디어 및 배포, 고민의 흔적이 담긴 작업물입니다.
        </p>
      </div>

      <div className="animate-fade-in-up grid grid-cols-1 lg:grid-cols-2 gap-6 pb-10">
        {[
          {
            id: "harang",
            date: "2026.01",
            component: (
              <HarangCard onClick={() => setProjectDetailId("harang")} />
            ),
          },
          {
            id: "proovy",
            date: "2025.12",
            component: (
              <ProovyCard onClick={() => setProjectDetailId("proovy")} />
            ),
          },
          {
            id: "portfolio",
            date: "2024.12",
            component: (
              <PortfolioWebsiteCard
                onClick={() => setProjectDetailId("portfolio")}
              />
            ),
          },
        ]
          .sort((a, b) => b.date.localeCompare(a.date))
          .map((project) => (
            <div
              key={project.id}
              className="h-full transform transition duration-300 hover:-translate-y-1"
            >
              {project.component}
            </div>
          ))}

        <div className="h-full transform transition duration-300 hover:-translate-y-1">
          <ContinuousCard />
        </div>
      </div>
    </div>
  );
}
