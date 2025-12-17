import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import PortfolioWebsiteDetail from "../Projects/Details/PortfolioWebsiteDetail";
import PortfolioWebsiteCard from "../Projects/PortfolioWebsiteCard";
import ContinuousCard from "../Projects/ContinuousCard";

export default function Project() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // 상세 페이지(Details)
  if (selectedId) {
    return (
      <div className="animate-fade-in-up flex flex-col gap-6 h-full">
        <button
          onClick={() => setSelectedId(null)}
          className="flex items-center gap-2 text-gray-500 hover:text-black transition-colors w-fit font-bold cursor-pointer"
        >
          <FaArrowLeft /> 목록으로 돌아가기
        </button>

        {selectedId === "portfolio" && <PortfolioWebsiteDetail />}
      </div>
    );
  }

  // 리스트 페이지(Projects)
  return (
    <div className="flex flex-col gap-8 h-full justify-center">
      {/* 제목 */}
      {/* <div className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 break-keep">
        <p>
          UMC 스터디를 바탕으로,
          <br />첫 프로젝트는 <span className="text-blue-600">이 웹사이트</span>
          입니다.
        </p>
      </div> */}

      {/* 포트폴리오 웹사이트 카드 */}
      <PortfolioWebsiteCard onClick={() => setSelectedId("portfolio")} />

      {/* 진행중 카드 */}
      <ContinuousCard />
    </div>
  );
}
