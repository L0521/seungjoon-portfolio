import { FaCheckCircle } from "react-icons/fa";

export default function CSSpringBootDetail() {
  return (
    <div className="animate-fade-in-up flex flex-col gap-8">
      {/* 타이틀 영역 */}
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-3xl font-bold text-gray-900">
          Spring Boot Study 1기
        </h2>
        <div className="flex items-center gap-2 mt-2">
          <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">
            Term
          </span>
          <p className="text-sm text-gray-500">2026.03 ~ 2026.06 (진행 중)</p>
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
              학술 연합 모임에서 주관하는 <strong>Spring Boot 스터디</strong>에
              참여하여 백엔드 개발의 기초를 다지고 있습니다. Java 언어에 대한
              깊은 이해와 Spring Framework의 핵심 원리를 학습하여 풀스택
              개발자로 성장하기 위한 토대를 마련하고 있습니다.
            </p>

            <div className="bg-green-50 p-5 rounded-xl border border-green-100">
              <p className="text-green-800 text-sm leading-relaxed">
                객체 지향 설계와 Spring의{" "}
                <strong>Dependency Injection, AOP</strong> 등 핵심 개념을 실습
                위주로 공부하고 있습니다.
              </p>
            </div>
          </div>
        </div>

        {/* 주요 학습 내용 */}
        <div>
          <h3 className="flex items-center text-xl font-bold text-gray-900 mt-4 mb-6 border-l-4 border-yellow-500 pl-3">
            💡 주요 학습 내용
          </h3>

          <div className="grid grid-cols-1 gap-5">
            {/* Study 1: Java & Object Oriented */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-yellow-400 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-gray-900">
                  ☕ Java Deep Dive
                </h4>
                <div className="flex gap-2">
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded font-bold">
                    Java
                  </span>
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded font-bold">
                    OOP
                  </span>
                </div>
              </div>
              <p className="text-gray-600 mb-3">
                JVM의 동작 원리, 멀티 스레드, 제네릭 등 Java의 핵심적인 기능들과
                객체 지향의 5대 원칙(SOLID)을 심도 있게 공부합니다.
              </p>
            </div>

            {/* Study 2: Spring Boot Core */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-yellow-400 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-lg text-gray-900">
                  ⚙️ Spring Core Concept
                </h4>
                <div className="flex gap-2">
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded font-bold">
                    DI/IoC
                  </span>
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded font-bold">
                    MVC
                  </span>
                </div>
              </div>
              <p className="text-gray-600 mb-3">
                Spring Boot의 자동 설정 원리, Bean 생명주기 제어, REST API 설계
                및 JPA를 통한 데이터 접근 기술을 학습합니다.
              </p>
              <ul className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg space-y-1">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500 text-xs" />
                  계층형 아키텍처(Controller-Service-Repository) 실습
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500 text-xs" />
                  API 명세서 작성 및 예외 처리 전략 수립
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 배운 점 & 성장 포인트 */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-6 mt-4 flex items-center gap-2 border-l-4 border-purple-500 pl-3">
            🚀 Growth Point
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:-translate-y-1 transition-transform">
              <div className="text-2xl mb-2">🏗️</div>
              <h4 className="font-bold text-gray-900 mb-1">
                인프라 및 서버 사이드 이해
              </h4>
              <p className="text-gray-600 text-xs leading-relaxed break-keep">
                프론트엔드 너머의 전체적인 <strong>데이터 흐름</strong>을
                파악하며 더 넓은 시야를 가진 개발자로 성장하고 있습니다.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:-translate-y-1 transition-transform">
              <div className="text-2xl mb-2">📔</div>
              <h4 className="font-bold text-gray-900 mb-1">
                문서 학습의 습관화
              </h4>
              <p className="text-gray-600 text-xs leading-relaxed break-keep">
                Spring 공식 문서를 참조하며 기술의{" "}
                <strong>정확한 배경과 동작 방식</strong>을 찾아보는 습관을
                기르고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
