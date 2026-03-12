import { FaChevronRight, FaLeaf } from "react-icons/fa";

interface CSSpringBootProps {
  onClick: () => void;
}

export default function CSSpringBoot({ onClick }: CSSpringBootProps) {
  return (
    <div className="h-full">
      <div
        onClick={() => onClick()}
        style={{ animationDelay: "100ms" }}
        className="h-full relative animate-fade-in-up flex flex-col gap-4 p-6 border rounded-2xl border-gray-200 shadow-sm hover:shadow-md hover:border-green-300 transition-all bg-white cursor-pointer group"
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <FaLeaf className="text-4xl text-green-500 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold text-gray-800 group-hover:text-green-600 transition-colors">
              Spring Boot Study
            </h3>
          </div>
          <span className="text-sm text-gray-500 text-right">2026.03 ~</span>
        </div>
        <p className="text-gray-600 leading-relaxed break-keep flex-grow">
          학술 연합 모임에서 주관하는{" "}
          <span className="font-bold text-gray-800">
            Spring Boot 1기 스터디
          </span>
          에 참여하여 백엔드 개발의 기초와 Java의 깊은 이해를 공부하고 있습니다.
        </p>

        <div className="flex justify-between items-center">
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
              Java
            </span>
            <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
              Spring Boot
            </span>
          </div>

          <div className="absolute bottom-6 right-6 text-gray-300 group-hover:text-green-500 transition-colors">
            <FaChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
}
