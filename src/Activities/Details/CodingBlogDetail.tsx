import { FaPenNib, FaExternalLinkAlt } from "react-icons/fa";

export default function CodingBlogDetail() {
  return (
    <div className="animate-fade-in-up flex flex-col gap-8 pb-10 mb">
      {/* 타이틀 영역 */}
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-3xl font-bold text-gray-900">코딩 블로그 운영</h2>
        <div className="flex items-center gap-2 mt-2">
          <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded">
            Since
          </span>
          <p className="text-sm text-gray-500">2022.01 ~ Present</p>
        </div>
      </div>

      <div className="flex flex-col gap-12 text-gray-700 leading-relaxed break-keep">
        {/* 블로그 개설 배경 */}
        <div>
          <h3 className="flex items-center text-xl font-bold text-gray-900 mb-6 border-l-4 border-blue-500 pl-3">
            📌 블로그 개설 배경
          </h3>

          <div className="flex flex-col gap-4">
            <p className="text-lg text-gray-700">
              과거 C, Unity, Arduino 등을 접해본 경험을 바탕으로, 전공인 수학과
              개발을 연결하기 위해 시작했습니다. 단순한 문제 풀이가 아닌,{" "}
              <span className="bg-blue-50 text-blue-600 font-bold rounded">
                "수학적 개념을 코드로 나타낼 수 있을까?"
              </span>
              라는 호기심을 기록하고 있습니다.
            </p>

            {/* 강조 박스 */}
            <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
              <p className="text-blue-800 text-sm leading-relaxed">
                군 복무라는 제한된 환경 속에서도 끊임없이 공부한 흔적을 남기고,
                복잡한 개념을 나만의 언어로 정리하기 위해 블로그로 작성했습니다.
              </p>
            </div>
          </div>
        </div>

        {/* 주요 포스팅 주제 */}
        <div>
          <h3 className="flex items-center text-xl font-bold text-gray-900 mb-6 mt-4 border-l-4 border-green-500 pl-3">
            ✍️ 주요 포스팅 주제
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Card 1: 선형대수학 */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:border-green-400 transition-colors group">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                  Linear Algebra X Python
                </h4>
                <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-bold">
                  Math
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                선형대수학의 수학적 이론을 파이썬 코드로 직접 구현하고 결과를
                시각화하여 분석합니다.
              </p>
              <div className="flex gap-2">
                <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded">
                  NumPy
                </span>
                <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded">
                  Matplotlib
                </span>
              </div>
            </div>

            {/* Card 2: 코드 리멤버링 */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:border-green-400 transition-colors group">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                  Code Remembering
                </h4>
                <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-bold">
                  Archive
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                개발 중 마주친 낯선 문법이나, 자주 실수하는 패턴을 기록하여
                동일한 시행착오를 줄입니다.
              </p>
              <div className="flex gap-2">
                <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded">
                  Troubleshooting
                </span>
                <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded">
                  Syntax
                </span>
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Point 1 */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:-translate-y-1 transition-transform">
              <div className="text-2xl mb-2">📝</div>
              <h4 className="font-bold text-gray-900 mb-1">문서화 능력</h4>
              <p className="text-gray-600 text-xs leading-relaxed">
                생각을 글로 정리하며{" "}
                <span className="font-bold text-purple-600">지식의 구조화</span>
                를 연습했고, 협업 시 명확한 문서 작성의 기반을 다졌습니다.
              </p>
            </div>

            {/* Point 2 */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:-translate-y-1 transition-transform">
              <div className="text-2xl mb-2">🏃</div>
              <h4 className="font-bold text-gray-900 mb-1">성실함의 표시</h4>
              <p className="text-gray-600 text-xs leading-relaxed">
                특히나 군 복무 중에도 멈추지 않은 포스팅은 저의{" "}
                <span className="font-bold text-purple-600">끈기와 열정</span>을
                가장 잘 보여주고 있다고 생각합니다.
              </p>
            </div>

            {/* Point 3 */}
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:-translate-y-1 transition-transform">
              <div className="text-2xl mb-2">🧠</div>
              <h4 className="font-bold text-gray-900 mb-1">메타인지 향상</h4>
              <p className="text-gray-600 text-xs leading-relaxed">
                아는 것과 모르는 것을 명확히 구분하고, 부족한 점을{" "}
                <span className="font-bold text-purple-600">자기주도적</span>
                으로 채워나갔습니다.
              </p>
            </div>
          </div>
        </div>

        {/* 링크 버튼 영역 */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <a
            href="https://untitled-coding.tistory.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex justify-center items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-700 transition-all shadow-md hover:shadow-lg font-bold"
          >
            <FaPenNib /> 현재 기술 블로그
            <FaExternalLinkAlt className="text-xs opacity-50" />
          </a>
          <a
            href="https://kdeveloper.tistory.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex justify-center items-center gap-2 px-6 py-3 bg-white text-gray-600 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all shadow-sm font-semibold"
          >
            <span className="grayscale opacity-70 flex gap-2 items-center">
              📂 이전 블로그 아카이브
              <FaExternalLinkAlt className="text-xs opacity-50" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
