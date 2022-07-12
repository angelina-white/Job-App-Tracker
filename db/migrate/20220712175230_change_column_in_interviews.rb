class ChangeColumnInInterviews < ActiveRecord::Migration[6.1]
  def change
    change_column :interviews, :interviewTime, :string
  end
end
