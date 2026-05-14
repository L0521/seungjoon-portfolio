import { useNavigate } from "react-router-dom";
import { FaLayerGroup } from "react-icons/fa";
import PortfolioWebsiteCard from "./components/PortfolioWebsiteCard";
import ContinuousCard from "./components/ContinuousCard";
import ProovyCard from "./components/ProovyCard";
import HarangCard from "./components/HarangCard";

export default function Projects() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full px-6 md:px-12 pb-12 pt-6 md:pt-12 select-none">
      <div className="animate-fade-in-up mb-8">
        <div className="flex items-center gap-2 mb-2 text-gray-800">
          <FaLayerGroup className="text-xl text-blue-500" />
          <h3 className="font-bold text-3xl tracking-tight">Projects</h3>
        </div>
        <p className="text-gray-500 text-sm md:text-base leading-relaxed">
          아이디어 및 배포, 고민의 흔적이 담긴 작업물입니다.
        </p>
      </div>

      <div className="animate-fade-in-up grid grid-cols-1 lg:grid-cols-2 gap-6 pb-10">
        {[
          {
            id: "harang",
            date: "2026.01",
            component: (
              <HarangCard onClick={() => navigate("/projects/harang")} />
            ),
          },
          {
            id: "proovy",
            date: "2025.12",
            component: (
              <ProovyCard onClick={() => navigate("/projects/proovy")} />
            ),
          },
          {
            id: "portfolio",
            date: "2024.12",
            component: (
              <PortfolioWebsiteCard
                onClick={() => navigate("/projects/portfolio")}
              />
            ),
          },
        ]
          .sort((a, b) => b.date.localeCompare(a.date))
          .map((project) => (
            <div
              key={project.id}
              className="h-full transform transition duration-300 hover:-translate-y-1"
            >
              {project.component}
            </div>
          ))}

        <div className="h-full transform transition duration-300 hover:-translate-y-1">
          <ContinuousCard />
        </div>
      </div>
    </div>
  );
}
