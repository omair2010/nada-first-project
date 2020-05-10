import axios from "axios";

const TMDB_URL = "https://api.themoviedb.org/3";
const APIKEY = "f12531893b7fb1a50cc7e821a8cb716b";

export const preUrl = "https://image.tmdb.org/t/p/w500";

export const getMovies = async (page) =>
  axios.get(
    `${TMDB_URL}/discover/movie?api_key=${APIKEY}&page=${page}&primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22`
  );