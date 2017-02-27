class RemoveImagessFromProperties < ActiveRecord::Migration[5.0]
  def change
    remove_column :properties, :images, :string
  end
end
