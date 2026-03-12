import { FaChevronRight } from "react-icons/fa";

interface HarangCardProps {
  onClick: () => void;
}

export default function HarangCard({ onClick }: HarangCardProps) {
  return (
    <div className="h-full">
      <div
        onClick={() => onClick()}
        style={{ animationDelay: "100ms" }}
        className="h-full relative animate-fade-in-up flex flex-col gap-4 p-6 border rounded-2xl border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all bg-white cursor-pointer group"
      >
        {/* 상단 */}
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
            하랑
          </h3>
          <span className="text-sm text-gray-500 text-right">
            2026.01 ~ 2026.04
          </span>
        </div>

        {/* 설명 */}
        <p className="text-gray-600 leading-relaxed break-keep flex-grow">
          1365 웹페이지를 리브랜딩하여, 특정 대상을 타겟으로 UI/UX를 설정한 봉사
          신청 웹페이지를 제작하였습니다.
          <span className="font-bold text-gray-800"> React와 Spring Boot</span>
          를 활용하여 첫 풀스택 프로젝트를 진행했습니다.
        </p>

        {/* 기술 스택 */}
        <div className="flex justify-between items-end">
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
              React
            </span>
            <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
              TypeScript
            </span>
            <span className="px-3 py-1 bg-sky-50 text-sky-600 rounded-full text-sm font-medium">
              Tailwind CSS
            </span>
            <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm font-medium">
              Spring Boot
            </span>
          </div>

          <div className="absolute bottom-6 right-6 text-gray-300 group-hover:text-blue-500 transition-colors">
            <FaChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
}
