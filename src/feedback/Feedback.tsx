import { useEffect } from "react";
import FeedbackForm from "./FeedbackForm";
import FeedbackItem from "./FeedbackItem";
import { useFeedbackStore } from "../stores/useFeedbackStore";
import { FaRegCommentDots } from "react-icons/fa";
import { useScrollTop } from "../hooks/useScrollTop";

export default function Feedback() {
  const { list, isAdmin, fetchList, loginAdmin, logoutAdmin } =
    useFeedbackStore();
  useScrollTop(fetchList);

  // 초기 데이터 로드
  useEffect(() => {
    fetchList();
  }, [fetchList]);

  const toggleAdminMode = () => {
    if (isAdmin) {
      logoutAdmin();
      alert("관리자 모드 해제");
    } else {
      const input = prompt("관리자 비밀번호:");
      if (input && loginAdmin(input)) {
        alert("관리자 모드 ON");
      } else if (input) {
        alert("비밀번호가 틀렸습니다.");
      }
    }
  };

  return (
    <div className="flex flex-col gap-8 h-full px-6 md:px-12 pb-12 pt-6 md:pt-12 animate-fade-in-up">
      <div className="flex flex-col gap-4">
        {/* 헤더 */}
        <h3
          onClick={toggleAdminMode}
          className="font-bold text-gray-800 text-3xl gap-2 ml-1 mb-2 select-none flex items-center gap-1"
        >
          <FaRegCommentDots className="text-2xl text-purple-500" />
          Feedback Messages{" "}
          <span className="text-purple-600 text-sm align-super">
            {list.length}
          </span>
          {isAdmin && (
            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
              Admin ON
            </span>
          )}
        </h3>

        {/* 피드백 폼 */}
        <FeedbackForm />

        {/* 리스트 */}
        <ul className="grid grid-cols-1 gap-3 select-none">
          {list.map((item, index) => (
            <FeedbackItem key={item.id} item={item} index={index} />
          ))}
          {list.length === 0 && (
            <p className="text-center py-10 text-gray-400 border border-dashed rounded-xl">
              첫 글을 남겨주세요!
            </p>
          )}
        </ul>
      </div>
    </div>
  );
}
