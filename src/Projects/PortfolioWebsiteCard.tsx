import { FaChevronRight } from "react-icons/fa";

interface PortfolioWebsiteProps {
  onClick: () => void;
}

export default function PortfolioWebsiteCard({
  onClick,
}: PortfolioWebsiteProps) {
  return (
    <div>
      {/* 포트폴리오 웹사이트 카드 */}
      <div
        onClick={() => onClick()}
        className="animate-fade-in-up flex flex-col gap-4 p-6 border rounded-2xl border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-shadow bg-white cursor-pointer group"
      >
        {/* 상단 */}
        <div className="flex justify-between items-end">
          <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
            Portfolio Website
          </h3>
          <span className="text-sm text-gray-500">2024.12 ~</span>
        </div>

        {/* 설명 */}
        <p className="text-gray-600 leading-relaxed break-keep">
          군 복무 중 틈틈이 기획하여 제작한 첫 개인 프로젝트이자 반응형 웹
          포트폴리오입니다. UMC에서 배운 내용을 바탕으로
          <span className="font-bold text-gray-800"> React와 Tailwind CSS</span>
          를 활용하여 직접 기획부터 디자인, 개발까지 수행했습니다.
        </p>

        {/* 기술 스택 */}
        <div className="flex justify-between items-center group">
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
            <span className="px-3 py-1 bg-yellow-50 text-yellow-600 rounded-full text-sm font-medium">
              Firebase
            </span>
            <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm font-medium">
              Zustand
            </span>
          </div>
          <div className="mt-3">
            <p className="text-sm text-gray-300 group-hover:text-gray-400">
              <FaChevronRight />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
