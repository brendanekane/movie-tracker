import * as MovieApiUtil from '../util/movie_api_util.js'

export const RECEIVE_MOVIES = 'RECEIVE_MOVIES'
export const RECEIVE_MOVIE = 'RECEIVE_MOVIE'

export const receiveMovies = movies => {
  debugger
  debugger
  return ({
    type: RECEIVE_MOVIES,
    movies
  })

}

export const getMovies = () => dispatch => {
  debugger
  return (
    MovieApiUtil.getMovies()
      .then(movies => {
        debugger
        dispatch(receiveMovies(movies))
      })
  );
};

export const receiveMovie = movie => ({
  type: RECEIVE_MOVIES,
  movie
});
