import React from 'react';
import { withRouter } from 'react-router-dom';



class Movie extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    debugger
    this.props.getMovies();
  }

  render() {
    debugger
    return (
      <div>
        "HELLOOOOO"
      </div>
    )
  }
}

export default withRouter(Movie);
