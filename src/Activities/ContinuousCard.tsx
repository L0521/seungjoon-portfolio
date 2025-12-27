import { FaRunning } from "react-icons/fa";

export default function ContinuousCard() {
  return (
    <div className="h-full">
      <div
        style={{ animationDelay: "200ms" }}
        className="relative animate-fade-in-up flex flex-col h-full justify-center items-center text-center gap-4 p-8 border-2 border-dashed border-gray-300 rounded-2xl bg-gray-50/50 hover:bg-gray-50 transition-colors group overflow-hidden cursor-default"
      >
        {/* 배경 워터마크 */}
        <div className="absolute -bottom-6 -right-6 text-[10rem] text-gray-200/50 -rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-transform duration-500 z-0">
          <FaRunning />
        </div>

        {/* 콘텐츠 */}
        <div className="relative z-10 flex flex-col items-center gap-3">
          <div className="p-4 bg-white rounded-full shadow-sm border border-gray-100 transition-transform duration-300">
            <FaRunning className="text-3xl text-orange-500 group-hover:text-orange-600 transition-colors" />
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-700 mb-1">Keep Going</h3>
            <p className="text-sm text-gray-500 break-keep max-w-[200px] mx-auto leading-relaxed">
              성장하기 위해 꾸준히 공부하고,
              <br />
              다양한 활동들을 진행하고 있습니다.
            </p>
          </div>

          <span className="inline-block px-3 py-1 bg-gray-200 text-gray-600 text-xs font-bold rounded-full mt-2">
            Always Active
          </span>
        </div>
      </div>
    </div>
  );
}
