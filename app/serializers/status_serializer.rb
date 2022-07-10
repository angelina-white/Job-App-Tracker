class StatusSerializer < ActiveModel::Serializer
  attributes :id, :pending, :offer, :rejection, :ghosted
end
