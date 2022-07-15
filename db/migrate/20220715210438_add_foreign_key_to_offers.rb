class AddForeignKeyToOffers < ActiveRecord::Migration[6.1]
  def change
    add_reference :offers, :job, foreign_key: true
  end
end
