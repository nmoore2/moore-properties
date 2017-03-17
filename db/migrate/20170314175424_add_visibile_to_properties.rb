class AddVisibileToProperties < ActiveRecord::Migration[5.0]
  def change
    add_column :properties, :visible, :boolean
  end
end
