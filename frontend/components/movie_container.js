import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Movie from './movie.jsx';
import { getMovies } from '../actions/movie_actions.js'

const mapStateToProps = state => {
  return ({
    movies: state.movies
  });
};


const mapDispatchToProps = dispatch => {
  debugger
  return({
    getMovies: () => dispatch(getMovies())
  });
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Movie));
