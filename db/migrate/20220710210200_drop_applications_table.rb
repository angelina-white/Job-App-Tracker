class DropApplicationsTable < ActiveRecord::Migration[6.1]
  def change
    drop_table :applications
  end
end
