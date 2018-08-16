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
b2 = Business.create(name:"China Live", address:"644 Broadway",lat:37.7980047,lng:-122.4079241,zipCode:94133,hours:["12:00pm-6:00pm", "12:00pm-8:00pm", "12:00pm-8:00pm", "12:00pm-8:00pm",
  "12:00pm-10:00pm", "11:00am-10:00pm", "11:00am-6:00pm" ],price:"$",phone:"(806)633-3657",city:"San Francisco",rating:2)



r1 = Review.create(body:'this place is the best',rating:5, user_id:u1.id, business_id: b1.id)

b3 = Business.create(name:"McDonald's", address:"6300 E 14th St",lat:37.7638791,lng:-122.19619969999997,zipCode:94621,hours:["12:00pm-6:00pm", "12:00pm-8:00pm", "12:00pm-8:00pm", "12:00pm-8:00pm",
  "12:00pm-10:00pm", "11:00am-10:00pm", "11:00am-6:00pm" ],price:"$",phone:"(816)643-2619",city:"Oakland",rating:2)

k1 = Keyword.create(name:'burger')
c1 = Category.create(keyword_id: k1.id, business_id:b1.id)

k2 = Keyword.create(name: 'Chinese')
c2 = Category.create(keyword_id: k2.id, business_id:b2.id)


k3 = Keyword.create(name: 'fast food')
c3 = Category.create(keyword_id: k3.id, business_id:b3.id)
