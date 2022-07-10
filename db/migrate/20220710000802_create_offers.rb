class CreateOffers < ActiveRecord::Migration[6.1]
  def change
    create_table :offers do |t|
      t.integer :salary
      t.string :medical
      t.integer :pto
      t.integer :sickLeave
      t.integer :bonus
      t.string :positionType
    end
  end
end
