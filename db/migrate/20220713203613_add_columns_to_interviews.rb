class AddColumnsToInterviews < ActiveRecord::Migration[6.1]
  def change
    add_column :interviews, :month, :integer
    add_column :interviews, :day, :integer
    add_column :interviews, :year, :integer
    add_column :interviews, :hour, :integer
    add_column :interviews, :minute, :integer
  end
end
