import { FaArrowLeft, FaUsers } from "react-icons/fa"; // 아이콘 추가
import UMCCard from "../Activities/UMCCard";
import CouncilCard from "../Activities/CouncilCard";
import CodingBlogCard from "../Activities/CodingBlogCard";
import ContinuousCard from "../Activities/ContinuousCard";
import UMCDetail from "../Activities/Details/UMCDetail";
import CouncilDetail from "../Activities/Details/CouncilDetail";
import CodingBlogDetail from "../Activities/Details/CodingBlogDetail";
import { useActivityStore } from "../stores/useActivityStore";
import { useModalReset } from "../hooks/useModalReset";
import { useScrollTop } from "../hooks/useScrollTop";

export default function Activities() {
  const { activityDetailId, setActivityDetailId, reset } = useActivityStore();
  useModalReset(reset);
  useScrollTop(activityDetailId);

  // --- 상세 페이지 (Details) ---
  if (activityDetailId) {
    return (
      <div className="animate-fade-in-up flex flex-col min-h-full select-none">
        {/* --- 상단 고정 헤더 --- */}
        <div className="sticky top-0 z-20 w-full bg-white/90 backdrop-blur-md border-b mt-5 border-gray-100 px-6 py-4 md:px-12 md:py-6">
          <button
            onClick={() => setActivityDetailId(null)}
            className="group flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gray-900 transition-all bg-white border border-gray-200 hover:border-gray-400 rounded-full px-4 py-2 shadow-sm hover:shadow-md cursor-pointer"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            목록으로 돌아가기
          </button>
        </div>

        {/* --- 상세 컴포넌트들 --- */}
        <div className="px-6 md:px-12 pt-8 pb-12">
          {activityDetailId === "umc" && <UMCDetail />}
          {activityDetailId === "council" && <CouncilDetail />}
          {activityDetailId === "mathblog" && <CodingBlogDetail />}
        </div>
      </div>
    );
  }

  // --- 리스트 페이지 (Activities) ---
  return (
    <div className="flex flex-col min-h-full px-6 md:px-12 pb-12 pt-6 md:pt-12 select-none">
      {/* 1. 헤더 영역: 아이콘 + 타이틀 + 설명 */}
      <div className="animate-fade-in-up mb-8">
        <div className="flex items-center gap-2 mb-2 text-gray-800">
          <FaUsers className="text-2xl text-green-500" />
          <h3 className="font-bold text-3xl tracking-tight">Activities</h3>
        </div>
        <p className="text-gray-500 text-sm md:text-base leading-relaxed">
          다양한 조직과 커뮤니티에서 소통하며 성장한 기록들입니다.
        </p>
      </div>

      {/* 2. 그리드 레이아웃 적용 (모바일 1열 / 데스크탑 2열) */}
      <div className="animate-fade-in-up grid grid-cols-1 lg:grid-cols-2 gap-6 pb-10">
        {/* 카드 1: UMC */}
        <div className="transform transition duration-300 hover:-translate-y-1">
          <UMCCard onClick={() => setActivityDetailId("umc")} />
        </div>

        {/* 카드 2: 학생회 */}
        <div className="transform transition duration-300 hover:-translate-y-1">
          <CouncilCard onClick={() => setActivityDetailId("council")} />
        </div>

        {/* 카드 3: 수학 블로그 */}
        <div className="transform transition duration-300 hover:-translate-y-1">
          <CodingBlogCard onClick={() => setActivityDetailId("mathblog")} />
        </div>

        {/* 카드 4: 자기계발 (Continuous) */}
        <div className="transform transition duration-300 hover:-translate-y-1">
          <ContinuousCard />
        </div>
      </div>
    </div>
  );
}
