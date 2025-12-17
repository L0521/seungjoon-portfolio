import CouncilImg from "../../assets/Council.jpeg";

export default function CouncilDetail() {
  return (
    <div className="animate-fade-in-up flex flex-col gap-8">
      {/* 타이틀 영역 */}
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-3xl font-bold text-gray-900">학과 1학년 대표</h2>
        <div className="flex items-center gap-2 mt-2">
          <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-bold rounded">
            Term
          </span>
          <p className="text-sm text-gray-500">2023.03 ~ 2023.12</p>
        </div>
      </div>

      <div className="flex flex-col gap-12 text-gray-700 leading-relaxed break-keep">
        {/* 역할 및 책임 */}
        <div>
          <h3 className="flex items-center text-xl font-bold text-gray-900 mb-6 border-l-4 border-blue-500 pl-3">
            📌 역할 및 책임
          </h3>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* 텍스트 영역 */}
            <div className="flex-1">
              <p className="text-lg text-gray-700 mb-4">
                고등학생 때 임원을 맡았던 경험을 살려, 학과 행사를 기획하고
                운영하는 1학년 과대표로 활동했습니다.
              </p>
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                <p className="font-semibold text-blue-900 mb-1">🔑 핵심 역량</p>
                <p className="text-sm text-blue-800">
                  조직 내 소통 능력 · 돌발 상황 대처 · 행사 기획 및 운영
                </p>
              </div>
              <p className="text-lg text-gray-700 mb-4 mt-4">
                다수의 학우들이 참여하는 행사를 빈틈없이 준비하는 과정에서
                리더로서의 <strong>소통과 성실함의 중요성</strong>을 깊이
                배웠습니다.
              </p>
            </div>

            {/* 이미지 영역 */}
            <div className="w-full md:w-1/3 flex flex-col items-center">
              <img
                src={CouncilImg}
                alt="Council Photo"
                className="w-full h-auto object-cover rounded-xl border border-gray-200 shadow-sm"
              />
              <p className="text-gray-400 text-xs mt-2 italic">
                (한국외대 수학과 학생회 SNS 사진)
              </p>
            </div>
          </div>
        </div>

        {/* 주요 프로젝트 */}
        <div>
          <h3 className="flex items-center text-xl font-bold text-gray-900 mb-6 mt-4 border-l-4 border-green-500 pl-3">
            ✅ 주요 프로젝트 및 성과
          </h3>

          <div className="space-y-6 ">
            {/* Project 1: 해오름식 */}
            <div className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-green-400 transition-all">
              <h4 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2 group-hover:text-green-700 transition-colors">
                1. 🌞 해오름식 무대 기획 (1학년 전원 참여)
              </h4>
              <p className="text-gray-600 font-medium mb-4 text-md">
                서먹한 동기들을 하나로 모아, 단과대 학과 통틀어 유일한 '전원
                참여' 무대를 만들었습니다.
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-gray-600">
                <li>
                  <span className="font-bold text-gray-800 bg-red-50 px-1 rounded">
                    Problem
                  </span>{" "}
                  입학 초기 서먹한 분위기와 나이 차이, 연습 참여율 저조.
                </li>
                <li>
                  <span className="font-bold text-gray-800 bg-blue-50 px-1 rounded">
                    Solution
                  </span>
                  <ul className="list-[circle] list-inside ml-4 mt-1 space-y-1 text-gray-600">
                    <li>
                      투표 기반 일정 조율 및 잦은 만남으로{" "}
                      <strong>아이스브레이킹</strong>
                    </li>
                    <li>
                      파트별 <strong>'릴스 메들리'</strong> 및 단체 안무
                      기획으로 참여 장벽 완화
                    </li>
                    <li>
                      불참 인원을 직접 찾아가 설득하는{" "}
                      <strong>적극적인 소통</strong>
                    </li>
                  </ul>
                </li>
                <li className="pt-1">
                  <span className="font-bold text-green-600 bg-green-50 px-1 rounded">
                    Result
                  </span>{" "}
                  학과 중 유일하게 <strong>1학년 전원이 참여</strong>하는
                  성공적인 공연 달성.
                </li>
              </ul>
            </div>

            {/* Project 2: MT & Staff */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* MT */}
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                <h4 className="font-bold text-black mb-2 flex items-center gap-2">
                  2. 🚌 동기 MT 총괄
                </h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                  <li>숙소 예약, 예산 편성, 레크리에이션 기획</li>
                  <li>
                    우천 등 돌발 상황 대비 <strong>플랜 B 마련</strong>
                  </li>
                </ul>
              </div>

              {/* Staff */}
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                <h4 className="font-bold text-black mb-2 flex items-center gap-2">
                  3. 🤵‍♂️ 행사 운영 스태프
                </h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                  <li>개강총회, 축제 부스 등 현장 질서 유지</li>
                  <li>
                    학우들을 끝까지 책임지는 <strong>지킴이</strong> 역할
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 배운 점 & 성장 */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-6 mt-4 flex items-center gap-2 border-l-4 border-purple-500 pl-3">
            🚀 Growth Point
            <span className="text-sm font-normal text-gray-400 ml-1">
              : 개발자 역량과의 연결고리
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="text-3xl mb-3">🗣️</div>
              <h4 className="font-bold text-gray-900 mb-2">적극적인 소통</h4>
              <p className="text-gray-600 text-sm leading-relaxed break-keep">
                불참 인원을 설득하던 끈기는{" "}
                <span className="text-purple-600 font-bold">
                  협업 시 의견 조율
                </span>
                에 큰 자산이 되었습니다. 먼저 다가가는 소통 능력을 길렀습니다.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="text-3xl mb-3">🧩</div>
              <h4 className="font-bold text-gray-900 mb-2">문제 해결 능력</h4>
              <p className="text-gray-600 text-sm leading-relaxed break-keep">
                돌발 상황을 해결하며{" "}
                <span className="text-purple-600 font-bold">
                  예외 상황 대처
                </span>
                의 중요성을 체감했고, 항상 대비책을 준비하게 되었습니다.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="text-3xl mb-3">🤝</div>
              <h4 className="font-bold text-gray-900 mb-2">
                오너십(Ownership)
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed break-keep">
                과대로서의 책임감처럼, 개발 프로젝트에서도{" "}
                <span className="text-purple-600 font-bold">맡은 일</span>은
                끝까지 책임지고 완수하겠습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
