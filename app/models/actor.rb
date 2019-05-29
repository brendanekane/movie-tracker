class Actor < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :movie_actors
  has_many :movies, through: :movie_actors

  def movie_list
    movie_arr = self.movies.collect { |movie| movie.title}
    movie_arr.join(", ")
  end

  def movie_list=(string)
    movies = string.split(",").map {|movie| movie.strip.capitalize}
    created_movies = movies.map {|movie| Movie.find_by({name: movie})}
    self.actors = created_movies
  end
end
