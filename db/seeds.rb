puts "destroying seeds"
Job.delete_all
Offer.delete_all
Interview.delete_all
User.delete_all

# puts "starting seeding"

# puts "seeding offers"
# o0 = Offer.create(id: 1, salary: 0, medical: "", pto: 0, sickLeave: 0, bonus: 0, positionType: "")

# puts "seeding offers"
# u1 = User.create(id: 1, username: "ang", password_digest: "123")

# puts "seeding jobs"
# Job.create(id: 1, dateApplied: "07/08/22", description: "do go code for hotel homes", applicationLink:"www.fakeapplink1.com", offer_id: o0.id, status: "pending", user_id: 1, company: "Airbnb")
# Job.create(dateApplied: "07/09/22", description: "do code for music", applicationLink:"www.fakeapplink2.com", offer_id: o0.id, status: "pending", user_id: 1, company: "Spotify")
# Job.create(dateApplied: "07/10/22", description: "do code for fast fashion", applicationLink:"www.fakeapplink3.com", offer_id: o0.id, status: "pending", user_id: 1, company: "Aritizia")
# Job.create(dateApplied: "07/11/22", description: "do code for athletic wear", applicationLink:"www.fakeapplink4.com", offer_id: o0.id, status: "pending", user_id: 1, company: "Lululemon")
