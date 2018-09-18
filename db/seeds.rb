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
Review.delete_all

u1 = User.create(fname:'Demo',lname:'User',zipCode:99999,email:'DemoUser@demo.com', password:'demouser')


b1 = Business.create(name:"Creator", address:"680 Folsom St Ste 120",lat:37.7845584,lng:-122.39856409999999,zipCode:94107,hours:["10:00am-9:00pm", "10:00am-9:00pm", "10:00am-9:00pm", "10:00am-9:00pm", "10:00am-12:00am", "10:00am-1:00am", "Closed" ],price:"$$$",phone:"(806)680-3657",city:"San Francisco",rating:3.5)
b2 = Business.create(name:"China Live", address:"644 Broadway",lat:37.7980047,lng:-122.4079241,zipCode:94133,hours:["12:00pm-6:00pm", "12:00pm-8:00pm", "12:00pm-8:00pm", "12:00pm-8:00pm","12:00pm-10:00pm", "11:00am-10:00pm", "11:00am-6:00pm" ],price:"$",phone:"(806)633-3657",city:"San Francisco",rating:2)

b3 = Business.create(name:"McDonald's", address:"6300 E 14th St",lat:37.7638791,lng:-122.19619969999997,zipCode:94621,hours:["12:00pm-6:00pm", "12:00pm-8:00pm", "12:00pm-8:00pm", "12:00pm-8:00pm","12:00pm-10:00pm", "11:00am-10:00pm", "11:00am-6:00pm" ],price:"$",phone:"(816)643-2619",city:"Oakland",rating:2)

b4 = Business.create(name:"Super Duper Burgers", address:"721 Market St",lat:37.786860,lng:-122.403910,zipCode:94133,hours:["08:00am-11:00pm", "08:00am-11:00pm", "08:00am-11:00pm", "08:00am-11:00pm","08:00am-12:00am", "08:00am-12:00am", "08:00am-12:00am" ],price:"$$",phone:"(415)538-3437",city:"San Francisco",rating:4)

r1 = Review.create(body:'this place is the best',rating:5, user_id:u1.id, business_id: b1.id)

k4 = Keyword.create(name:'restaurant')
c4 = Category.create(keyword_id: k4.id, business_id: b1.id)
c5 = Category.create(keyword_id: k4.id, business_id: b2.id)
c10 =Category.create(keyword_id: k4.id, business_id: b3.id)
c6 = Category.create(keyword_id: k4.id, business_id: b4.id)


k1 = Keyword.create(name:'burger')
c1 = Category.create(keyword_id: k1.id, business_id:b1.id)
c7 = Category.create(keyword_id: k1.id, business_id:b4.id)
c8 = Category.create(keyword_id: k1.id, business_id:b3.id)


k2 = Keyword.create(name: 'Chinese')
c2 = Category.create(keyword_id: k2.id, business_id:b2.id)


k3 = Keyword.create(name: 'fast food')
c3 = Category.create(keyword_id: k3.id, business_id:b3.id)
c9 = Category.create(keyword_id: k3.id, business_id:b4.id)
