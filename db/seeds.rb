# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "destroying seeds"
Job.delete_all
Company.delete_all
Status.delete_all
Offer.delete_all

puts "starting seeding"

puts "seeding statuses"
pending = Status.create(pending: 1, offer: 0, rejection: 0, ghosted: 0)
offer = Status.create(pending: 0, offer: 1, rejection: 0, ghosted: 0)
rejection = Status.create(pending: 0, offer: 0, rejection: 1, ghosted: 0)
ghosted = Status.create(pending: 0, offer: 0, rejection: 0, ghosted: 1)

puts "seeding companies"
airbnb = Company.create(name:"AirBnb", companyLink:"https://careers.airbnb.com")
spotify = Company.create(name:"Spotify", companyLink:"https://www.lifeatspotify.com")
aritzia = Company.create(name:"Aritzia", companyLink:"https://www.aritzia.com/en/aritzia/careers/careers-landing-page/careers-landing.html")
lululemon = Company.create(name:"Lululemon", companyLink:"https://careers.lululemon.com/en_US/careers")

puts "seeding offers"
o0 = Offer.create(salary: 0, medical: "", pto: 0, sickLeave: 0, bonus: 0, positionType: "")
o1 = Offer.create(salary: 65000, medical: "BCBS", pto: 10, sickLeave: 10, bonus: 5000, positionType: "Fulltime")

puts "seeding jobs"
job1 = Job.create(dateApplied: "07/08/22", description: "do go code for hotel homes", applicationLink:"www.fakeapplink1.com", status_id: pending.id, company_id: airbnb.id, offer_id: o0.id)
job2 = Job.create(dateApplied: "07/09/22", description: "do code for music", applicationLink:"www.fakeapplink2.com", status_id: pending.id, company_id: spotify.id, offer_id: o0.id)
job3 = Job.create(dateApplied: "07/10/22", description: "do code for fast fashion", applicationLink:"www.fakeapplink3.com", status_id: pending.id, company_id: aritzia.id, offer_id: o0.id)
job4 = Job.create(dateApplied: "07/11/22", description: "do code for athletic wear", applicationLink:"www.fakeapplink4.com", status_id: pending.id, company_id: lululemon.id, offer_id: o0.id)