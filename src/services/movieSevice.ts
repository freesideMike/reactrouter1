/* 
import { IOmdbResponse } from "../models/IOmdbResponse";
import { get } from "./serivceBase";

export const serachMovies = async (searchText: string) => {
  const url: string = `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${searchText}`;
  
  const response = get<IOmdbResponse>(url);
  return (await response).data;
};
 */