class Movie < ApplicationRecord
  validates :director, :year, presence: true
  validates :title, presence: true, uniqueness: true


  has_many :movie_actors
  has_many :actors, through: :movie_actors

  def actor_list
    actor_arr = self.actors.collect {|actor| actor.name}
    actor_arr.join(", ")
  end

  def actor_list=(string)
    actors = string.split(",").map do |actor|
      actor.strip
      names = actor.split(" ")
      new = names.map {|name| name.downcase.capitalize}.join(" ")
    end
    created_actors = actors.map {|actor| Actor.find_or_create_by({name: actor})}
    self.actors = created_actors
  end
end
