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

  // issue 1
  return (
    <div className="flex justify-center min-h-screen items-center gap-8 px-4 py-10 md:px-16 md:py-20 bg-white">
      <div className="flex flex-col-reverse md:flex-row w-full max-w-5xl min-h-[600px] h-auto gap-8 p-4 items-center md:items-start">
        {/* 왼쪽 영역 */}
        <div className="w-full md:w-1/3 flex flex-col gap-4 h-full md:sticky md:top-20">
          {/* 사진 영역 */}
          <div className="flex-1 bg-gray-100 rounded-2xl flex items-center justify-center border-2 border-gray-200 brightness-100">
            <img
              src={profileImg}
              alt="Profile"
              className="w-full h-full object-cover rounded-2xl border border-gray-300"
            />
          </div>
          {/* 연락처 영역 */}
          <div className="h-[140px] flex-none w-full">
            <Contact />
          </div>
        </div>

        {/* 오른쪽 영역 */}
        <div className="w-full md:w-2/3 flex flex-col h-full">
          <div className="mb-6">
            <Nav />
          </div>

          <div className="flex-1 flex flex-col justify-center">
            {activeMenu === "About Me" && <AboutMe />}
            {activeMenu === "Activities" && <Activities />}
            {activeMenu === "Projects" && <Project />}
            {activeMenu === "Feedback" && <Feedback />}
          </div>
        </div>
      </div>
    </div>
  );
}
