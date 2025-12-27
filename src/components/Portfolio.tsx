import Nav from "./Nav";
import AboutMe from "./AboutMe";
import Project from "./Project";
import profileImg from "../assets/profile.jpeg";
import Activities from "./Activities";
import Contact from "./Contact";
import Feedback from "../feedback/Feedback";
import { useMenuStore } from "../stores/useMenuStore";

export default function Portfolio() {
  const { activeMenu } = useMenuStore();

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f3f4f6] px-4 py-8 md:p-0 md:h-screen md:overflow-hidden">
      <div className="flex flex-col-reverse md:flex-row w-full max-w-6xl md:h-[85vh] bg-white md:rounded-3xl md:shadow-2xl overflow-hidden border border-gray-100">
        {/* --- 왼쪽 영역 사이드바 --- */}
        <div className="w-full md:w-[320px] lg:w-[360px] shrink-0 flex flex-col md:p-10 bg-gray-50 h-auto md:h-full border-t md:border-t-0 md:border-r border-gray-100 justify-between">
          <div>
            <div className="w-full aspect-[3/4] bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 mb-6 md:mb-8 select-none">
              <img
                src={profileImg}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden md:flex flex-col py-2">
              <Nav />
            </div>
          </div>

          <div className="mt-8 md:mt-0 pt-6 border-t border-gray-200 border-dashed">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest  text-center select-none">
              Contact
            </h3>
            <Contact />
          </div>
        </div>

        {/* --- 오른쪽 영역 본문 --- */}
        <div className="flex-1 h-full md:overflow-y-auto bg-white scroll-smooth custom-scrollbar">
          <div className="max-w-[760px] mx-auto min-h-full flex flex-col">
            {/* 1. 모바일 네비게이션 바 (화면 작을 때만 표시) */}
            <div className="md:hidden flex justify-center origin-bottom w-full px-6 pt-10 pb-4 mb-4 border-b border-gray-100">
              <Nav />
            </div>

            {/* 2. 메인 콘텐츠 영역 */}
            <div className="flex-1 flex flex-col">
              {/* Case A: 세로 중앙 정렬이 필요한 페이지 (About) */}
              {activeMenu === "About" && (
                <div className="flex-1 flex flex-col justify-center p-6 md:p-0">
                  <AboutMe />
                </div>
              )}

              {/* Case B: 상단부터 스크롤이 필요한 페이지 (Projects, Activities, Feedback) */}
              {activeMenu === "Projects" && <Project />}
              {activeMenu === "Activities" && <Activities />}
              {activeMenu === "Feedback" && <Feedback />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
