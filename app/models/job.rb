class Job < ApplicationRecord
  belongs_to :offer
  belongs_to :user
  has_many :interviews, dependent: :destroy

end
