class RemoveOffersFromJobs < ActiveRecord::Migration[6.1]
  def change
    remove_column :jobs, :offer_id
  end
end
