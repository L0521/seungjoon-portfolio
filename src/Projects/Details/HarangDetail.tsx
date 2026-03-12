import { FaExternalLinkAlt, FaGithub, FaReact } from "react-icons/fa";
import { SiSpringboot, SiTailwindcss, SiTypescript } from "react-icons/si";

export default function HarangDetail() {
  return (
    <div className="animate-fade-in-up flex flex-col gap-10 pb-4">
      {/* 타이틀 영역 */}
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-3xl font-bold text-gray-900">하랑</h2>
        <div className="flex items-center gap-2 mt-2">
          <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded">
            Period
          </span>
          <p className="text-sm text-gray-500">2026.01 ~ 2026.04</p>
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
              <strong>1365 자원봉사 포털</strong>의 복잡한 UI/UX를 개선하고,
              특정 대상을 타겟으로 한 <strong>봉사 신청 웹 서비스</strong>를
              리브랜딩하여 기획/제작했습니다. React와 Spring Boot를 결합한 첫
              풀스택 프로젝트로, 프론트엔드와 백엔드의 유기적인 연결을
              경험했습니다.
            </p>

            <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
              <p className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                🎯 Key Goals
              </p>
              <ul className="list-disc list-inside text-blue-800 text-sm space-y-1">
                <li>사용자 중심의 직관적인 봉사 매칭 UI/UX 설계</li>
                <li>REST API를 통한 효율적인 데이터 통신 구조 구축</li>
                <li>Spring Boot를 활용한 안정적인 백엔드 아키텍처 구현</li>
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
                <h4 className="font-bold text-gray-900">React & TypeScript</h4>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                컴포넌트 단위의 UI 개발로 생산성을 확보하고, 정적 타이핑을 통해
                런타임 에러를 줄여 프로젝트의 완성도를 높였습니다.
              </p>
            </div>

            {/* Tech 2: Spring Boot */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:border-green-400 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <SiSpringboot className="text-3xl text-green-500" />
                <h4 className="font-bold text-gray-900">Spring Boot</h4>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Java 기반의 안정적인 서버 생태계를 활용하여 봉사 신청 및 유저
                관리 로직을 구축하였으며, 계층화된 아키텍처를 실습했습니다.
              </p>
            </div>

            {/* Tech 3: Tailwind */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:border-sky-400 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <SiTailwindcss className="text-3xl text-sky-400" />
                <h4 className="font-bold text-gray-900">Tailwind CSS</h4>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Utility-first 방식을 통해 빠른 프로토타이핑이 가능했으며, 일관된
                디자인 시스템을 유지하면서 반응형 웹을 구현했습니다.
              </p>
            </div>

            {/* Tech 4: PostgreSQL/JPA */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:border-purple-400 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <SiTypescript className="text-3xl text-blue-500" />
                <h4 className="font-bold text-gray-900">JPA & DB Design</h4>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                객체 지향적인 데이터 접근 방식을 사용하고, 효율적인 DB 스키마
                설계를 통해 데이터 간의 관계를 명확히 정의했습니다.
              </p>
            </div>
          </div>
        </div>

        {/* 링크 버튼 영역 */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="flex-1 flex justify-center items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-700 transition-all shadow-md hover:shadow-lg font-bold">
            <FaGithub className="text-xl" /> 코드 바로가기
            <FaExternalLinkAlt className="text-xs opacity-50" />
          </button>
          <button className="flex-1 flex justify-center items-center gap-2 px-6 py-3 bg-white text-gray-600 rounded-xl border border-gray-300 hover:bg-gray-50 transition-all shadow-md hover:shadow-lg font-semibold">
            📂 프로젝트 회고록
            <FaExternalLinkAlt className="text-xs opacity-50" />
          </button>
        </div>
      </div>
    </div>
  );
}
