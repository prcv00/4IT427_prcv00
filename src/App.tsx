import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { WatchlistPage } from "./pages/WatchlistPage";
import { AddFilmPage } from "./pages/AddFilmPage";
import { ThemeToggle } from "./components/ThemeToggle";

/* Stylingová metoda:  Tailwind CSS */
function App() {
  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    [
      "inline-flex items-center rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
      isActive
        ? "bg-teal-600 text-white shadow-sm"
        : "text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white",
    ].join(" ");

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors">
      <nav className="sticky top-0 z-10 border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold tracking-tight">🎬 Watchlist</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <NavLink to="/" end className={linkClasses}>
              Můj watchlist
            </NavLink>
            <NavLink to="/form" className={linkClasses}>
              Přidat film
            </NavLink>
            <span className="mx-1 hidden h-5 w-px bg-gray-200 dark:bg-gray-700 sm:block" />
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<WatchlistPage />} />
        <Route path="/form" element={<AddFilmPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
