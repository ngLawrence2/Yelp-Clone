class ChangeHoursValueInBusiness < ActiveRecord::Migration[5.2]
  def change
    remove_column :businesses, :hours
  end
end
