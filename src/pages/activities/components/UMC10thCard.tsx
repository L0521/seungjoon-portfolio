import { FaChalkboardTeacher, FaChevronRight } from "react-icons/fa";

interface UMC10thCardProps {
  onClick: () => void;
}

export default function UMC10thCard({ onClick }: UMC10thCardProps) {
  return (
    <div className="h-full">
      <div
        onClick={() => onClick()}
        style={{ animationDelay: "200ms" }}
        className="h-full relative animate-fade-in-up flex flex-col gap-4 p-6 border rounded-2xl border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all bg-white cursor-pointer group"
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <FaChalkboardTeacher className="text-4xl text-blue-500 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
              UMC 10th Web Leader
            </h3>
          </div>
          <span className="text-sm text-gray-500 text-right">2026.03 ~</span>
        </div>
        <p className="text-gray-600 leading-relaxed break-keep flex-grow">
          대학생 연합 동아리 UMC 10기에서{" "}
          <span className="font-bold text-gray-800">Web 파트장</span>으로
          활동하며, 워크북 학습 지도 및 팀 프로젝트 리딩을 담당하고 있습니다.
        </p>

        <div className="flex justify-between items-center">
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
              Leadership
            </span>
            <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
              Mentoring
            </span>
            <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
              Team Project
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
