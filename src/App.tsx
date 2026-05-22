import AddFilmForm from "./components/AddFilmForm";
import { FilmCard } from "./components/FilmCard";
import { ThemeToggle } from "./components/ThemeToggle";
import { useWatchlist } from "./context/WatchlistContext";

/* Stylingová metoda:  Tailwind CSS */
function App() {
  const { films, removeFilm, toggleWatched, markAllAsWatched } = useWatchlist();

  const watchedCount = films.filter((film) => film.watched).length;
  const totalCount = films.length;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors">
      <main className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              🎬 Film Watchlist
            </h1>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              <span className="font-semibold text-teal-600 dark:text-teal-300">
                {watchedCount}
              </span>{" "}
              / {totalCount} zhlédnuto
            </p>
          </div>
          <ThemeToggle />
        </header>

        <section className="mb-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 shadow-sm">
          <button
            type="button"
            onClick={markAllAsWatched}
            className="inline-flex items-center justify-center rounded-md bg-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-purple-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
          >
            Označit vše jako zhlédnuté
          </button>
        </section>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {films.map((film) => (
            <FilmCard
              key={film.id}
              {...film}
              onToggleWatched={() => toggleWatched(film.id)}
              onRemove={() => removeFilm(film.id)}
            />
          ))}
        </section>

        <AddFilmForm />
      </main>
    </div>
  );
}

export default App;
