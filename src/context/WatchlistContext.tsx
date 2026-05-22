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
const WatchlistContext = createContext<WatchlistContextType>({ 
    films:initialFilms, 
    addFilm: () => {}, 
    removeFilm: () => {}, 
    toggleWatched: () => {}, 
    markAllAsWatched: () => {}});

export function WatchlistProvider({ children }: { children: ReactNode }) {
    const [films, setFilms] = useState<Film[]>(initialFilms)

    function toggleWatched(id:string){
        return () => (
            setFilms(prev => prev.map(film =>
            film.id === id? {...film, watched:!film.watched} : film
        )))
    }

    function markAllAsWatched(){
        return setFilms(prev => prev.map(film => ({...film, watched:true})))
    }

    function addFilm(film:Film){
        return () => (
            setFilms(prev => [...prev, film]
        ))
    }

    function removeFilm(id:string){
        return () => (
            setFilms(prev => prev.filter(f=>f.id !== id)
        ))
    }

    useEffect(()=>{
        const watchedCount = films.filter(f=>f.watched).length;
        document.title = `Watchlist (${watchedCount}/${films.length} zhlédnuto)`
    },[films]);
    
    return (<WatchlistContext.Provider value={{ films, addFilm, removeFilm, toggleWatched, markAllAsWatched }}>{children}</WatchlistContext.Provider>);
}

export const useWatchlist = () => useContext(WatchlistContext)