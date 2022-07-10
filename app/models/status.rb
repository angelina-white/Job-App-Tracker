class Status < ApplicationRecord
    has_many :jobs

    validates :pending, numericality: true, inclusion: 0..1
    validates :offer, numericality: true, inclusion: 0..1
    validates :rejection, numericality: true, inclusion: 0..1
    validates :ghosted, numericality: true, inclusion: 0..1
end
