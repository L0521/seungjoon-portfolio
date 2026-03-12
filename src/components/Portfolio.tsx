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
    <div className="flex justify-center items-center min-h-screen bg-[#f3f4f6] px-4 py-8 md:p-0 md:h-screen md:overflow-hidden [@media(max-height:768px)]:h-auto [@media(max-height:768px)]:overflow-visible [@media(max-height:768px)]:py-12">
      <div className="flex flex-col-reverse md:flex-row w-full max-w-6xl md:h-[85vh] [@media(max-height:768px)]:h-auto bg-white md:rounded-3xl md:shadow-2xl overflow-hidden border border-gray-100">
        {/* --- 왼쪽 영역 사이드바 --- */}
        <div className="w-full md:w-[320px] lg:w-[360px] shrink-0 flex flex-col md:p-10 bg-gray-50 h-auto md:h-full [@media(max-height:768px)]:hidden hidden md:flex border-t md:border-t-0 md:border-r border-gray-100 justify-between">
          <div>
            <div className="w-full aspect-[3/4] bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 mb-6 md:mb-8 select-none">
              <img
                src={profileImg}
                alt="Profile"
                className="w-full h-full object-cover filter brightness-[0.75]"
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
            {/* 1. 모바일 또는 짧은 화면 네비게이션 바 */}
            <div className="md:hidden [@media(max-height:820px)]:flex flex justify-center origin-bottom w-full px-6 pt-10 pb-4 mb-4 border-b border-gray-100">
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

            {/* 3. 모바일/짧은 화면 공용 하단 레이아웃 (사진 왼쪽, 콘택 오른쪽) */}
            <div className="md:hidden [@media(max-height:820px)]:flex flex items-center justify-between p-6 bg-gray-50 border-t border-gray-100 mt-auto rounded-t-3xl">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0">
                  <img
                    src={profileImg}
                    alt="Profile"
                    className="w-full h-full object-cover filter brightness-[0.80]"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-800">
                    SeungJoon Lee
                  </h4>
                  <p className="text-xs text-gray-500">Developer</p>
                </div>
              </div>
              <div className="flex-1 max-w-[400px]">
                <Contact />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
