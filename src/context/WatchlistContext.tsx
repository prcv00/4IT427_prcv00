import { createContext, useContext } from "react";
import type { Film } from "@/types/film.types";
import { useEffect, useState } from "react"
import type { ReactNode } from "react";

export const initialFilms: Film[] = [
  { id: "1", title: "Inception", year: 2010, genre: "Sci-Fi",rating: 9 ,watched: true },
  { id: "2", title: "The Matrix", year: 1999, genre: "Sci-Fi",rating: 8 ,watched: false },
  { id: "3", title: "Interstellar", year: 2014, genre: "Sci-Fi",rating: 9 ,watched: true },
]

type WatchlistContextType = {
    films: Film[];
    addFilm: (film:Film) => void;
    removeFilm: (id:string) => void;
    toggleWatched : (id:string) => void;
    markAllAsWatched: () => void;

}
const WatchlistContext = createContext<WatchlistContextType | null>(null);


interface WatchlistProviderProps {
  children: ReactNode;
}

export function WatchlistProvider({ children }: WatchlistProviderProps) {
    const [films, setFilms] = useState<Film[]>(initialFilms);

    const addFilm = (film: Film) => {
        setFilms((prevFilms) => [...prevFilms, film]);
    };

    const removeFilm = (id: string) => {
        setFilms((prevFilms) => prevFilms.filter((film) => film.id !== id));
    };

    const toggleWatched = (id: string) => {
        setFilms((prevFilms) =>
        prevFilms.map((film) =>
            film.id === id ? { ...film, watched: !film.watched } : film,
        ),
        );
    };

    const markAllAsWatched = () => {
        setFilms((prevFilms) =>
        prevFilms.map((film) => ({
            ...film,
            watched: true,
        })),
        );
    };

    useEffect(()=>{
        const watchedCount = films.filter(f=>f.watched).length;
        document.title = `Watchlist (${watchedCount}/${films.length} zhlédnuto)`
    },[films]);
    
    return (<WatchlistContext.Provider value={{ films, addFilm, removeFilm, toggleWatched, markAllAsWatched }}>{children}</WatchlistContext.Provider>);
}
export function useWatchlist() {
  const context = useContext(WatchlistContext);

  if (!context) {
    throw new Error("useWatchlist must be used inside WatchlistProvider");
  }

  return context;
}
