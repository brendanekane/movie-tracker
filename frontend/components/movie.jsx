import React from 'react';
import { Link, withRouter } from 'react-router-dom';



class Movie extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.getMovies();
    debugger
  }

  render() {
    debugger
    return (
      <div>
        <ul>
          {Object.keys(this.props.movies).map( key => {
            const movie = this.props.movies[key];
            return (
              <li>
                <Link to={`/movie/${key}`}>
                </Link>
                <br/>
                <div>
                  <p>{movie.title}</p>
                  <p>{movie.director}</p>
                  <p>{movie.year}</p>
                </div>
              </li>

            )
          })}
        </ul>
      </div>
    )
  }
}

export default withRouter(Movie);
