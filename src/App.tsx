import { AddFilmForm } from "./components/addFilmForm";
import { FilmCard } from "./components/FilmCard";
import { useWatchlist } from "./context/WatchlistContext";


function App() {
  const {films, addFilm, removeFilm, toggleWatched, markAllAsWatched} = useWatchlist()

  return (
    <main>
    <h1>Film Watchlist</h1>
    <button onClick={markAllAsWatched}> Označit vše jako zhlédnuté</button>
    {   
      films.map((film) => (
        <FilmCard key={film.title} {...film} onToggleWatched={() => toggleWatched(film.id)} onRemove= {()=> removeFilm(film.id)}/>
      ))
    }
    <AddFilmForm onAdd={addFilm}></AddFilmForm>
    </main>
  );s
}

export default App
