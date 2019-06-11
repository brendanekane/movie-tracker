export const getMovies = () => {
  let payload = (
    $.ajax({
      method: 'GET',
      url: 'api/movies'
    })
  );
  debugger
  return payload

};

export const getMovie = id => {
  return (
    $.ajax({
      method: 'GET',
      url: `api/movies/${id}`
    })
  );
};
