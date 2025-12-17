import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import UMCCard from "../Activities/UMCCard";
import CouncilCard from "../Activities/CouncilCard";
import CodingBlogCard from "../Activities/CodingBlogCard";
import ContinuousCard from "../Activities/ContinuousCard";
import UMCDetail from "../Activities/Details/UMCDetail";
import CouncilDetail from "../Activities/Details/CouncilDetail";
import CodingBlogDetail from "../Activities/Details/CodingBlogDetail";

export default function Activities() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // 상세 페이지(Sections)
  if (selectedId) {
    return (
      <div className="animate-fade-in-up flex flex-col gap-6 h-full ">
        <button
          onClick={() => setSelectedId(null)}
          className="flex items-center gap-2 text-gray-500 hover:text-black transition-colors w-fit font-bold cursor-pointer"
        >
          <FaArrowLeft /> 목록으로 돌아가기
        </button>

        {/* --- 1. UMC 활동 상세 --- */}
        {selectedId === "umc" && <UMCDetail />}

        {/* --- 2. 학생회 활동 상세 --- */}
        {selectedId === "council" && <CouncilDetail />}

        {/* --- 3. 수학 블로그 활동 상세 --- */}
        {selectedId === "mathblog" && <CodingBlogDetail />}
      </div>
    );
  }

  // 리스트 페이지(Activities)
  return (
    <div className="flex flex-col gap-8 h-full justify-center">
      {/* 카드 1: UMC */}
      <UMCCard onClick={() => setSelectedId("umc")} />

      {/* 카드 2: 학생회 */}
      <CouncilCard onClick={() => setSelectedId("council")} />

      {/* 카드 3: 수학 블로그 */}
      <CodingBlogCard onClick={() => setSelectedId("mathblog")} />

      {/* 카드 4: 자기계발 */}
      <ContinuousCard />
    </div>
  );
}
