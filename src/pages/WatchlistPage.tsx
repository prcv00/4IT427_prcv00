import { FilmCard } from "@/components/FilmCard";
import { useWatchlist } from "@/context/WatchlistContext";

export function WatchlistPage() {
  const {
    films,
    isLoading,
    isError,
    error,
    refetch,
    removeFilm,
    toggleWatched,
    markAllAsWatched,
  } = useWatchlist();

  const watchedCount = films.filter((film) => film.watched).length;
  const totalCount = films.length;

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Můj watchlist
        </h1>
        {!isLoading && !isError && (
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            <span className="font-semibold text-teal-600 dark:text-teal-300">
              {watchedCount}
            </span>{" "}
            / {totalCount} zhlédnuto
          </p>
        )}
      </header>

      {isLoading ? (
        <div
          role="status"
          aria-live="polite"
          className="flex items-center justify-center gap-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-10 shadow-sm"
        >
          <span
            aria-hidden="true"
            className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-gray-300 border-t-teal-600 dark:border-gray-600 dark:border-t-teal-300"
          />
          <span className="text-gray-700 dark:text-gray-200">Načítám…</span>
        </div>
      ) : isError ? (
        <div
          role="alert"
          className="rounded-xl border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/30 p-6 shadow-sm"
        >
          <h2 className="text-lg font-semibold text-red-800 dark:text-red-200">
            Filmy se nepodařilo načíst
          </h2>
          <p className="mt-1 text-sm text-red-700 dark:text-red-300">
            {error?.message ?? "Neznámá chyba"}
          </p>
          <button
            type="button"
            onClick={() => refetch()}
            className="mt-4 inline-flex items-center justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
          >
            Zkusit znovu
          </button>
        </div>
      ) : (
        <>
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
        </>
      )}
    </main>
  );
}
