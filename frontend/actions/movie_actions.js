export const RECEIVE_MOVIES = 'RECEIVE_MOVIES'
export const RECEIVE_MOVIE = 'RECEIVE_MOVIE'

export const receiveMovies = movies => ({
  type: RECEIVE_MOVIES,
  movies
});

export const receiveMovie = movie => ({
  type: RECEIVE_MOVIES,
  movie
});
