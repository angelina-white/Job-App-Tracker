class JobSerializer < ActiveModel::Serializer
  attributes :id, :dateApplied, :description, :applicationLink, :status, :company
  has_one :offer
  has_one :user
end
