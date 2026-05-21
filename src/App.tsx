import { FilmCard } from "./components/FilmCard";
import { useWatchlist } from "./hooks/useWatchlist";

export interface Film {
  title: string;
  year: number;
  genre: string;
  rating: number;
  watched: boolean;
}

const initialFilms: Film[] = [
  { title: "Inception", year: 2010, genre: "Sci-Fi",rating: 9 ,watched: true },
  { title: "The Matrix", year: 1999, genre: "Sci-Fi",rating: 8 ,watched: false },
  { title: "Interstellar", year: 2014, genre: "Sci-Fi",rating: 9 ,watched: true },
]

function App() {
  const {films, toggleWatched, markAllAsWatched} = useWatchlist(initialFilms)

  return (
    <main>
    <h1>Film Watchlist</h1>
    <button onClick={markAllAsWatched}> Označit vše jako zhlédnuté</button>
    {   
      films.map((film) => (
        <FilmCard key={film.title} {...film} onToggleWatched={toggleWatched(film.title)}/>
      ))
    }
    </main>
  );
}

export default App
