import { FaChevronRight, FaPenNib } from "react-icons/fa";

interface CodingBlogCardProps {
  onClick: () => void;
}

export default function CodingBlogCard({ onClick }: CodingBlogCardProps) {
  return (
    <div>
      <div
        onClick={() => onClick()}
        style={{ animationDelay: "300ms" }}
        className="relative animate-fade-in-up flex h-full flex-col gap-4 p-6 border rounded-2xl border-gray-200 shadow-sm hover:shadow-md hover:border-purple-300 transition-all bg-white cursor-pointer group"
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <FaPenNib className="text-2xl text-purple-500 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold text-gray-800 group-hover:text-purple-700 transition-colors">
              코딩 블로그 운영
            </h3>
          </div>
          <span className="text-sm text-gray-500">2022.01 ~</span>
        </div>
        <p className="text-gray-600 leading-relaxed break-keep">
          <span className="font-bold text-gray-800">수학과 연계</span>
          하여 공부한 내용을 바탕으로 코드를 설명하거나 개발과 관련된 블로그
          운영을 하고 있습니다.
        </p>

        <div className="flex justify-between items-center group">
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
              Writing
            </span>
            <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
              Algorithm
            </span>
            <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
              Trouble Shooting
            </span>
          </div>
          <div className="mt-3">
            <div className="absolute bottom-6 right-6 text-gray-300 group-hover:text-blue-500 transition-colors">
              <FaChevronRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
