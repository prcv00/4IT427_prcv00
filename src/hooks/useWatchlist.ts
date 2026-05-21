import type { Film } from "@/App"
import { useEffect, useState } from "react"

export function useWatchlist(initialFilms: Film[]) {
    const [films, setFilms] = useState(initialFilms)

    function toggleWatched(title: string){
        return () => (
            setFilms(prev => prev.map(film =>
            film.title === title? {...film, watched:!film.watched} : film
        )))
    }

    function markAllAsWatched(){
        return setFilms(prev => prev.map(film => ({...film, watched:true})))
    }

    useEffect(()=>{
        const watchedCount = films.filter(f=>f.watched).length;
        document.title = `Watchlist (${watchedCount}/${films.length}) zhlédnuto`
    },[films]);
    
    return {films, toggleWatched, markAllAsWatched}
}