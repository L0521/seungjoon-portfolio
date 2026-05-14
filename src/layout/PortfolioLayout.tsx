import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import Nav from "./Nav";
import Contact from "./Contact";
import profileImg from "../assets/profile.jpeg";

export default function PortfolioLayout() {
  const { pathname } = useLocation();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f3f4f6] px-4 py-8 md:p-0 md:h-screen md:overflow-hidden">
      <div className="flex flex-col-reverse md:flex-row w-full max-w-6xl md:h-[85vh] bg-white md:rounded-3xl md:shadow-2xl md:overflow-hidden border border-gray-100">
        {/* --- 왼쪽 영역 사이드바 --- */}
        <div className="w-full md:w-[340px] shrink-0 flex flex-col p-6 md:p-10 bg-gray-50 h-auto md:h-full hidden md:flex border-r border-gray-100 justify-between">
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

          <div className="mt-8 sm:mt-0 pt-6 border-t border-gray-200 border-dashed">
            <h3 className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest text-center select-none">
              Contact
            </h3>
            <Contact />
          </div>
        </div>

        {/* --- 오른쪽 영역 본문 --- */}
        <div
          ref={scrollRef}
          className="flex-1 h-full md:overflow-y-auto bg-white scroll-smooth custom-scrollbar"
        >
          <div className="max-w-[760px] mx-auto min-h-full flex flex-col">
            {/* 1. 모바일 네비게이션 바 */}
            <div className="flex md:hidden justify-center origin-bottom w-full px-6 pt-10 pb-4 mb-4 border-b border-gray-100">
              <Nav />
            </div>

            {/* 2. 메인 콘텐츠 영역 */}
            <div className="flex-1 flex flex-col">
              <Outlet />
            </div>

            {/* 3. 모바일 공용 하단 레이아웃 */}
            <div className="flex md:hidden flex-col bg-gray-50 border-t border-gray-100 mt-auto rounded-t-3xl border-gray-200">
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
