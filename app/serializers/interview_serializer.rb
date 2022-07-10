class InterviewSerializer < ActiveModel::Serializer
  attributes :id, :interviewDate, :interviewTime
  has_one :job
end
