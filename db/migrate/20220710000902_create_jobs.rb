class CreateJobs < ActiveRecord::Migration[6.1]
  def change
    create_table :jobs do |t|
      t.date :dateApplied
      t.text :description
      t.string :applicationLink
      t.belongs_to :status, null: false, foreign_key: true
      t.belongs_to :company, null: false, foreign_key: true
      t.belongs_to :offer, null: true, foreign_key: true
    end
  end
end
