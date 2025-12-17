import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import TextareaAutosize from "react-textarea-autosize";
import type { FeedbackFormProps } from "./TypeFeedback";

export default function FeedbackForm({ onSubmit }: FeedbackFormProps) {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSecret, setIsSecret] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || !nickname.trim() || !password.trim()) {
      alert("모든 칸에 입력해주세요.");
      return;
    }
    // 부모에게 데이터 전달
    onSubmit({ name: nickname, password, text: message, isSecret });

    // 초기화
    setMessage("");
    setNickname("");
    setPassword("");
    setIsSecret(false);
  };

  return (
    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="flex gap-3">
          <TextareaAutosize
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="피드백이나 조언을 남겨주세요!"
            className="w-full p-3 resize-none border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm"
          />
        </div>

        <div className="flex gap-3">
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="닉네임(익명)"
            className="w-1/2 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호(삭제용)"
            className="w-1/2 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-md"
          >
            <FaPaperPlane />
          </button>
        </div>

        <div className="flex justify-end mt-1">
          <label className="flex items-center cursor-pointer gap-2 select-none">
            <span
              className={`text-sm font-medium ${
                isSecret ? "text-blue-600" : "text-gray-400"
              }`}
            >
              {isSecret ? "비공개" : "전체 공개"}
            </span>
            <div className="relative">
              <input
                type="checkbox"
                className="sr-only"
                checked={isSecret}
                onChange={() => setIsSecret(!isSecret)}
              />
              <div
                className={`block w-10 h-6 rounded-full transition-colors ${
                  isSecret ? "bg-blue-600" : "bg-gray-300"
                }`}
              ></div>
              <div
                className={`dot absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform transform ${
                  isSecret ? "translate-x-4" : ""
                }`}
              ></div>
            </div>
          </label>
        </div>
      </form>
    </div>
  );
}
