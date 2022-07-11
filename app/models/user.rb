class User < ApplicationRecord
    has_secure_password
    has_many :jobs
    has_many :interviews, through: :jobs
end
