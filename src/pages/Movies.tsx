//import { useEffect, useState } from "react";
import axios from "axios";
import { IMovie } from "../models/IMovie";
import { IOmdbResponse } from "../models/IOmdbResponse";
import { useEffect, useState } from "react";
//import { serachMovies } from "../services/movieSevice";
//import { serachMovies } from "../services/movieSevice";

export const Movies = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [searchText, setSearchText] = useState<string>("star");

  const serachAPI = async () => {
    const response = await axios.get<IOmdbResponse>(
      `http://www.omdbapi.com/?apikey=${
        import.meta.env.VITE_OMDB_API_KEY
      }&s=${searchText}`
    );

    setMovies(response.data.Search);
  };
  useEffect(() => {
    if (movies.length === 0) {
      const getMovies = async (url: string) => {
        const response = await axios.get<IOmdbResponse>(url);

        setMovies(response.data.Search);
      };
      getMovies(
        `http://www.omdbapi.com/?apikey=${
          import.meta.env.VITE_OMDB_API_KEY
        }&s=${searchText}`
      );
    }
  });

  return (
    <>
      <main>
        <h2>Movies</h2>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={serachAPI}>Sök</button>
        {
          // för att testa om det finns något i listan, movies.length
        }
        {movies.length}
        {movies.length > 0 &&
          movies.map((movie) => {
            return (
              <>
                <img src={movie.Poster} alt={movie.Title} />
                <h3>{movie.Title}</h3>
              </>
            );
          })}
      </main>
    </>
  );
};

//MOVIESERVICE

/* 
export const searchMovie = async (movieID: string) => {
    const url:string = `http://www.omdbapi.com/?apikey=${myPassword}&i=${movieID}`;
    const data = await getMovie(url);
    return data;
}
 */
// SERVICE-BASE

/*
export const getMovie = async (url: string): Promise<IMovieExt[]> => {
    const response = await axios.get<IMovieExt[]>(url);
    return response.data;
}

 */
