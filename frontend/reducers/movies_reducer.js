import React from 'react';
import { RECEIVE_MOVIES, RECEIVE_MOVIE } from '../actions/movie_actions'
import { merge } from 'lodash'

const moviesReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);
  switch (action.type) {
    case RECEIVE_MOVIES:
      return action.movies;
    case RECEIVE_MOVIE:
      return action.movie;
    default:
      return state;
  }
};

export default moviesReducer;
