import { createContext, useContext, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";
import type { Film } from "@/types/film.types";
import { fetchFilms } from "@/api/films";

type WatchlistContextType = {
  films: Film[];
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  refetch: () => void;
  addFilm: (film: Film) => void;
  removeFilm: (id: string) => void;
  toggleWatched: (id: string) => void;
  markAllAsWatched: () => void;
};

const WatchlistContext = createContext<WatchlistContextType | null>(null);

interface WatchlistProviderProps {
  children: ReactNode;
}

export function WatchlistProvider({ children }: WatchlistProviderProps) {


  const [films, setFilms] = useState<Film[]>([]);


  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["films"],
    queryFn: fetchFilms,
  });

  useEffect(() => {
    setFilms(data ?? []);
  }, [data]);

  const addFilm = (film: Film) => {
    setFilms((prev) => [...prev, film]);
  };

  const removeFilm = (id: string) => {
    setFilms((prev) => prev.filter((film) => film.id !== id));
  };

  const toggleWatched = (id: string) => {
    setFilms((prev) =>
      prev.map((film) =>
        film.id === id ? { ...film, watched: !film.watched } : film,
      ),
    );
  };

  const markAllAsWatched = () => {
    setFilms((prev) => prev.map((film) => ({ ...film, watched: true })));
  };

  useEffect(() => {
    const watchedCount = films.filter((f) => f.watched).length;
    document.title = `Watchlist (${watchedCount}/${films.length} zhlédnuto)`;
  }, [films]);

  return (
    <WatchlistContext.Provider
      value={{
        films,
        isLoading,
        isError,
        error: (error as Error) ?? null,
        refetch: () => {
          refetch();
        },
        addFilm,
        removeFilm,
        toggleWatched,
        markAllAsWatched,
      }}
    >
      {children}
    </WatchlistContext.Provider>
  );
}

export function useWatchlist() {
  const context = useContext(WatchlistContext);

  if (!context) {
    throw new Error("useWatchlist must be used inside WatchlistProvider");
  }

  return context;
}
