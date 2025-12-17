import {
  FaUserCircle,
  FaTimes,
  FaLock,
  FaUnlock,
  FaCheck,
  FaPen,
} from "react-icons/fa";
import type { FeedbackItemProps } from "./TypeFeedback";
import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

export default function FeedbackItem({
  item,
  isAdmin,
  onDelete,
  onUpdate,
}: FeedbackItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(item.text);

  const canShow = !item.isSecret || isAdmin;

  // 수정 버튼 클릭 시
  const startEdit = () => {
    if (!isAdmin) {
      const input = prompt("비밀번호를 입력해주세요.");
      if (input === null) {
        return;
      } else if (input === item.password) {
        setIsEditing(true);
        return;
      } else {
        alert("비밀번호가 일치하지 않습니다.");
      }
    }
  };

  // 저장 버튼 클릭 시
  const saveEdit = () => {
    if (editText.trim() === "") return alert("내용을 입력해주세요.");
    onUpdate(item.id, editText); // 부모에게 변경 요청
    setIsEditing(false);
  };

  return (
    <li
      className={`p-5 rounded-xl border shadow-sm flex gap-4 items-start relative
      ${!canShow ? "bg-gray-50 border-gray-200" : "bg-white border-gray-100"}
      ${item.isSecret && isAdmin ? "border-blue-200 bg-blue-50" : ""}
    `}
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
            {canShow ? item.text : "비공개 글입니다."}
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
              onClick={() => onDelete(item.id, item.password)}
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
