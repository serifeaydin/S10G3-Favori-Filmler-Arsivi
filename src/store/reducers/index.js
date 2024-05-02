import { movies } from '../../data.js';
import {
  NEXT_MOVIE,
  ADD_TO_FAVS,
  DELETE_FROM_FAVS,
  PREVIOUS_MOVIE,
} from '../actions/index.js';

const initialState = { movies: movies, favMovies: [], sira: 0 };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case NEXT_MOVIE:
      return { ...state, sira: state.sira + 1 };

    case ADD_TO_FAVS:
      const currentMovie = state.movies[state.sira];
      console.log(currentMovie);
      return {
        ...state,
        favMovies: [...state.favMovies, currentMovie],
        sira: state.sira + 1,
        movies: state.movies.filter((movie) => movie.id !== currentMovie.id),
      };

    case DELETE_FROM_FAVS:
      const updatedFavMovies = state.favMovies.filter(
        (movie) => movie.id !== action.payload
      );
      return {
        ...state,
        favMovies: updatedFavMovies,
      };
    case PREVIOUS_MOVIE:
      return { ...state, sira: state.sira - 1 };

    default:
      return state;
  }
}
