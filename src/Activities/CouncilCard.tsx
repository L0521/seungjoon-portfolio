import { FaChevronRight, FaUserFriends } from "react-icons/fa";

interface CouncilCardProps {
  onClick: () => void;
}

export default function CouncilCard({ onClick }: CouncilCardProps) {
  return (
    <div className="h-full">
      <div
        onClick={() => onClick()}
        style={{ animationDelay: "200ms" }}
        className="relative animate-fade-in-up h-full flex flex-col gap-4 p-6 border rounded-2xl border-gray-200 shadow-sm hover:shadow-md hover:border-green-300 transition-all bg-white cursor-pointer group "
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <FaUserFriends className="text-2xl text-green-500 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold text-gray-800 group-hover:text-green-600 transition-colors whitespace-nowrap">
              학과 1학년 대표
            </h3>
          </div>
          <span className="text-sm text-gray-500 text-right">
            2023.03 ~ 2023.12
          </span>
        </div>
        <p className="text-gray-600 leading-relaxed break-keep flex-grow md:mt-6">
          학과 행사 기획 및 운영,
          <span className="font-bold text-gray-800">
            {" "}
            책임감 있는 예산 관리와 소통
          </span>
          을 통해 조직의 목표를 달성했습니다.
        </p>

        <div className="flex justify-between items-center group">
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
              Leadership
            </span>
            <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
              Communication
            </span>
          </div>

          <div className="mt-3">
            <div className="absolute bottom-6 right-6 text-gray-300 group-hover:text-green-500 transition-colors">
              <FaChevronRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
