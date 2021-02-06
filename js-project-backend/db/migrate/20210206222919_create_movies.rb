class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.string   :title
      t.string   :director
      t.text     :summary
      t.text     :review
      t.integer  :rating
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
