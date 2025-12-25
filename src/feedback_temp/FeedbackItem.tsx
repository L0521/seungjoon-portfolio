import { useState } from "react";
import {
  FaUserCircle,
  FaTimes,
  FaLock,
  FaUnlock,
  FaCheck,
  FaPen,
} from "react-icons/fa";
import TextareaAutosize from "react-textarea-autosize";
import { useFeedbackStore } from "../stores/useFeedbackStore";
import type { GuestMessage } from "./TypeFeedback";

interface FeedbackItemProps {
  item: GuestMessage;
  index: number;
}

export default function FeedbackItem({ item, index }: FeedbackItemProps) {
  const { isAdmin, deleteFeedback, updateFeedback } = useFeedbackStore();

  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(item.text);

  const canShow = !item.isSecret || isAdmin;

  // 수정 시작 (Edit)
  const startEdit = () => {
    if (!isAdmin) {
      const input = prompt("비밀번호를 입력해주세요.");
      if (input === null) return;
      if (input === item.password) {
        setIsEditing(true);
      } else {
        alert("비밀번호가 일치하지 않습니다.");
      }
    } else {
      setIsEditing(true);
    }
  };

  // 수정 저장 (Update)
  const saveEdit = async () => {
    if (editText.trim() === "") return alert("내용을 입력해주세요.");

    const success = await updateFeedback(item.id, editText);
    if (success) {
      alert("수정되었습니다.");
      setIsEditing(false);
    } else {
      alert("수정 실패");
    }
  };

  // 삭제 (Delete)
  const handleDeleteClick = async () => {
    let passwordInput: string | undefined = undefined;

    if (!isAdmin) {
      const input = prompt("비밀번호를 입력해주세요.");
      if (input === null) return;
      passwordInput = input;
    } else {
      if (!window.confirm("관리자 권한으로 삭제하시겠습니까?")) return;
    }

    // 스토어 삭제 함수 호출
    const result = await deleteFeedback(item.id, passwordInput);

    if (result.success) {
      alert("삭제되었습니다.");
    } else {
      alert(result.message || "삭제 실패");
    }
  };

  return (
    <li
      className={`p-5 rounded-xl border shadow-sm flex gap-4 items-start relative animate-fade-in-up
      ${!canShow ? "bg-gray-50 border-gray-200" : "bg-white border-gray-100"}
      ${item.isSecret && isAdmin ? "border-blue-200 bg-blue-50" : ""}
      opacity-0
    `}
      style={{
        animationDelay: `${(index + 1) * 0.1}s`,
        animationFillMode: "both",
      }}
    >
      <div
        className={`mt-1 text-3xl flex-none ${
          !canShow ? "text-gray-400" : "text-gray-300"
        }`}
      >
        {item.isSecret ? (
          isAdmin ? (
            <FaUnlock className="text-blue-400" />
          ) : (
            <FaLock />
          )
        ) : (
          <FaUserCircle />
        )}
      </div>

      <div className="flex-1 pr-16">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-bold text-gray-900">{item.name}</span>
          <span className="text-xs text-gray-400">
            {item.createdAt && item.createdAt.toDate().toLocaleDateString()}
            {item.updatedAt && (
              <span className="ml-1 text-gray-400">(수정됨)</span>
            )}
          </span>
          {item.isSecret && isAdmin && (
            <span className="text-[10px] bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded font-bold">
              Secret View
            </span>
          )}
        </div>
        {isEditing ? (
          <TextareaAutosize
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="w-full p-2 border border-blue-300 rounded-lg bg-white outline-none resize-none focus:ring-2 focus:ring-blue-100"
          />
        ) : (
          <p
            className={`leading-relaxed whitespace-pre-wrap break-all ${
              canShow ? "text-gray-800" : "text-gray-400"
            }`}
          >
            {canShow ? item.text : "비공개 메시지입니다."}
          </p>
        )}
      </div>

      {/* 버튼 그룹 */}
      <div className="absolute top-4 right-4 flex gap-2">
        {isEditing ? (
          // 수정 모드
          <div>
            <button
              onClick={saveEdit}
              className="text-gray-300 hover:text-green-600 p-1"
              title="저장"
            >
              <FaCheck size={15} />
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="text-gray-300 hover:text-red-500 p-1"
              title="취소"
            >
              <FaTimes size={17} />
            </button>
          </div>
        ) : (
          // 일반 모드
          <div>
            <button
              onClick={startEdit}
              className="text-gray-300 hover:text-blue-500 p-1 transition-colors"
              title="수정"
            >
              <FaPen size={15} />
            </button>
            <button
              onClick={handleDeleteClick}
              className="text-gray-300 hover:text-red-500 p-1 transition-colors"
              title="삭제"
            >
              <FaTimes size={17} />
            </button>
          </div>
        )}
      </div>
    </li>
  );
}
