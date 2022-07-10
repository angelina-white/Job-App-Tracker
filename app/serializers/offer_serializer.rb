class OfferSerializer < ActiveModel::Serializer
  attributes :id, :salary, :medical, :pto, :sickLeave, :bonus, :positionType
end
