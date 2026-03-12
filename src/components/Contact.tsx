import { FaGithub, FaInstagram } from "react-icons/fa";
import { SiTistory } from "react-icons/si";

export default function Contact() {
  return (
    <div className="flex flex-col gap-4 w-full p-5 md:px-2">
      {/* 1. 개인 정보 영역 */}
      <ul className="-mt-2 flex flex-col gap-1 text-sm text-gray-600">
        <li className="flex items-start gap-2 select-none">
          <span className="shrink-0">🏫</span>
          <span>Math & CS (Dual Degree), HUFS</span>
        </li>
        <li className="flex items-center gap-2">
          <span className="shrink-0 select-none">📧</span>
          sj020521@naver.com
        </li>
        <li className="flex items-center gap-2">
          <span className="shrink-0 select-none">📞</span>
          <span className="tracking-wide">010-9191-3396</span>
        </li>
      </ul>
      {/* 2. 소셜 아이콘 영역 */}
      <div className="flex gap-5 justify-center">
        <a
          href="https://github.com/L0521"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-900 transition-colors transform hover:scale-110"
          title="GitHub"
        >
          <FaGithub size={22} />
        </a>
        <a
          href="https://www.instagram.com/li.s_j/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-pink-500 transition-colors transform hover:scale-110"
          title="Instagram"
        >
          <FaInstagram size={22} />
        </a>
        <a
          href="https://untitled-coding.tistory.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-orange-500 transition-colors transform hover:scale-110"
          title="Tistory"
        >
          <SiTistory size={18} />
        </a>
      </div>

      {/* 3. 카피라이트 영역 */}
      <div className="-mt-1 text-center select-none">
        <p className="text-[10px] text-gray-400 font-medium tracking-tight">
          © 2026. SeungJoon Lee. All rights reserved.
        </p>
      </div>
    </div>
  );
}
