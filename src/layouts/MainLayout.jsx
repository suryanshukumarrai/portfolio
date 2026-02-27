import ScrollProgress from "../components/ScrollProgress.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const MainLayout = ({ children }) => (
  <div className="relative bg-night text-frost min-h-screen" id="top">
    <ScrollProgress />
    <div className="pointer-events-none absolute inset-0 bg-subtle-glow" />
    <div className="pointer-events-none absolute inset-0 bg-hero-grid bg-[length:24px_24px] opacity-40" />
    <Navbar />
    <main className="relative z-10">{children}</main>
    <Footer />
  </div>
);

export default MainLayout;
