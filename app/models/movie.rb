class Movie < ApplicationRecord
  validates :director, :year, presence: true
  validates :title, presence: true, uniqueness: true
end
