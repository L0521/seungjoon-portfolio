import { FaCheckCircle } from "react-icons/fa";

export default function UMCDetail() {
  return (
    <div className="animate-fade-in-up flex flex-col gap-8">
      {/* 타이틀 영역 */}
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-3xl font-bold text-gray-900">
          UMC 9th Web Part Challenger
        </h2>
        <div className="flex items-center gap-2 mt-2">
          <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded">
            Study
          </span>
          <p className="text-gray-500 text-sm">2025.09 ~ Present</p>
        </div>
      </div>

      <div className="flex flex-col gap-12 text-gray-700 leading-relaxed break-keep">
        {/* 활동 개요 */}
        <div>
          <h3 className="flex items-center text-xl font-bold text-gray-900 mb-6 border-l-4 border-blue-500 pl-3">
            📌 활동 개요
          </h3>

          <div className="flex flex-col gap-4">
            <p className="text-lg text-gray-700">
              대학생 연합 IT 동아리 UMC에서{" "}
              <span className="text-blue-600 font-bold">Web 파트 챌린저</span>로
              활동하고 있습니다. 단순한 코딩 공부를 넘어, 정해진
              커리큘럼(워크북)을 기반으로{" "}
              <span className="text-blue-600 font-bold">자기주도적 학습</span>을
              진행하고, 매주 스터디를 통해 지식을 공유하며 성장하는 커뮤니티
              활동입니다.
            </p>

            <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
              <p className="text-blue-800 text-sm leading-relaxed">
                서로의 코드를 리뷰해주고 모르는 것을 질문하며,{" "}
                <strong>집단 지성</strong>을 통해 문제를 해결하는 경험을 쌓고
                있습니다.
              </p>
            </div>
          </div>
        </div>

        {/* 주요 경험 */}
        <div>
          <h3 className="flex items-center text-xl font-bold text-gray-900 mt-4 mb-6 border-l-4 border-yellow-500 pl-3">
            💡 주요 경험 & 활동
          </h3>

          <div className="grid grid-cols-1 gap-5">
            {/* Exp 1: 자기주도 학습 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-yellow-400 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-gray-900 flex gap-2">
                  📖 주도적인 학습
                </h4>
                <div className="flex gap-2">
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded font-bold">
                    Notion
                  </span>
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded font-bold">
                    Workbook
                  </span>
                </div>
              </div>
              <p className="text-gray-600 mb-3">
                매주 React 워크북을 수행하며 총 10주간 컴포넌트 생명주기, Hooks
                등 핵심 개념을 학습했습니다.
              </p>
              <ul className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg space-y-1">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-yellow-500 text-xs" />
                  학습한 내용을 Notion에 정리,
                  <strong>아카이빙</strong>
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-yellow-500 text-xs" />
                  강의 영상을 참고, <strong>Clone Coding</strong>
                </li>
              </ul>
            </div>

            {/* Exp 2: 지식 공유 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-yellow-400 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-gray-900 flex gap-2">
                  🗣️ 코드 리뷰 & 지식 공유
                </h4>
                <div className="flex gap-2">
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded font-bold">
                    Code Review
                  </span>
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded font-bold">
                    Feedback
                  </span>
                </div>
              </div>
              <p className="text-gray-600 mb-3">
                스터디원들과 서로의 코드를 분석하고 더 나은 구현 방법에 대해
                토론했습니다.
              </p>
              <ul className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg space-y-1">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-yellow-500 text-xs" />
                  매주 핵심 키워드 <strong>퀴즈</strong>를 통해 학습 내용 점검
                  및 복습
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-yellow-500 text-xs" />
                  공부한 코드 내용 발표를 통해 <strong>더 좋은 코드</strong>에
                  대한 고민
                </li>
              </ul>
            </div>

            {/* Exp 3: 프로젝트 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-yellow-400 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-gray-900 flex gap-2">
                  💡 팀 프로젝트 활동
                </h4>
                <div className="flex gap-2">
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded font-bold">
                    Communication
                  </span>
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded font-bold">
                    Project
                  </span>
                </div>
              </div>
              {/* <p className="text-gray-600 mb-3">
                스터디원들과 서로의 코드를 분석하고 더 나은 구현 방법에 대해
                토론했습니다.
              </p> */}
              {/* <ul className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg space-y-1">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-yellow-500 text-xs" />
                  매주 핵심 키워드 <strong>퀴즈</strong>를 통해 학습 내용 점검
                  및 복습
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-yellow-500 text-xs" />
                  공부한 코드 내용 발표를 통해 <strong>더 좋은 코드</strong>에
                  대한 고민
                </li>
              </ul> */}
            </div>
          </div>
        </div>

        {/* 배운 점 & 성장 포인트 */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-6 mt-4 flex items-center gap-2 border-l-4 border-purple-500 pl-3">
            🚀 Growth Point
            <span className="text-sm font-normal text-gray-400 ml-1">
              : 개발자 역량과의 연결고리
            </span>
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Point 1 */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:-translate-y-1 transition-transform">
              <div className="text-2xl mb-2">🏃</div>
              <h4 className="font-bold text-gray-900 mb-1">기술적 자립심</h4>
              <p className="text-gray-600 text-xs leading-relaxed break-keep">
                누가 떠먹여 주는 강의가 아닌, 워크북을 통해 스스로 문서를
                찾아보며{" "}
                <span className="font-bold text-purple-600">
                  문제 해결 능력
                </span>
                을 길렀습니다.
              </p>
            </div>

            {/* Point 2 */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:-translate-y-1 transition-transform">
              <div className="text-2xl mb-2">👀</div>
              <h4 className="font-bold text-gray-900 mb-1">코드 문해력</h4>
              <p className="text-gray-600 text-xs leading-relaxed break-keep">
                강의를 듣거나 타인의 코드를 리뷰하며 다양한 로직을 접했고,{" "}
                <span className="font-bold text-purple-600">
                  코드를 보는 방법을 알고 유지보수하기 좋은 코드
                </span>
                가 무엇인지 고민하게 되었습니다.
              </p>
            </div>

            {/* Point 3 */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:-translate-y-1 transition-transform">
              <div className="text-2xl mb-2">💬</div>
              <h4 className="font-bold text-gray-900 mb-1">기술 소통 능력</h4>
              <p className="text-gray-600 text-xs leading-relaxed break-keep">
                내가 짠 코드를 남에게 설명하고 설득하는 과정을 통해, 개발자에게
                필수적인{" "}
                <span className="font-bold text-purple-600">
                  커뮤니케이션 스킬
                </span>
                을 익혔습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
