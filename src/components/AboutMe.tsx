export default function AboutMe() {
  return (
    <div className="flex flex-col gap-8 break-keep">
      {/* 제목 영역 */}
      <div>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
          안녕하세요, <br />
          코드 너머를 생각하는 개발자
          <span className="text-blue-600"> 이승준</span>
          입니다.
        </h1>
      </div>

      {/* 본문 */}
      <div className="flex flex-col gap-6 text-lg text-gray-600 leading-relaxed">
        <p>
          혼자가 아닌{" "}
          <span className="font-bold text-gray-900">
            함께 만드는 서비스의 가치
          </span>
          를 가장 중요시합니다. 학생회 활동과 UMC 스터디 등 여러 경험을 통해
          팀원들과 소통하며 목표를 달성하는 법을 배웠습니다.
        </p>

        <p>
          아직 개발 실력은 부족하지만 끊임없이 성장하며 더 나은 서비스를
          만들고자 노력합니다. 단순한 기술적 성장을 넘어, 원활한 협업을 통해 팀
          전체의 퍼포먼스를 높이는{" "}
          <span className="bg-blue-50 text-blue-700 px-1 rounded font-semibold">
            '함께 일하고 싶은 동료'
          </span>
          를 지향합니다.
        </p>

        <p>
          책임감 있게 맡은 바를 완수하며, 팀에
          <span className="font-bold text-gray-900"> 긍정적인 에너지</span>를
          더하겠습니다.
        </p>
      </div>

      <div className="flex flex-col gap-3 mt-4 pt-6 border-t border-gray-200">
        {/* Main Focus */}
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold text-gray-400 uppercase tracking-wider min-w-[100px]">
            Main Focus
          </span>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
              React
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
              TypeScript
            </span>
          </div>
        </div>

        {/* Experience */}
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold text-gray-400 uppercase tracking-wider min-w-[100px]">
            Experience
          </span>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-sm font-medium">
              Python
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-sm font-medium">
              C / C++
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-sm font-medium">
              Swift
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-sm font-medium">
              C#
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-sm font-medium">
              Arduino
            </span>
          </div>
        </div>

        {/* Strength */}
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold text-gray-400 uppercase tracking-wider min-w-[100px]">
            Strength
          </span>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
              Communication
            </span>
            <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
              Teamwork
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
