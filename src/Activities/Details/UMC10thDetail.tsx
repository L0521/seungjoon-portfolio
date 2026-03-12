import { FaCheckCircle } from "react-icons/fa";

export default function UMC10thDetail() {
  return (
    <div className="animate-fade-in-up flex flex-col gap-8">
      {/* 타이틀 영역 */}
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-3xl font-bold text-gray-900">
          UMC 10th Web Part Leader
        </h2>
        <div className="flex items-center gap-2 mt-2">
          <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded">
            Term
          </span>
          <p className="text-sm text-gray-500">2026.03 ~ Present</p>
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
              대학생 연합 IT 동아리{" "}
              <strong>한국외대 UMC 10기 Web 파트장</strong>
              으로 임명되어 활동하고 있습니다. 이전 기수의 경험을 바탕으로, 신입
              챌린저들의 워크북 학습을 지도하고 팀 프로젝트의 기술적인 방향성을
              제시하는 역할을 맡고 있습니다.
            </p>

            <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
              <p className="text-blue-800 text-sm leading-relaxed">
                구성원들이 기술적 성정뿐만 아니라 <strong>협업의 즐거움</strong>
                을 느낄 수 있도록 멘토링과 팀 빌딩에 집중하고 있습니다.
              </p>
            </div>
          </div>
        </div>

        {/* 주요 역할 */}
        <div>
          <h3 className="flex items-center text-xl font-bold text-gray-900 mt-4 mb-6 border-l-4 border-yellow-500 pl-3">
            💡 주요 역할 & 책임
          </h3>

          <div className="grid grid-cols-1 gap-5">
            {/* Role 1: Curriculum Management */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-yellow-400 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-gray-900">
                  🎓 커리큘럼 리딩{" "}
                </h4>
                <div className="flex gap-2">
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded font-bold">
                    Workbook
                  </span>
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded font-bold">
                    Mentoring
                  </span>
                </div>
              </div>
              <p className="text-gray-600 mb-3">
                매주 진행되는 Web 파트 스터디에서 주요 개념(React, Hooks, Global
                State)에 대한 심화 설명을 진행하고 피드백을 제공합니다.
              </p>
              <ul className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg space-y-1">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-yellow-500 text-xs" />
                  코드 리뷰를 통한 <strong>Clean Code</strong> 및 최신 트렌드
                  전수
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-yellow-500 text-xs" />
                  챌린저들의 <strong>병목 현상(Bottleneck)</strong> 해결 및 동기
                  부여
                </li>
              </ul>
            </div>

            {/* Role 2: Project Collaboration */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-yellow-400 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-gray-900">
                  🤝 팀 프로젝트 리딩
                </h4>
                <div className="flex gap-2">
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded font-bold">
                    Tech Lead
                  </span>
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded font-bold">
                    Coordination
                  </span>
                </div>
              </div>
              <p className="text-gray-600 mb-3">
                프로젝트 기획 단계부터 참여하여 기술 스택 선정 및 아키텍처
                설계를 지원하고 백엔드 파트와의 협업을 조율합니다.
              </p>
              <ul className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg space-y-1">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-yellow-500 text-xs" />
                  효율적인 <strong>Git Flow</strong> 및 작업 분담 전략 수립
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 배운 점 & 성장 포인트 */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-6 mt-4 flex items-center gap-2 border-l-4 border-purple-500 pl-3">
            🚀 Leadership Point
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Point 1 */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:-translate-y-1 transition-transform">
              <div className="text-2xl mb-2">🏔️</div>
              <h4 className="font-bold text-gray-900 mb-1">
                책임감 있는 매니지먼트
              </h4>
              <p className="text-gray-600 text-xs leading-relaxed break-keep">
                파트 전체의 성장을 관리하며 리더로서의 <strong>책임감</strong>과
                일정을 조율하는 능력을 키웠습니다.
              </p>
            </div>

            {/* Point 2 */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:-translate-y-1 transition-transform">
              <div className="text-2xl mb-2">🧠</div>
              <h4 className="font-bold text-gray-900 mb-1">
                설명하며 완성하는 지식
              </h4>
              <p className="text-gray-600 text-xs leading-relaxed break-keep">
                남에게 지식을 전달하기 위해 더 깊게 공부하며, 스스로의{" "}
                <strong>기술적 기초</strong>를 더욱 견고히 다졌습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
