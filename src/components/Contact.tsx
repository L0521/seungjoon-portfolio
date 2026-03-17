import { FaGithub, FaInstagram } from "react-icons/fa";
import { SiTistory } from "react-icons/si";

interface ContactProps {
  isCompact?: boolean;
  hideCopyright?: boolean;
}

export default function Contact({
  isCompact = false,
  hideCopyright = false,
}: ContactProps) {
  return (
    <div
      className={`flex flex-col ${
        isCompact ? "gap-2 p-0 w-full" : "gap-4 w-full p-5 md:px-2"
      }`}
    >
      {/* 1. 개인 정보 영역 */}
      <ul
        className={`${
          isCompact ? "flex-col gap-0.5" : "-mt-2 flex-col gap-1"
        } flex text-sm text-gray-600`}
      >
        <li className="flex items-start gap-2 select-none">
          <span className="shrink-0 text-xs mt-0.5">🏫</span>
          <span
            className={`${isCompact ? "text-[10px] leading-tight" : ""} tracking-tight whitespace-break-spaces`}
          >
            Math & CS (Dual Degree), HUFS
          </span>
        </li>
        <li className="flex items-center gap-2">
          <span className="shrink-0 select-none text-xs">📧</span>
          <span className={isCompact ? "text-[10px]" : ""}>
            sj020521@naver.com
          </span>
        </li>
        <li className="flex items-center gap-2">
          <span className="shrink-0 select-none text-xs">📞</span>
          <span className={`${isCompact ? "text-[10px]" : ""} tracking-wide`}>
            010-9191-3396
          </span>
        </li>
      </ul>
      {/* 2. 소셜 아이콘 영역 */}
      <div className={`flex ${isCompact ? "gap-3" : "gap-5"} justify-center`}>
        <a
          href="https://github.com/L0521"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-900 transition-colors transform hover:scale-110"
          title="GitHub"
        >
          <FaGithub size={isCompact ? 18 : 22} />
        </a>
        <a
          href="https://www.instagram.com/li.s_j/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-pink-500 transition-colors transform hover:scale-110"
          title="Instagram"
        >
          <FaInstagram size={isCompact ? 18 : 22} />
        </a>
        <a
          href="https://untitled-coding.tistory.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-orange-500 transition-colors transform hover:scale-110"
          title="Tistory"
        >
          <SiTistory size={isCompact ? 15 : 18} />
        </a>
      </div>

      {/* 3. 카피라이트 영역 */}
      {!hideCopyright && (
        <div
          className={`${isCompact ? "-mt-2" : "-mt-1"} text-center select-none`}
        >
          <p
            className={`${
              isCompact ? "text-[9px]" : "text-[10px]"
            } text-gray-400 font-medium tracking-tight`}
          >
            © 2026. SeungJoon Lee. All rights reserved.
          </p>
        </div>
      )}
    </div>
  );
}
