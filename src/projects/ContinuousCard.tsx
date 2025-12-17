import { FaRocket } from "react-icons/fa";

export default function ContinuousCard() {
  return (
    <div
      style={{ animationDelay: "100ms" }}
      className="animate-fade-in-up flex flex-col gap-4 p-6 border-1 border-dashed border-gray-200 rounded-2xl shadow-sm bg-gray-50 opacity-80 transition-all group"
    >
      <div className="flex justify-between items-end">
        <div className="flex items-center gap-3">
          <FaRocket className="text-2xl text-red-500 group-hover:-translate-y-1 group-hover:rotate-12 transition-transform duration-300" />
          <h3 className="text-xl font-bold text-gray-700">
            새로운 프로젝트 추가 예정
          </h3>
        </div>
        <span className="text-sm text-gray-500">Current</span>
      </div>
      <p className="text-sm text-gray-600 break-keep">
        지금도 다양한 프로젝트에 지속적으로 도전하고 만들어나가고 있습니다!
      </p>
    </div>
  );
}
