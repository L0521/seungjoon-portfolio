import {
  FaExternalLinkAlt,
  FaGithub,
  FaReact,
  FaPlayCircle,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiPnpm,
  SiPrettier,
  SiEslint,
  SiReactquery,
} from "react-icons/si";
import { VscJson, VscCode } from "react-icons/vsc";
import proovyLogo from "../../../../assets/Projects/Proovy/logo.png";
import loginImg from "../../../../assets/Projects/Proovy/login.png";
import priceImg from "../../../../assets/Projects/Proovy/price.png";
import proovyVideo from "../../../../assets/Projects/Proovy/proovy.mp4";

export default function ProovyDetail() {
  return (
    <div className="animate-fade-in-up flex flex-col gap-10 pb-4">
      {/* 타이틀 영역 */}
      <div className="border-b border-gray-200 pb-4">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-900">Proovy</h2>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded">
            Period
          </span>
          <p className="text-sm text-gray-500">2025.12 ~ Present</p>
        </div>
      </div>

      <div className="flex flex-col gap-12 text-gray-700 leading-relaxed break-keep">
        {/* 프로젝트 개요 */}
        <div>
          <h3 className="flex items-center text-xl font-bold text-gray-900 mb-6 border-l-4 border-blue-500 pl-3">
            📌 프로젝트 개요
          </h3>

          <div className="flex flex-col gap-8">
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              UMC에서 진행한 첫 팀 프로젝트로,{" "}
              <strong className="text-gray-900 font-bold">
                수학 AI 튜터 웹 서비스
              </strong>
              를 실제 배포를 목적으로 구현했습니다. 특히
              <span className="text-blue-600 font-bold">
                {" "}
                랜딩(Landing) 페이지, 인증(Auth), 요금제(Price)
              </span>
              등 핵심 기능의 <strong>프론트엔드 개발</strong>을 맡았으며 현재도
              출시를 목표로 개발을 진행 중입니다. 서비스의 복잡도가 높아
              체계적인 아키텍처와 상태 관리에 집중했습니다.
            </p>

            {/* 메인 로고 섹션 */}
            <div className="py-8">
              <img
                src={proovyLogo}
                alt="Proovy Main Logo"
                className="w-70 mx-auto object-contain transform"
              />
            </div>

            {/* 데모 영상 섹션 */}
            <div className="group relative">
              <h4 className="text-sm font-bold text-gray-400 mb-3 flex items-center gap-2 tracking-widest uppercase">
                <FaPlayCircle className="text-blue-500" /> DEMO VIDEO
              </h4>
              <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl aspect-video border-4 border-gray-800 relative">
                <video
                  src={proovyVideo}
                  controls
                  muted
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <p className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                🎯 Key Goals
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 text-blue-800 text-sm">
                <li className="flex gap-2">
                  <span>✅</span> 안정적인 사용자 경험(UX) 구현
                </li>
                <li className="flex gap-2">
                  <span>✅</span> 고성능 SPA 아키텍처 설계
                </li>
                <li className="flex gap-2">
                  <span>✅</span> 전역 상태 관리 최적화
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 주요 화면 Showcase */}
        <div>
          <h3 className="flex items-center text-xl font-bold text-gray-900 mb-6 border-l-4 border-yellow-500 pl-3">
            📸 주요 화면 미리보기
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-3">
              <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <img
                  src={loginImg}
                  alt="Login Page"
                  className="w-full h-auto"
                />
              </div>
              <p className="text-center text-sm font-bold text-gray-500">
                인증(Auth) 페이지
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <img
                  src={priceImg}
                  alt="Pricing Page"
                  className="w-full h-auto"
                />
              </div>
              <p className="text-center text-sm font-bold text-gray-500">
                요금제(Price) 페이지
              </p>
            </div>
          </div>
        </div>

        {/* 🛠 기술 선정 이유 */}
        <div>
          <h3 className="flex items-center text-xl font-bold text-gray-900 mb-8 border-l-4 border-green-500 pl-3">
            🛠 기술 선정 이유 및 전략
          </h3>

          <div className="grid grid-cols-1 gap-4">
            {/* React & TypeScript */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-blue-400 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <FaReact className="text-2xl text-blue-500" />
                  <h4 className="font-bold text-gray-900 border-b-2 border-blue-500/20 pb-1">
                    React
                  </h4>
                </div>
                <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                  <li>
                    채팅, PDF 뷰어, 에디터 등 복잡한 UI를 컴포넌트 단위로
                    분리하여 관리
                  </li>
                  <li>
                    실시간 스트리밍(SSE) 메시지 업데이트 및 대화형 UI 응답성
                    최적화
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-blue-600 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <SiTypescript className="text-2xl text-blue-600" />
                  <h4 className="font-bold text-gray-900 border-b-2 border-blue-600/20 pb-1">
                    TypeScript
                  </h4>
                </div>
                <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                  <li>
                    채팅 메시지 및 수식 메타데이터 등 데이터 구조의 타입 안정성
                    확보
                  </li>
                  <li>
                    명확한 인터페이스 정의를 통해 팀 협업 시 런타임 에러 사전에
                    차단
                  </li>
                </ul>
              </div>
            </div>

            {/* CSS & Tools */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-sky-400 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <SiTailwindcss className="text-2xl text-sky-400" />
                  <h4 className="font-bold text-gray-900">Tailwind CSS</h4>
                </div>
                <p className="text-sm text-gray-600">
                  유틸리티 클래스 기반 디자인 시스템으로 스타일 일관성 유지 및
                  개발 속도 향상
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-orange-400 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <SiPnpm className="text-2xl text-orange-500" />
                  <h4 className="font-bold text-gray-900">pnpm</h4>
                </div>
                <p className="text-sm text-gray-600">
                  엄격한 의존성 관리와 빠른 설치 속도를 통해 효율적인 개발 환경
                  구축
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-gray-400 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex gap-1 text-gray-700">
                    <SiPrettier className="text-xl" />
                    <SiEslint className="text-xl" />
                  </div>
                  <h4 className="font-bold text-gray-900">Code Quality</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Lint와 Prettier를 통한 코드 컨벤션 자동화로 비즈니스 로직에만
                  집중
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 📦 주요 의존성 및 라이브러리 */}
        <div>
          <h3 className="flex items-center text-xl font-bold text-gray-900 mb-8 border-l-4 border-purple-500 pl-3">
            📦 주요 의존성 및 라이브러리
          </h3>

          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-10 gap-x-12">
              <div>
                <h4 className="text-sm font-extrabold text-gray-500 uppercase tracking-[0.15em] mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>{" "}
                  상태 관리
                </h4>
                <div className="flex flex-col gap-3 shadow-sm bg-white p-5 rounded-xl border border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-base font-bold text-gray-800 tracking-tight">
                      React Query
                    </span>
                    <SiReactquery className="text-red-500 text-sm" />
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-50 pt-2">
                    <span className="text-base font-bold text-gray-800 tracking-tight">
                      Zustand
                    </span>
                    <span className="text-xs">🐻</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-extrabold text-gray-500 uppercase tracking-[0.15em] mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>{" "}
                  수식 유틸리티
                </h4>
                <div className="shadow-sm bg-white p-5 rounded-xl border border-gray-100 space-y-2">
                  <p className="text-base font-bold text-gray-800 tracking-tight">
                    MathLive & KaTeX
                  </p>
                  <p className="text-sm text-gray-500">Remark/Rehype Plugins</p>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-extrabold text-gray-500 uppercase tracking-[0.15em] mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-500"></span>{" "}
                  인프라 & UI
                </h4>
                <div className="shadow-sm bg-white p-5 rounded-xl border border-gray-100 space-y-2">
                  <p className="text-base font-bold text-gray-800 tracking-tight">
                    Axios & MSW
                  </p>
                  <p className="text-sm text-gray-500">
                    Lucide, clsx, tailwind-merge
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-extrabold text-gray-500 uppercase tracking-[0.15em] mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-500"></span>{" "}
                  문서 / 드로잉
                </h4>
                <div className="shadow-sm bg-white p-5 rounded-xl border border-gray-100 space-y-2">
                  <p className="text-base font-bold text-gray-800 tracking-tight">
                    pdfjs-dist, tldraw
                  </p>
                  <p className="text-sm text-gray-500">React-Markdown engine</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 📂 프로젝트 폴더 구조 */}
        <div>
          <h3 className="flex items-center text-xl font-bold text-gray-900 mb-8 border-l-4 border-yellow-500 pl-3">
            📂 아키텍처 및 폴더 구조
          </h3>
          <div className="bg-gray-900 rounded-xl p-8 shadow-inner overflow-hidden border-2 border-gray-800">
            <pre className="text-gray-400 text-sm font-mono leading-relaxed overflow-x-auto selection:bg-blue-500/30">
              <code className="block">
                {`src/
├── app/                      # 글로벌 설정 & 라우터
├── features/                 # 도메인 기반 기능 모듈
│   ├── auth/                 # 인증 레이어
│   ├── chat/                 # 대화 엔진
│   ├── editor/               # 캔버스 & 수식 엔진
│   └── subscription/         # 비즈니스 수익 모델
├── shared/                   # 전역 재사용 컴포넌트 & 유틸
└── pages/                    # 뷰 중심 페이지 컴포넌트`}
              </code>
            </pre>
          </div>
        </div>

        {/* 트러블 슈팅 */}
        <div>
          <h3 className="flex items-center text-xl font-bold text-gray-900 mb-6 border-l-4 border-red-500 pl-3">
            🔥 트러블 슈팅 (Troubleshooting)
          </h3>

          <div className="flex flex-col gap-6">
            {/* Case 1: GitHub Infrastructure Error */}
            <div className="group bg-gray-50/50 p-6 rounded-xl border border-gray-100 hover:border-red-200 transition-all">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded">
                  Issue 1
                </span>
                <h4 className="font-bold text-gray-900">
                  GitHub 인프라 장애로 인한 배포 중단 해결
                </h4>
              </div>
              <div className="space-y-3 text-sm md:text-base">
                <p className="text-gray-600">
                  <span className="font-bold text-red-500 bg-red-50 rounded mr-2">
                    Problem
                  </span>
                  Git push/pull 시 500/502 에러 발생으로 인한 자동 배포 중단.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-blue-500">
                  <span className="font-bold text-blue-600 rounded bg-blue-50 mr-2">
                    Solution
                  </span>
                  GitHub Status 확인을 통해 서버 장애임을 파악한 후, 보안 인증
                  초기화를 위해 <strong>SSH 키 재생성 및 재등록</strong>을
                  수행하여 안정적으로 인증을 갱신하고 배포를 재개했습니다.
                </div>
              </div>
            </div>

            {/* Case 2: AWS Deployment Issue */}
            <div className="group bg-gray-50/50 p-6 rounded-xl border border-gray-100 hover:border-red-200 transition-all">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded">
                  Issue 2
                </span>
                <h4 className="font-bold text-gray-900">
                  AWS CloudFront 배포 ID 불일치 해결
                </h4>
              </div>
              <div className="space-y-3 text-sm md:text-base">
                <p className="text-gray-600">
                  <span className="font-bold text-red-500 bg-red-50 rounded mr-2">
                    Problem
                  </span>
                  GitHub Actions 배포 단계에서{" "}
                  <code>NoSuchDistribution (254)</code> 에러 발생.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-blue-500">
                  <span className="font-bold text-blue-600 rounded bg-blue-50 mr-2">
                    Solution
                  </span>
                  AWS 콘솔에서 활성화된 실제 Distribution ID를 직접 대조하여,
                  GitHub Secrets에 저장된 환경 변수가 구버전임을 확인하고{" "}
                  <strong>최신 ID로 업데이트</strong>하여 배포 환경을
                  동기화했습니다.
                </div>
              </div>
            </div>

            {/* Case 3: MSW Conflict */}
            <div className="group bg-gray-50/50 p-6 rounded-xl border border-gray-100 hover:border-red-200 transition-all">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded">
                  Issue 3
                </span>
                <h4 className="font-bold text-gray-900">
                  MSW 핸들러 머지 충돌 및 로직 통합
                </h4>
              </div>
              <div className="space-y-3 text-sm md:text-base">
                <p className="text-gray-600">
                  <span className="font-bold text-red-500 bg-red-50 rounded mr-2">
                    Problem
                  </span>
                  코드 수정과 디자인 작업이 겹치며 <code>handlers.ts</code>{" "}
                  파일에서 대규모 컨플릭트 발생.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-blue-500">
                  <span className="font-bold text-blue-600 rounded bg-blue-50 mr-2">
                    Solution
                  </span>
                  VS Code 머지 에디터를 활용해 양측의 API 핸들러 코드를 개별
                  검토했습니다. <strong>Accept Both Changes</strong> 전략을
                  사용하되 중복되는 엔드포인트 로직을 하나로 통합하여 모킹
                  데이터의 무결성을 확보했습니다.
                </div>
              </div>
            </div>

            {/* Case 4: removeChild error */}
            <div className="group bg-gray-50/50 p-6 rounded-xl border border-gray-100 hover:border-red-200 transition-all">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded">
                  Issue 4
                </span>
                <h4 className="font-bold text-gray-900">
                  React 런타임 에러: removeChild on Node 해결
                </h4>
              </div>
              <div className="space-y-3 text-sm md:text-base">
                <p className="text-gray-600">
                  <span className="font-bold text-red-500 bg-red-50 rounded mr-2">
                    Problem
                  </span>
                  조건부 렌더링 중 가상 DOM과 실제 DOM의 상태 불일치로 인한 앱
                  크래시 발생.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-blue-500">
                  <span className="font-bold text-blue-600 rounded bg-blue-50 mr-2">
                    Solution
                  </span>
                  CloudFront 캐시 무효화로 최신 빌드를 강제하고, 시크릿 모드
                  테스트를 통해 브라우저 확장 프로그램의 간섭을 확인했습니다.
                  향후 안정성을 위해 라우터 레벨에{" "}
                  <strong>ErrorBoundary</strong>를 도입하여 예외 처리를
                  강화했습니다.
                </div>
              </div>
            </div>

            {/* Case 5: UI/UX sidebar */}
            <div className="group bg-gray-50/50 p-6 rounded-xl border border-gray-100 hover:border-red-200 transition-all">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded">
                  Issue 5
                </span>
                <h4 className="font-bold text-gray-900">
                  UI/UX 디테일 개선: 사이드바 오버플로우 문제 해결
                </h4>
              </div>
              <div className="space-y-3 text-sm md:text-base">
                <p className="text-gray-600">
                  <span className="font-bold text-red-500 bg-red-50 rounded mr-2">
                    Problem
                  </span>
                  사이드바 리스트가 길어질 때 하단 영역이 잘리고 노트 개수
                  표시의 스타일이 불균형한 현상.
                </p>
                <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-blue-500">
                  <span className="font-bold text-blue-600 rounded bg-blue-50 mr-2">
                    Solution
                  </span>
                  컨테이너에 <code>overflow-y: auto</code>를 적용하고 커스텀
                  스크롤바를 제작했습니다. 또한 폰트 사이즈와 마진을 미세하게
                  조정하여 <strong>전체적인 UI 일관성을 확보</strong>하고
                  사용성을 개선했습니다.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 주요 화면 Showcase */}
        <div>
          <h3 className="flex items-center text-xl font-bold text-gray-900 mb-8 border-l-4 border-orange-500 pl-3">
            📸 주요 화면 미리보기
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-2">
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-all hover:scale-[1.01]">
                <img
                  src={loginImg}
                  alt="Login Page"
                  className="w-full h-auto"
                />
              </div>
              <div className="flex items-center gap-2 px-2">
                <VscCode className="text-orange-500" />
                <p className="text-sm font-bold text-gray-600 font-mono">
                  auth/LoginPage.tsx
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-all hover:scale-[1.01]">
                <img
                  src={priceImg}
                  alt="Pricing Page"
                  className="w-full h-auto"
                />
              </div>
              <div className="flex items-center gap-2 px-2">
                <VscJson className="text-orange-500" />
                <p className="text-sm font-bold text-gray-600 font-mono">
                  subscription/PricePage.tsx
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 링크 버튼 영역 */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://github.com/Team-Proovy/Proovy-front"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex justify-center items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-700 transition-all shadow-md hover:shadow-lg font-bold"
          >
            <FaGithub className="text-xl" /> 코드 바로가기
            <FaExternalLinkAlt className="text-xs opacity-50" />
          </a>
          <button className="flex-1 flex justify-center items-center gap-2 px-6 py-3 bg-white text-gray-600 rounded-xl border border-gray-300 hover:bg-gray-50 transition-all shadow-md hover:shadow-lg font-semibold">
            📂 프로젝트 회고록 (준비 중)
            <FaExternalLinkAlt className="text-xs opacity-50" />
          </button>
        </div>
      </div>
    </div>
  );
}
