import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Movie from './movie.jsx';

const mapStateToProps = state => {
  return;
};


const mapDispatchToProps = state => {
  return;
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Movie));
