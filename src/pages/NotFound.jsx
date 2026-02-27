import { ArrowUpRight } from "lucide-react";
import MainLayout from "../layouts/MainLayout.jsx";

const NotFound = () => (
  <MainLayout>
    <section className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="glass rounded-3xl p-10 text-center max-w-lg">
        <p className="text-xs uppercase tracking-[0.4em] text-mist">404</p>
        <h1 className="text-3xl font-semibold text-frost mt-4">Page not found</h1>
        <p className="text-mist mt-4">
          The page you are looking for does not exist. Head back to the portfolio
          overview.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 mt-6 text-sm uppercase tracking-[0.3em] text-frost"
        >
          Back to home <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  </MainLayout>
);

export default NotFound;
