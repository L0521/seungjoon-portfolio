import { FaArrowLeft } from "react-icons/fa";
import PortfolioWebsiteDetail from "../Projects/Details/PortfolioWebsiteDetail";
import PortfolioWebsiteCard from "../Projects/PortfolioWebsiteCard";
import ContinuousCard from "../Projects/ContinuousCard";
import { useProjectStore } from "../stores/useProjectStore";

export default function Project() {
  const { projectDetailId, setProjectDetailId } = useProjectStore();

  // 상세 페이지(Details)
  if (projectDetailId) {
    return (
      <div className="animate-fade-in-up flex flex-col gap-6 h-full">
        <button
          onClick={() => setProjectDetailId(null)}
          className="flex items-center gap-2 text-gray-500 hover:text-black transition-colors w-fit font-bold cursor-pointer"
        >
          <FaArrowLeft /> 목록으로 돌아가기
        </button>

        {projectDetailId === "portfolio" && <PortfolioWebsiteDetail />}
      </div>
    );
  }

  // 리스트 페이지(Projects)
  return (
    <div className="flex flex-col gap-8 h-full justify-center">
      {/* 포트폴리오 웹사이트 카드 */}
      <PortfolioWebsiteCard onClick={() => setProjectDetailId("portfolio")} />

      {/* 진행중 카드 */}
      <ContinuousCard />
    </div>
  );
}
