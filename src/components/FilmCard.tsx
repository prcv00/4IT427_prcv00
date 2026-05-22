interface FilmCardProps {
    id: string;
    title: string;
    year: number;
    genre: string;
    rating: number;
    watched: boolean;
    onToggleWatched: (id:string) => void;
    onRemove: (id:string) => void;
}

export function FilmCard({id, title, year, genre, rating, watched, onToggleWatched, onRemove}: FilmCardProps) {
    const isRatingValid = rating >= 1 && rating <= 10;

    const cardClasses = [
        "group relative flex flex-col gap-3 rounded-xl border p-5 shadow-sm",
        "transition-all duration-200 ease-out",
        "hover:-translate-y-1 hover:shadow-lg hover:border-teal-400 dark:hover:border-teal-300",
        watched
            ? "bg-teal-50 border-teal-300 dark:bg-teal-900/40 dark:border-teal-700"
            : "bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700",
    ].join(" ");

    return (
        <div className={cardClasses}>
            <div className="flex items-start justify-between gap-3">
                <h2 className={`text-xl font-semibold ${watched ? "text-teal-800 dark:text-teal-200 line-through decoration-teal-500/60" : "text-gray-900 dark:text-gray-100"}`}>
                    {title}
                </h2>
                {watched && (
                    <span className="shrink-0 rounded-full bg-teal-500 text-white text-xs font-semibold px-2.5 py-1">
                        ✓ Zhlédnuto
                    </span>
                )}
            </div>

            <dl className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-gray-600 dark:text-gray-300">
                <div>
                    <dt className="text-xs uppercase tracking-wide text-gray-400 dark:text-gray-500">Rok</dt>
                    <dd>{year}</dd>
                </div>
                <div>
                    <dt className="text-xs uppercase tracking-wide text-gray-400 dark:text-gray-500">Žánr</dt>
                    <dd>{genre}</dd>
                </div>
                <div className="col-span-2">
                    <dt className="text-xs uppercase tracking-wide text-gray-400 dark:text-gray-500">Hodnocení</dt>
                    <dd className={isRatingValid ? "font-medium text-gray-900 dark:text-gray-100" : "text-red-500"}>
                        {isRatingValid ? `${rating} / 10` : "Neplatné hodnocení"}
                    </dd>
                </div>
            </dl>

            <div className="mt-2 flex flex-wrap gap-2">
                <button
                    type="button"
                    onClick={() => onToggleWatched(id)}
                    className="inline-flex items-center justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
                >
                    {watched ? "Označit nezhlédnuté" : "Označit zhlédnuté"}
                </button>
                <button
                    type="button"
                    onClick={() => onRemove(id)}
                    className="inline-flex items-center justify-center rounded-md border border-gray-300 dark:border-gray-600 px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 transition-colors hover:bg-red-50 hover:border-red-300 hover:text-red-700 dark:hover:bg-red-900/30 dark:hover:text-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
                >
                    Odebrat
                </button>
            </div>
        </div>
    );
}
