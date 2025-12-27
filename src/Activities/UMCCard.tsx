import { FaChalkboardTeacher, FaChevronRight } from "react-icons/fa";

interface UMCCardProps {
  onClick: () => void;
}

export default function UMCCard({ onClick }: UMCCardProps) {
  return (
    <div className="h-full">
      <div
        onClick={() => onClick()}
        style={{ animationDelay: "100ms" }}
        className="relative animate-fade-in-up flex flex-col gap-4 p-6 border rounded-2xl border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all bg-white cursor-pointer group"
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <FaChalkboardTeacher className="text-5xl text-blue-500 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
              UMC 9th Web Challenger
            </h3>
          </div>
          <span className="text-sm text-gray-500 text-right">
            2025.09 ~ 2026.02
          </span>
        </div>
        <p className="text-gray-600 leading-relaxed break-keep">
          대학생 연합 동아리 UMC 활동으로{" "}
          <span className="font-bold text-gray-800">
            {" "}
            워크북 학습 및 지식 아카이빙
          </span>
          과 <span className="font-bold text-gray-800">팀 프로젝트</span>를
          진행했습니다.
        </p>
        <div className="flex justify-between items-center group flex-grow">
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
              Self-Study
            </span>
            <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
              Code Review
            </span>
            <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
              Team Project
            </span>
          </div>

          <div className="mt-3">
            <div className="absolute bottom-6 right-6 text-gray-300 group-hover:text-blue-500 transition-colors">
              <FaChevronRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
