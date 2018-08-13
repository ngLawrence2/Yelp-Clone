class AddColumnHours < ActiveRecord::Migration[5.2]
  def change
      add_column :businesses, :hours, :string, array: true
  end
end
