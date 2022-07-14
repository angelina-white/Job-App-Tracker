class Offer < ApplicationRecord
    has_many :jobs

    validates :salary, numericality: true
    validates :pto, numericality: true
    validates :sickLeave, numericality: true
    validates :bonus, numericality: true
end
