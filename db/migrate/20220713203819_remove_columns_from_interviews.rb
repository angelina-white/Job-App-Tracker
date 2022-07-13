class RemoveColumnsFromInterviews < ActiveRecord::Migration[6.1]
  def change
    remove_column :interviews, :interviewDate
    remove_column :interviews, :interviewTime
  end
end
