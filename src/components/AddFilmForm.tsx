import { useState } from "react";
import { useWatchlist } from "../context/WatchlistContext";

function AddFilmForm() {
  const { addFilm } = useWatchlist();

  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");

  const inputClasses =
    "w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 shadow-sm transition-colors focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 dark:focus:ring-teal-700";

  const labelClasses =
    "mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200";

  return (
    <form
      className="mt-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-sm"
      onSubmit={(event) => {
        event.preventDefault();

        addFilm({
          id: crypto.randomUUID(),
          title,
          year: Number(year),
          genre,
          rating: Number(rating),
          watched: false,
        });

        setTitle("");
        setYear("");
        setGenre("");
        setRating("");
      }}
    >
      <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
        Přidat film
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="title" className={labelClasses}>
            Název filmu
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="year" className={labelClasses}>
            Rok
          </label>
          <input
            id="year"
            type="number"
            value={year}
            onChange={(event) => setYear(event.target.value)}
            required
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="genre" className={labelClasses}>
            Žánr
          </label>
          <input
            id="genre"
            type="text"
            value={genre}
            onChange={(event) => setGenre(event.target.value)}
            required
            className={inputClasses}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="rating" className={labelClasses}>
            Hodnocení (1–10)
          </label>
          <input
            id="rating"
            type="number"
            min="1"
            max="10"
            value={rating}
            onChange={(event) => setRating(event.target.value)}
            required
            className={inputClasses}
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-5 inline-flex items-center justify-center rounded-md bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
      >
        Přidat film
      </button>
    </form>
  );
}

export default AddFilmForm;
