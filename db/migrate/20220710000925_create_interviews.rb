class CreateInterviews < ActiveRecord::Migration[6.1]
  def change
    create_table :interviews do |t|
      t.date :interviewDate
      t.time :interviewTime
      t.belongs_to :job, null: false, foreign_key: true
    end
  end
end
