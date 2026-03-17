import { FaArrowLeft, FaUsers } from "react-icons/fa"; // 아이콘 추가
import UMCCard from "../Activities/UMCCard";
import UMC10thCard from "../Activities/UMC10thCard";
import CouncilCard from "../Activities/CouncilCard";
import CSSpringBoot from "../Activities/CSSpringBoot";
import CodingBlogCard from "../Activities/CodingBlogCard";
import ContinuousCard from "../Activities/ContinuousCard";
import UMCDetail from "../Activities/Details/UMCDetail";
import UMC10thDetail from "../Activities/Details/UMC10thDetail";
import CouncilDetail from "../Activities/Details/CouncilDetail";
import CSSpringBootDetail from "../Activities/Details/CSSpringBootDetail";
import CodingBlogDetail from "../Activities/Details/CodingBlogDetail";
import { useActivityStore } from "../stores/useActivityStore";
import { useModalReset } from "../hooks/useModalReset";
import { useScrollTop } from "../hooks/useScrollTop";
import { useHeaderVisible } from "../hooks/useHeaderVisible";

export default function Activities() {
  const {
    activityDetailId,
    setActivityDetailId,
    listScrollTrigger,
    triggerListScroll,
    reset,
  } = useActivityStore();
  useModalReset(reset);

  // 상세 진입 시 스크롤
  useScrollTop(activityDetailId);
  // 목록 복귀 시 스크롤 (주스탠드 트리거 감시)
  useScrollTop(listScrollTrigger);

  const {
    visible: isHeaderVisible,
    isTop,
    isReady,
  } = useHeaderVisible(activityDetailId);

  // --- 상세 페이지 (Details) ---
  if (activityDetailId) {
    return (
      <div className="flex flex-col min-h-full select-none relative">
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
              setActivityDetailId(null);
            }}
            className="group flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-all bg-white border border-gray-200 hover:border-gray-400 rounded-full px-4 py-2 shadow-sm cursor-pointer whitespace-nowrap"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            목록으로 돌아가기
          </button>
        </div>

        {/* --- 상세 컴포넌트들 --- */}
        <div className="animate-fade-in-up px-6 md:px-12 pt-8 pb-12">
          {activityDetailId === "umc" && <UMCDetail />}
          {activityDetailId === "umc10" && <UMC10thDetail />}
          {activityDetailId === "council" && <CouncilDetail />}
          {activityDetailId === "springboot" && <CSSpringBootDetail />}
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
        {[
          {
            id: "umc",
            date: "2025.09",
            component: <UMCCard onClick={() => setActivityDetailId("umc")} />,
          },
          {
            id: "umc10",
            date: "2026.02",
            component: (
              <UMC10thCard onClick={() => setActivityDetailId("umc10")} />
            ),
          },
          {
            id: "springboot",
            date: "2026.03",
            component: (
              <CSSpringBoot onClick={() => setActivityDetailId("springboot")} />
            ),
          },
          {
            id: "council",
            date: "2023.03",
            component: (
              <CouncilCard onClick={() => setActivityDetailId("council")} />
            ),
          },
          {
            id: "mathblog",
            date: "2022.01",
            component: (
              <CodingBlogCard onClick={() => setActivityDetailId("mathblog")} />
            ),
          },
        ]
          .sort((a, b) => b.date.localeCompare(a.date))
          .map((activity) => (
            <div
              key={activity.id}
              className="h-full transform transition duration-300 hover:-translate-y-1"
            >
              {activity.component}
            </div>
          ))}

        {/* 카드 4: 자기계발 (Continuous) - 항상 마지막 */}
        <div className="h-full transform transition duration-300 hover:-translate-y-1">
          <ContinuousCard />
        </div>
      </div>
    </div>
  );
}
