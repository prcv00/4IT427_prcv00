import { FilmCard } from "@/components/FilmCard";
import { useWatchlist } from "@/context/WatchlistContext";

export function WatchlistPage() {
  const { films, removeFilm, toggleWatched, markAllAsWatched } = useWatchlist();

  const watchedCount = films.filter((film) => film.watched).length;
  const totalCount = films.length;

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Můj watchlist
        </h1>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          <span className="font-semibold text-teal-600 dark:text-teal-300">
            {watchedCount}
          </span>{" "}
          / {totalCount} zhlédnuto
        </p>
      </header>

      <div className="mb-6">
        <button
          type="button"
          onClick={markAllAsWatched}
          className="inline-flex items-center justify-center rounded-md bg-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-purple-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
        >
          Označit vše jako zhlédnuté
        </button>
      </div>

      {totalCount === 0 ? (
        <p className="rounded-xl border border-dashed border-gray-300 dark:border-gray-700 p-8 text-center text-gray-500 dark:text-gray-400">
          Watchlist je prázdný. Přidej první film.
        </p>
      ) : (
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
      )}
    </main>
  );
}
