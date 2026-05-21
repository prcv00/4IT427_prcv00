interface FilmCardProps {
    title: string;
    year: number;
    genre: string;
    rating: number;
    watched: boolean;
    onToggleWatched: (title:string) => void;
}

export function FilmCard({title, year, genre, rating, watched, onToggleWatched}: FilmCardProps) {
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
                onClick={()=>onToggleWatched(title)}
            >
                Změnit stav zhlédnutí
            </button>

        </div>
    )
}