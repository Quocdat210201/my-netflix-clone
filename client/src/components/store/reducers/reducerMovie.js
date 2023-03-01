import * as Types from "../types";

const reducerMovieInitialState = {
  NetflixOriginals: null,
  TrendingMovies: null,
  TVShows: null,
  TopRateMovies: null,
  ActionMovies: null,
  ComedyMovies: null,
  HorrorMovies: null,
  RomanceMovies: null,
  MovieDetail: null,
  SearchMovie: null,
};
const reducerMovie = (state = reducerMovieInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.GET_NETFLIX_ORIGINALS:
      return { ...state, NetflixOriginals: payload };
    case Types.GET_TRENDING_MOVIES:
      return { ...state, TrendingMovies: payload };
    case Types.GET_TV_SHOW:
      return { ...state, TVShows: payload };
    case Types.GET_TOPRATE_MOVIES:
      return { ...state, TopRateMovies: payload };
    case Types.GET_ACTIONS_MOVIES:
      return { ...state, ActionMovies: payload };
    case Types.GET_COMEDY_MOVIES:
      return { ...state, ComedyMovies: payload };
    case Types.GET_HORROR_MOVIES:
      return { ...state, HorrorMovies: payload };
    case Types.GET_ROMANCE_MOVIES:
      return { ...state, RomanceMovies: payload };
    case Types.SET_MOVIE_DETAIL:
      return { ...state, MovieDetail: payload };
    case Types.GET_SEARCH_MOVIE:
      return { ...state, SearchMovie: payload };
    default:
      return state;
  }
};

export default reducerMovie;
