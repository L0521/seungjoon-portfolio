import { FaRocket } from "react-icons/fa";

export default function ContinuousCard() {
  return (
    <div className="h-full">
      <div
        style={{ animationDelay: "200ms" }}
        className="relative animate-fade-in-up flex flex-col h-full justify-center items-center text-center gap-4 p-8 border-2 border-dashed border-gray-300 rounded-2xl bg-gray-50/50 hover:bg-gray-50 transition-colors group overflow-hidden cursor-default select-none"
      >
        {/* 배경 워터마크 */}
        <div className="absolute -bottom-6 -right-6 text-[10rem] text-gray-200/50 -rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-transform duration-500 z-0">
          <FaRocket />
        </div>

        {/* 콘텐츠 */}
        <div className="relative z-10 flex flex-col items-center gap-3">
          <div className="p-4 bg-white rounded-full shadow-sm border border-gray-100 transition-transform duration-300">
            <FaRocket className="text-3xl text-red-400 group-hover:text-red-500 transition-colors" />
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-700 mb-1">
              Coming Soon
            </h3>
            <p className="text-sm text-gray-500 break-keep max-w-[200px] mx-auto leading-relaxed">
              새로운 프로젝트와 활동들이
              <br />곧 업데이트될 예정입니다!
            </p>
          </div>

          <span className="inline-block px-3 py-1 bg-gray-200 text-gray-600 text-xs font-bold rounded-full mt-2">
            In Progress
          </span>
        </div>
      </div>
    </div>
  );
}
