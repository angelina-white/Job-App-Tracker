class RemoveStatusIdFromJob < ActiveRecord::Migration[6.1]
  def change
    remove_column :jobs, :status_id
  end
end
