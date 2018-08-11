class CreateKeywords < ActiveRecord::Migration[5.2]
  def change
    create_table :keywords do |t|
      t.string :name, null:false
    end

    create_table :categories do |t|
      t.integer :business_id, null:false
      t.integer :keyword_id, null:false
    end
    add_index :categories, :business_id
    add_index :categories, :keyword_id
  end
end
