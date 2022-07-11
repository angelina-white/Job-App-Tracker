class JobSerializer < ActiveModel::Serializer
  attributes :id, :dateApplied, :description, :applicationLink, :status, :company
  has_one :offer
end
