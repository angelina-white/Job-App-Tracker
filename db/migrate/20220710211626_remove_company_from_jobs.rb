class RemoveCompanyFromJobs < ActiveRecord::Migration[6.1]
  def change
    remove_column :jobs, :company_id
  end
end
