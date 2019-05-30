class User < ApplicationRecord
  authenticates_with_sorcery!
  validates_confirmation_of :password, message: "Password must match confirmation", if: :password

  has_many :user_movies
  has_many :movies, through: :user_movies

  def movie_list
    movie_arr = self.movies.collect {|movie| movie.title}
  end

  def movie_list=(string)

    created_movies = [string].map {|movie| Movie.find_by({title: movie})}
    created_movies.each {|movie| self.movies << movie if !self.movies.include?(movie)}
  end
end
