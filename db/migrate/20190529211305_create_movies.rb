class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string :title, null: false
      t.string :director, null: false
      t.integer :year, null: false
      t.float :rating

      t.timestamps
    end
    add_index :movies, :title, unique: true
    add_index :movies, :year
  end
end
