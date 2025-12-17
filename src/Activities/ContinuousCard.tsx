import { FaRunning } from "react-icons/fa";

export default function ContinuousCard() {
  return (
    <div
      style={{ animationDelay: "450ms" }}
      className="animate-fade-in-up flex flex-col gap-4 p-6 border-1 border-dashed rounded-2xl border-gray-200 shadow-sm bg-gray-50 opacity-80 transition-all group"
    >
      <div className="flex justify-between items-end">
        <div className="flex items-center gap-3">
          <FaRunning className="text-2xl text-orange-500 group-hover:-translate-y-1 group-hover:rotate-12 transition-transform duration-300" />
          <h3 className="text-xl font-bold text-gray-700">지속적인 활동</h3>
        </div>
        <span className="text-sm text-gray-500">Current</span>
      </div>
      <p className="text-sm text-gray-600 break-keep">
        제한된 환경에서도 코딩 학습을 지속했고, 전역 이후에도 더더욱 공부와
        활동을 주도적으로 하고 있습니다!
      </p>
    </div>
  );
}
