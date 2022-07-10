class CreateStatuses < ActiveRecord::Migration[6.1]
  def change
    create_table :statuses do |t|
      t.integer :pending
      t.integer :offer
      t.integer :rejection
      t.integer :ghosted
    end
  end
end
