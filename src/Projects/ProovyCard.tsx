import { FaChevronRight } from "react-icons/fa";

interface ProovyProps {
  onClick: () => void;
}

export default function ProovyCard({ onClick }: ProovyProps) {
  return (
    <div className="h-full">
      <div
        onClick={() => onClick()}
        style={{ animationDelay: "200ms" }}
        className="h-full relative animate-fade-in-up flex flex-col gap-4 p-6 border rounded-2xl border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all bg-white cursor-pointer group"
      >
        {/* 상단 */}
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
            Proovy
          </h3>
          <span className="text-sm text-gray-500 text-right">2025.12 ~</span>
        </div>

        {/* 설명 */}
        <p className="text-gray-600 leading-relaxed break-keep flex-grow">
          UMC에서 진행한 첫 팀 프로젝트로, 수학 AI 튜터 웹 서비스를 실제 배포를
          목적으로 구현했습니다.
          <span className="font-bold text-gray-800"> 웹페이지 UI / UX</span>를
          React와 Tailwind CSS를 사용하여 구현하는 걸 맡았습니다.
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
            <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm font-medium">
              Zustand
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
