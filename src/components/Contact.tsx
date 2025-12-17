import { FaGithub, FaInstagram } from "react-icons/fa";
import { SiTistory } from "react-icons/si";

export default function Contact() {
  return (
    <div className="h-full bg-gray-100 rounded-2xl flex items-center justify-center border-1 border-gray-200">
      <span className="flex flex-col gap-2">
        <ul className="text-sm font-light">
          <li>🏫 Department of Mathematics, HUFS</li>
          <li>📧 E. sj020521@naver.com</li>
          <li>📞 Tel. 010-9191-3396</li>
        </ul>
        <div className="flex gap-3 justify-center font-bold">
          <a
            href="https://github.com/L0521"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:text-pink-500 transition-colors"
          >
            <FaGithub size={25} />
          </a>
          <a
            href="https://www.instagram.com/li.s_j/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:text-pink-500 transition-colors"
          >
            <FaInstagram size={25} />
          </a>
          <a
            href="https://untitled-coding.tistory.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:text-pink-500 transition-colors"
          >
            <SiTistory size={22} />
          </a>
        </div>
      </span>
    </div>
  );
}
