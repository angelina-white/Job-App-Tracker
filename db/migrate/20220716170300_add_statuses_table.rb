class AddStatusesTable < ActiveRecord::Migration[6.1]
  def change
    create_table :statuses
  end
end
