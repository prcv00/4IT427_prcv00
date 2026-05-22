import type { Film } from "@/types/film.types";

export function AddFilmForm ({onAdd}: {onAdd: (film:Film) => void}){
    function add(formData:FormData){
        const title = formData.get("title")
        const year = formData.get("year")
        const genre = formData.get("genre")
        const rating = formData.get("rating")
        onAdd( { id: crypto.randomUUID(),
             title: (typeof title === 'string') ? title : "",
             year: (typeof year === 'number') ? year : 0, 
             genre: (typeof genre === 'string') ? genre : "",
             rating: (typeof rating === 'number') ? rating : 0,
             watched: false })
    }
    return (
        <form action={add} className="AddFilmForm">
            <h2>Přidat film</h2>
            <input type = "text" name="title"></input>
            <input type = "number" name="year"></input>
            <input name="genre"></input>
            <input name="rating"></input>
            <button type="submit">Přidat</button>
        </form>
    )
}