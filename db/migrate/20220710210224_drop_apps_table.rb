class DropAppsTable < ActiveRecord::Migration[6.1]
  def change
    drop_table :apps
  end
end
