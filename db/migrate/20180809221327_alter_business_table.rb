class AlterBusinessTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :businesses, :numberOfStars
    remove_column :businesses, :numberOfReviews
    add_column :businesses, :creditCard, :boolean
    add_column :businesses, :parking, :string
    add_column :businesses, :takeOut, :boolean
    add_column :businesses, :delivery, :boolean
    add_column :businesses, :rating, :float, null:false
    
  end
end
