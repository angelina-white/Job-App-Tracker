# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "destroying seeds"
Job.delete_all
Offer.delete_all

puts "starting seeding"

puts "seeding offers"
o0 = Offer.create(id: 1, salary: 0, medical: "", pto: 0, sickLeave: 0, bonus: 0, positionType: "")

puts "seeding jobs"
Job.create(dateApplied: "07/08/22", description: "do go code for hotel homes", applicationLink:"www.fakeapplink1.com", offer_id: o0.id, status: "pending", user_id: 2, company: "Airbnb")
Job.create(dateApplied: "07/09/22", description: "do code for music", applicationLink:"www.fakeapplink2.com", offer_id: o0.id, status: "pending", user_id: 2, company: "Spotify")
Job.create(dateApplied: "07/10/22", description: "do code for fast fashion", applicationLink:"www.fakeapplink3.com", offer_id: o0.id, status: "pending", user_id: 2, company: "Aritizia")
Job.create(dateApplied: "07/11/22", description: "do code for athletic wear", applicationLink:"www.fakeapplink4.com", offer_id: o0.id, status: "pending", user_id: 2, company: "Lululemon")
