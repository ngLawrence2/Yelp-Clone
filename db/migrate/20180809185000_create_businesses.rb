class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :name, null:false
      t.string :address, null:false
      t.string :city, null:false
      t.integer :zipCode,null:false
      t.float :lat, null:false
      t.float :lng, null:false
      t.string :hours, null:false
      t.string :phone, null:false
      t.integer :numberOfStars, null:false
      t.integer :numberOfReviews, null:false
      t.string :price, null:false
    end
    add_index :businesses, :name
  end
end
