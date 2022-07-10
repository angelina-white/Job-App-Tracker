class AddCompanyToJobs < ActiveRecord::Migration[6.1]
  def change
    add_column :jobs, :company, :string
  end
end
