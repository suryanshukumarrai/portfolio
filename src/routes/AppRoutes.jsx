import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../pages/Home.jsx"));
const NotFound = lazy(() => import("../pages/NotFound.jsx"));

const AppRoutes = () => (
  <Suspense
    fallback={
      <div className="min-h-screen bg-night text-frost flex items-center justify-center">
        <span className="text-sm uppercase tracking-[0.4em] text-mist">Loading</span>
      </div>
    }
  >
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;
