import Nav from "./Nav";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import profileImg from "../assets/profile.jpeg";
import Activities from "./Activities";
import Contact from "./Contact";
import Feedback from "../feedback/Feedback";
import { useMenuStore } from "../stores/useMenuStore";
import { useScrollTop } from "../hooks/useScrollTop";

export default function Portfolio() {
  const { activeMenu } = useMenuStore();

  // 메뉴 변경 시 스크롤 초기화 (About <-> Feedback 등)
  useScrollTop(activeMenu);

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f3f4f6] px-4 py-8 sm:p-0 sm:h-screen sm:overflow-hidden [@media(max-height:768px)]:h-auto [@media(max-height:768px)]:overflow-visible [@media(max-height:768px)]:py-12">
      <div className="flex flex-col-reverse sm:flex-row w-full max-w-6xl sm:h-[85vh] [@media(max-height:768px)]:h-auto bg-white sm:rounded-3xl sm:shadow-2xl sm:overflow-hidden border border-gray-100">
        {/* --- 왼쪽 영역 사이드바 --- */}
        <div className="w-full sm:w-[320px] lg:w-[360px] shrink-0 flex flex-col sm:p-6 md:p-10 bg-gray-50 h-auto sm:h-full [@media(max-height:768px)]:hidden hidden sm:flex border-t sm:border-t-0 sm:border-r border-gray-100 justify-between">
          <div>
            <div className="w-full aspect-[3/4] bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 mb-6 md:mb-8 select-none">
              <img
                src={profileImg}
                alt="Profile"
                className="w-full h-full object-cover filter brightness-[0.75]"
              />
            </div>
            <div className="hidden sm:flex flex-col py-2">
              <Nav />
            </div>
          </div>

          <div className="mt-8 sm:mt-0 pt-6 border-t border-gray-200 border-dashed">
            <h3 className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest text-center select-none">
              Contact
            </h3>
            <Contact />
          </div>
        </div>

        {/* --- 오른쪽 영역 본문 --- */}
        <div className="flex-1 h-full sm:overflow-y-auto bg-white scroll-smooth custom-scrollbar">
          <div className="max-w-[760px] mx-auto min-h-full flex flex-col">
            {/* 1. 모바일 또는 짧은 화면 네비게이션 바 */}
            <div className="sm:hidden [@media(max-height:820px)]:flex flex justify-center origin-bottom w-full px-6 pt-10 pb-4 mb-4 border-b border-gray-100">
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
              {activeMenu === "Projects" && <Projects />}
              {activeMenu === "Activities" && <Activities />}
              {activeMenu === "Feedback" && <Feedback />}
            </div>

            {/* 3. 모바일/짧은 화면 공용 하단 레이아웃 (사진 왼쪽, 콘택 오른쪽) */}
            <div className="flex sm:hidden [@media(max-height:768px)]:flex flex-col bg-gray-50 border-t border-gray-100 mt-auto rounded-t-3xl border-gray-200">
              <div className="flex items-center justify-between gap-6 px-8 py-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0">
                    <img
                      src={profileImg}
                      alt="Profile"
                      className="w-full h-full object-cover filter brightness-[0.80]"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-800 leading-tight">
                      SeungJoon Lee
                    </h4>
                    <p className="text-[11px] text-gray-500">Developer</p>
                  </div>
                </div>
                <div className="flex-1 max-w-[280px]">
                  <Contact isCompact={true} hideCopyright={true} />
                </div>
              </div>
              {/* 하단 중앙 저작권 */}
              <div className="pb-6 text-center select-none border-t border-gray-100 pt-2 bg-gray-50/50">
                <p className="text-[10px] text-gray-400 font-medium tracking-tight">
                  © 2026. SeungJoon Lee. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
