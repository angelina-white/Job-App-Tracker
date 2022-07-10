class Job < ApplicationRecord
  belongs_to :status
  belongs_to :company
  has_many :interviews
end
