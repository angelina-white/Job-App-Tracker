class DropTables < ActiveRecord::Migration[6.1]
  def change
    drop_table :applications
    drop_table :apps
    drop_table :statuses
  end
end
