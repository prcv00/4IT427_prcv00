
interface FilmCardProps {
    title: string;
    year: number;
    genre: string;
    rating: 1|2|3|4|5|6|7|8|9|10;
    watched: boolean;
    onToggleWatched: (title:string) => void;
}

export function FilmCard({title, year, genre, rating, watched, onToggleWatched}: FilmCardProps) {
    return(
        <div className="filmCard">
            <h2>{title}</h2>
            <p>Rok:{year}</p>
            <p>Žánr:{genre}</p>
            <p>Hodnocení:{rating}</p>
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