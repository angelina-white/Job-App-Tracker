class JobSerializer < ActiveModel::Serializer
  attributes :id, :dateApplied, :description, :applicationLink
  has_one :status
  has_one :company
  has_one :offer
end
