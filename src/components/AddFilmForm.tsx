import { useState } from "react";
import { useWatchlist } from "../context/WatchlistContext";

function AddFilmForm() {
  const { addFilm } = useWatchlist();

  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");

  return (
    <form
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
      <h2>Přidat film</h2>

      <div>
        <label htmlFor="title">Název filmu</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="year">Rok</label>
        <input
          id="year"
          type="number"
          value={year}
          onChange={(event) => setYear(event.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="genre">Žánr</label>
        <input
          id="genre"
          type="text"
          value={genre}
          onChange={(event) => setGenre(event.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="rating">Hodnocení</label>
        <input
          id="rating"
          type="number"
          min="1"
          max="10"
          value={rating}
          onChange={(event) => setRating(event.target.value)}
          required
        />
      </div>

      <button type="submit">Přidat film</button>
    </form>
  );
}

export default AddFilmForm;
