# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Business.delete_all
Category.delete_all
Keyword.delete_all

u1 = User.create(fname:'Demo',lname:'User',zipCode:99999,email:'DemoUser@demo.com', password:'demouser')


b1 = Business.create(name:"Creator", address:"680 Folsom St Ste 120",lat:37.784558,lng:-122.398564,zipCode:94107,hours:"10:00am-9:00pm",price:"$$",phone:"(806)680-3657",city:"San Francisco",rating:3.5)
b2 = Business.create(name:"secondbusiness", address:"600 Brodayway St Ste 120",lat:37.784558,lng:-123.398564,zipCode:94107,hours:"10:00am-9:00pm",price:"$$",phone:"(806)633-3657",city:"San Francisco",rating:2)

r1 = Review.create(body:'this place is the best',rating:5, user_id:u1.id, business_id: b1.id)

k1 = Keyword.create(name:'burger')
c1 = Category.create(keyword_id: k1.id, business_id:b1.id)
