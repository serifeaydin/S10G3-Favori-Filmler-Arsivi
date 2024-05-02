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
        const deletedMovieId = action.payload; // Silinecek film ID'si
        const deletedMovieIndex = state.favMovies.findIndex(movie => movie.id === deletedMovieId); // Silinecek filmi bul
        const deletedMovie = state.favMovies[deletedMovieIndex]; // Silinecek filmi al
      
        return {
          ...state,
          favMovies: state.favMovies.filter(movie => movie.id !== deletedMovieId), // Favoriler listesinden filmi çıkar
          movies: [...state.movies, deletedMovie], // Silinen filmi filmler listesine geri ekle
        };

    case PREVIOUS_MOVIE:
      return { ...state, sira: state.sira - 1 };

    default:
      return state;
  }
}
