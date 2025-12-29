import { FaExternalLinkAlt, FaGithub, FaReact } from "react-icons/fa";
import { SiFirebase, SiTailwindcss } from "react-icons/si";

export default function PortfolioWebsiteDetail() {
  return (
    <div className="animate-fade-in-up flex flex-col gap-10 pb-4">
      {/* 타이틀 영역 */}
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-3xl font-bold text-gray-900">Portfolio Website</h2>
        <div className="flex items-center gap-2 mt-2">
          <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded">
            Period
          </span>
          <p className="text-sm text-gray-500">2024.12 ~ Present</p>
        </div>
      </div>

      <div className="flex flex-col gap-12 text-gray-700 leading-relaxed break-keep">
        {/* 프로젝트 개요 */}
        <div>
          <h3 className="flex items-center text-xl font-bold text-gray-900 mb-6 border-l-4 border-blue-500 pl-3">
            📌 프로젝트 개요
          </h3>

          <div className="flex flex-col gap-4">
            <p className="text-lg text-gray-700">
              군 복무 때부터 기획하여 전역 후 제작한{" "}
              <strong>첫 개인 포트폴리오 웹사이트</strong>입니다. 기존의 정적인
              이력서 형식을 탈피하고, 사용자 경험(UX)을 고려하여 앱처럼 부드럽게
              작동하는
              <span className="text-blue-600 font-bold">
                {" "}
                Single Page Application (SPA)
              </span>
              를 목표로 개발했습니다.
            </p>

            <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
              <p className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                🎯 Key Goals
              </p>
              <ul className="list-disc list-inside text-blue-800 text-sm space-y-1">
                <li>별도의 새로고침 없는 부드러운 페이지 전환 구현</li>
                <li>모바일과 데스크탑 모두를 지원하는 반응형 웹 디자인</li>
                <li>확장 가능한 컴포넌트 구조 설계</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 기술 스택 */}
        <div>
          <h3 className="flex items-center text-xl font-bold text-gray-900 mb-6 border-l-4 border-green-500 pl-3">
            🛠 사용 기술 및 선정 이유
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Tech 1: React */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:border-blue-400 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <FaReact className="text-3xl text-blue-400" />
                <h4 className="font-bold text-gray-900 hover:border-blue-400">
                  React & TypeScript
                </h4>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                컴포넌트 기반 아키텍처로{" "}
                <span className="font-bold text-gray-800">재사용성</span>을
                높이고, TypeScript를 도입하여 개발 단계에서{" "}
                <span className="font-bold text-gray-800">
                  타입 에러를 방지
                </span>
                해 안정성을 확보했습니다.
              </p>
            </div>

            {/* Tech 2: Tailwind */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:border-sky-400 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <SiTailwindcss className="text-3xl text-sky-400" />
                <h4 className="font-bold text-gray-900 hover:border-sky-400 ">
                  Tailwind CSS
                </h4>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Utility-First 방식으로 스타일링 시간을 단축하고, 직관적인
                클래스명을 통해{" "}
                <span className="font-bold text-gray-800">
                  모바일 반응형 디자인
                </span>
                을 효율적으로 구현했습니다.
              </p>
            </div>

            {/* Tech 3: Firebase 카드 */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:border-yellow-400 transition-colors lg:col-span-1">
              <div className="flex items-center gap-3 mb-3">
                <SiFirebase className="text-3xl text-yellow-500" />
                <h4 className="font-bold text-gray-900">
                  Firebase (Firestore)
                </h4>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                별도의 백엔드 서버 구축 없이{" "}
                <span className="font-bold text-gray-800">Serverless DB</span>를
                연동하여, 방문자가 데이터를 저장하고 읽을 수 있는{" "}
                <span className="font-bold text-gray-800">
                  피드백 메시지(Feedback Message)
                </span>{" "}
                기능을 구현했습니다.
              </p>
            </div>

            {/* Tech 4: Zustand 카드 */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:border-purple-400 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🐻</span>
                <h4 className="font-bold text-gray-900">Zustand</h4>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                <span className="font-bold text-gray-800">전역 상태 관리</span>
                를 위해 도입했습니다. 복잡한 Props 전달(Props Drilling) 없이
                필요한 컴포넌트에서 즉시 데이터를 꺼내 쓸 수 있어, 코드의{" "}
                <span className="font-bold text-gray-800">
                  가독성과 개발 효율성
                </span>
                을 높였습니다.
              </p>
            </div>
          </div>
        </div>

        {/* 트러블 슈팅 */}
        <div>
          <h3 className="flex items-center text-xl font-bold text-gray-900 mb-6 border-l-4 border-red-500 pl-3">
            🔥 트러블 슈팅 (Troubleshooting)
          </h3>

          <div className="flex flex-col gap-6">
            {/* Issue 1: SPA UX */}
            <div className="group bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-red-300 transition-all">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded">
                  Issue 1
                </span>
                <h4 className="font-bold text-gray-900">
                  페이지 전환 시 UX 끊김 현상
                </h4>
              </div>
              <div className="space-y-3 text-sm md:text-base">
                <p className="text-gray-600">
                  <span className="font-bold text-red-500 bg-red-50 rounded mr-2">
                    Problem
                  </span>
                  단순 페이지 이동 방식을 사용하니, 탭을 전환할 때마다 왼쪽
                  프로필 영역까지 전체가 새로고침되어 사용자 경험이 저하됨.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-blue-500">
                  <span className="font-bold text-blue-600 rounded bg-blue-50 mr-2 ">
                    Solution
                  </span>
                  React의 <strong>State(상태)</strong>를 활용하여 전체 페이지가
                  아닌, 오른쪽 콘텐츠 영역만 조건부 렌더링(Conditional
                  Rendering)하는 방식으로 구조를 변경하여 SPA 경험을 완성함.
                </div>
              </div>
            </div>

            {/* Issue 2: Props & State */}
            <div className="group bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-red-300 transition-all">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded">
                  Issue 2
                </span>
                <h4 className="font-bold text-gray-900">
                  자식 컴포넌트의 State 독립 문제
                </h4>
              </div>
              <div className="space-y-3 text-sm md:text-base">
                <p className="text-gray-600">
                  <span className="font-bold text-red-500 bg-red-50 rounded mr-2">
                    Problem
                  </span>
                  카드(자식) 컴포넌트에 별도의 <code>useState</code>를
                  선언했더니, 카드를 클릭해도 부모 컴포넌트의 화면이 전환되지
                  않음.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-blue-500">
                  <span className="font-bold text-blue-600 rounded bg-blue-50 mr-2">
                    Solution
                  </span>
                  <strong>State Lifting (상태 끌어올리기)</strong> 적용. 자식
                  컴포넌트의 State를 제거하고, 부모로부터 <code>onClick</code>{" "}
                  핸들러를 Props로 전달받아 실행하도록 리팩토링함.
                </div>
              </div>
            </div>

            {/* Issue 3: Animation Config */}
            <div className="group bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-red-300 transition-all">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded">
                  Issue 3
                </span>
                <h4 className="font-bold text-gray-900">
                  커스텀 애니메이션 구현 문제
                </h4>
              </div>
              <div className="space-y-3 text-sm md:text-base">
                <p className="text-gray-600">
                  <span className="font-bold text-red-500 bg-red-50 rounded mr-2">
                    Problem
                  </span>
                  Tailwind 기본 유틸리티에 없는 애니메이션(fade-in-up)을
                  사용해야 했으나, 설정 파일(Config)을 수정하는 방식이 복잡하고
                  적용되지 않음.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-blue-500">
                  <span className="bg-blue-50 font-bold text-blue-600 mr-2 rounded">
                    Solution
                  </span>
                  Tailwind 설정에 의존하기보다,{" "}
                  <strong>
                    CSS 파일에 직접 <code>@keyframes</code>와 클래스를 정의
                  </strong>
                  하여 해결함. Native CSS 문법을 활용해 더 직관적이고 빠르게
                  커스텀 애니메이션을 구현함.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 링크 버튼 영역 */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://github.com/L0521/seungjoon-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex justify-center items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-700 transition-all shadow-md hover:shadow-lg font-bold"
          >
            <FaGithub className="text-xl" /> 코드 바로가기
            <FaExternalLinkAlt className="text-xs opacity-50" />
          </a>
          <a
            href="https://untitled-coding.tistory.com/16"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex justify-center items-center gap-2 px-6 py-3 bg-white text-gray-600 rounded-xl border border-gray-300 rounded-xl hover:bg-gray-50 transition-all shadow-md hover:shadow-lg font-semibold"
          >
            <span className="grayscale opacity-70 flex gap-2 items-center">
              📂 프로젝트 회고록
              <FaExternalLinkAlt className="text-xs opacity-50" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
