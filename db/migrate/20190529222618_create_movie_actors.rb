class CreateMovieActors < ActiveRecord::Migration[5.2]
  def change
    create_table :movie_actors do |t|
      t.references :movie
      t.references :actor

      t.timestamps
    end
  end
end
