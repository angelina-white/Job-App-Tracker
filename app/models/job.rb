class Job < ApplicationRecord
  belongs_to :status
  belongs_to :company
  belongs_to :offer
  has_many :interviews
end
