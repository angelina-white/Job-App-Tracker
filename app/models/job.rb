class Job < ApplicationRecord
  belongs_to :company
  belongs_to :offer
  belongs_to :user
  has_many :interviews
end
