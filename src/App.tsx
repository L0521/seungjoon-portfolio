import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import PortfolioLayout from "./layout/PortfolioLayout";
import AboutPage from "./pages/about/AboutPage";
import ProjectsPage from "./pages/projects/ProjectsPage";
import ProjectDetailPage from "./pages/projects/ProjectDetailPage";
import ActivitiesPage from "./pages/activities/ActivitiesPage";
import ActivityDetailPage from "./pages/activities/ActivityDetailPage";
import FeedbackPage from "./pages/feedback/FeedbackPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioLayout />}>
        <Route index element={<Navigate to="/about" replace />} />
        <Route
          path="about"
          element={
            <div className="flex-1 flex flex-col justify-center px-6 md:p-0">
              <AboutPage />
            </div>
          }
        />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="projects/:id" element={<ProjectDetailPage />} />
        <Route path="activities" element={<ActivitiesPage />} />
        <Route path="activities/:id" element={<ActivityDetailPage />} />
        <Route path="feedback" element={<FeedbackPage />} />
        <Route path="*" element={<Navigate to="/about" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
