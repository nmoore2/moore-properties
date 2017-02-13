class CreateProperties < ActiveRecord::Migration[5.0]
  def change
    create_table :properties do |t|
      t.string :address
      t.boolean :available
      t.string :features
      t.string :rate
      t.string :pets
      t.string :directions

      t.timestamps
    end
  end
end
