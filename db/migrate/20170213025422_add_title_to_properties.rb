class AddTitleToProperties < ActiveRecord::Migration[5.0]
  def change
    add_column :properties, :title, :string
  end
end
