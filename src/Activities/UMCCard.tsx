import { FaChalkboardTeacher, FaChevronRight } from "react-icons/fa";

interface UMCCardProps {
  onClick: () => void;
}

export default function UMCCard({ onClick }: UMCCardProps) {
  return (
    <div
      onClick={() => onClick()}
      className="animate-fade-in-up flex flex-col gap-4 p-6 border rounded-2xl border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all bg-white cursor-pointer group"
    >
      <div className="flex justify-between items-end">
        <div className="flex items-center gap-3">
          <FaChalkboardTeacher className="text-2xl text-blue-500 group-hover:scale-110 transition-transform" />
          <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
            UMC 9th Web Challenger
          </h3>
        </div>
        <span className="text-sm text-gray-500">2025.09 ~ </span>
      </div>
      <p className="text-gray-600 leading-relaxed break-keep">
        대학생 연합 동아리 UMC 활동으로 9월부터 12월까지 간 매주 워크북 학습 및
        <span className="font-bold text-gray-800">
          {" "}
          Notion을 활용한 지식 아카이빙
        </span>
        을 진행했습니다.
      </p>

      <div className="flex justify-between items-center group">
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
            Self-Study
          </span>
          <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
            Code Review
          </span>
        </div>

        <div className="mt-3">
          <p className="text-sm text-gray-300 group-hover:text-gray-400">
            <FaChevronRight />
          </p>
        </div>
      </div>
    </div>
  );
}
