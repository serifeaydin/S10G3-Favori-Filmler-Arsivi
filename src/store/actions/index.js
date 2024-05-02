export const NEXT_MOVIE = 'NEXT_MOVIE';
export const ADD_TO_FAVS = 'ADD_TO_FAVS';
export const DELETE_FROM_FAVS = 'DELETE_FROM_FAVS';
export const PREVIOUS_MOVIE = 'PREVIOUS_MOVIE';
export const nextMovie = () => {
  return {
    type: NEXT_MOVIE,
  };
};
export const addToFavs = () => {
  return {
    type: ADD_TO_FAVS,
    
  };
};
export const deleteFromFavs = (id) => {
  return {
    type: DELETE_FROM_FAVS,
    payload: id,
  };
};
export const previousMovie = () => {
  return {
    type: PREVIOUS_MOVIE,
  };
};
