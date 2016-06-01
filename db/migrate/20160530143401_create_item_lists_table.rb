class CreateItemListsTable < ActiveRecord::Migration
  def change
    create_table :list_items do |t|
      t.integer :item_id, null: false
      t.integer :list_id, null: false
      t.boolean :completed, default: false
    end
  end
end
