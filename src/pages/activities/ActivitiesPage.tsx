import { useNavigate } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import UMCCard from "./components/UMCCard";
import UMC10thCard from "./components/UMC10thCard";
import CouncilCard from "./components/CouncilCard";
import CSSpringBoot from "./components/CSSpringBoot";
import CodingBlogCard from "./components/CodingBlogCard";
import ContinuousCard from "./components/ContinuousCard";

export default function Activities() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-full px-6 md:px-12 pb-12 pt-6 md:pt-12 select-none">
      <div className="animate-fade-in-up mb-8">
        <div className="flex items-center gap-2 mb-2 text-gray-800">
          <FaUsers className="text-2xl text-green-500" />
          <h3 className="font-bold text-3xl tracking-tight">Activities</h3>
        </div>
        <p className="text-gray-500 text-sm md:text-base leading-relaxed">
          다양한 조직과 커뮤니티에서 소통하며 성장한 기록들입니다.
        </p>
      </div>

      <div className="animate-fade-in-up grid grid-cols-1 lg:grid-cols-2 gap-6 pb-10">
        {[
          {
            id: "umc",
            date: "2025.09",
            component: (
              <UMCCard onClick={() => navigate("/activities/umc")} />
            ),
          },
          {
            id: "umc10",
            date: "2026.02",
            component: (
              <UMC10thCard onClick={() => navigate("/activities/umc10")} />
            ),
          },
          {
            id: "springboot",
            date: "2026.03",
            component: (
              <CSSpringBoot onClick={() => navigate("/activities/springboot")} />
            ),
          },
          {
            id: "council",
            date: "2023.03",
            component: (
              <CouncilCard onClick={() => navigate("/activities/council")} />
            ),
          },
          {
            id: "mathblog",
            date: "2022.01",
            component: (
              <CodingBlogCard onClick={() => navigate("/activities/mathblog")} />
            ),
          },
        ]
          .sort((a, b) => b.date.localeCompare(a.date))
          .map((activity) => (
            <div
              key={activity.id}
              className="h-full transform transition duration-300 hover:-translate-y-1"
            >
              {activity.component}
            </div>
          ))}

        <div className="h-full transform transition duration-300 hover:-translate-y-1">
          <ContinuousCard />
        </div>
      </div>
    </div>
  );
}
