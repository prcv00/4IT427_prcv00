import { FilmCard } from "./components/FilmCard";

interface Film {
  id: string;
  title: string;
  year: number;
  genre: string;
  rating: 1|2|3|4|5|6|7|8|9|10;
  watched: boolean;
}

const initialFilms: Film[] = [
  {id: "1", title: "Inception", year: 2010, genre: "Sci-Fi",rating: 9 ,watched: true },
  {id: "2", title: "The Matrix", year: 1999, genre: "Sci-Fi",rating: 8 ,watched: false },
  {id: "3", title: "Interstellar", year: 2014, genre: "Sci-Fi",rating: 9 ,watched: true },
]

function App() {

  const handleToggleWatched = (title: string) => {
    console.log("Kliknuto na film: "+ title)
  };

  return (
    <main>
    <h1>Film Watchlist</h1>
    {   
      initialFilms.map((film) => (
        <FilmCard title ={film.title} year={film.year} genre={film.genre} rating={film.rating} watched={film.watched} onToggleWatched={handleToggleWatched}/>
      ))
    }
    </main>

  );
}

export default App
