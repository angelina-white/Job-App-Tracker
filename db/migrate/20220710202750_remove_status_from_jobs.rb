class RemoveStatusFromJobs < ActiveRecord::Migration[6.1]
  def change
    add_column :jobs, :status, :string
  end
end
