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

export function FilmCard({id, title, year, genre, rating, watched, onToggleWatched,onRemove}: FilmCardProps) {
    const isRatingValid = rating >= 1 && rating <= 10;
    return(
        <div className="filmCard">
            <h2>{title}</h2>
            <p>Rok:{year}</p>
            <p>Žánr:{genre}</p>
            <p>Hodnocení:{isRatingValid ? rating : "Neplatné hodnocení"}</p>
            {watched && <p>✓ Zhlédnuto</p>}
            <button
                className={`btn btn-primary`}
                onClick={()=>onToggleWatched(id)}
            >
                Změnit stav zhlédnutí
            </button>
            <button 
                className={`btn btn-secondary`}
                onClick={()=>onRemove(id)}
            >
                Odebrat
            </button>
        </div>
    )
}