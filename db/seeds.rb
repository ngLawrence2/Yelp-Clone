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


b1 = Business.create(name:"Creator", address:"680 Folsom St Ste 120",lat:37.7845584,lng:-122.39856409999999,zipCode:94107,hours:["10:00am-9:00pm", "10:00am-9:00pm", "10:00am-9:00pm", "10:00am-9:00pm", "10:00am-12:00am", "10:00am-1:00am", "Closed" ],price:"$$$",phone:"(806)680-3657",city:"San Francisco")
b2 = Business.create(name:"China Live", address:"644 Broadway",lat:37.7980047,lng:-122.4079241,zipCode:94133,hours:["12:00pm-6:00pm", "12:00pm-8:00pm", "12:00pm-8:00pm", "12:00pm-8:00pm","12:00pm-10:00pm", "11:00am-10:00pm", "11:00am-6:00pm" ],price:"$",phone:"(806)633-3657",city:"San Francisco")

b3 = Business.create(name:"McDonald's", address:"6300 E 14th St",lat:37.7638791,lng:-122.19619969999997,zipCode:94621,hours:["12:00pm-6:00pm", "12:00pm-8:00pm", "12:00pm-8:00pm", "12:00pm-8:00pm","12:00pm-10:00pm", "11:00am-10:00pm", "11:00am-6:00pm" ],price:"$",phone:"(816)643-2619",city:"Oakland")

b4 = Business.create(name:"Super Duper Burgers", address:"721 Market St",lat:37.786860,lng:-122.403910,zipCode:94133,hours:["08:00am-11:00pm", "08:00am-11:00pm", "08:00am-11:00pm", "08:00am-11:00pm","08:00am-12:00am", "08:00am-12:00am", "08:00am-12:00am" ],price:"$$",phone:"(415)538-3437",city:"San Francisco")

b5= Business.create!(name: "In-N-Out Burger", address: "333 Jefferson St ", city: "San Francisco", zipCode: 94133,lat: 37.80775,lng: -122.41853,phone: "(800)786-1000", price: "$", creditCard: "Yes", parking: "Yes", takeOut: "Yes", delivery: "Yes", hours: ["10:30am-01:00am", "10:30am-01:00am", "10:30am-01:00am", "10:30am-01:00am", "10:30am-01:30am", "10:30am-01:30am", "10:30am-01:00am"])
b6= Business.create(name: "Next Level Burger", address: "450 Rhode Island St Whole Foods Market 365", city: "San Francisco", zipCode: 94107,lat: 37.7647110051466,lng: -122.402720040957,phone: "(415) 829-8485", price: "", creditCard: "Yes", parking: "Yes", takeOut: "Yes", delivery: "Yes", hours: ["11:00am-10:00pm", "11:00am-10:00pm", "11:00am-10:00pm", "11:00am-10:00pm", "11:00am-10:00pm", "11:00am-10:00pm", "11:00am-10:00pm"])
b7= Business.create(name: "McDonald's", address: "441 Sutter St ", city: "San Francisco", zipCode: 94108,lat: 37.789217,lng: -122.407641,phone: "(415) 362-1082", price: "$", creditCard: "Yes", parking: "Yes", takeOut: "Yes", delivery: "Yes", hours: ["06:00am-00:00am", "06:00am-00:00am", "06:00am-00:00am", "06:00am-00:00am", "06:00am-01:30am", "06:00am-01:30am", "06:00am-00:00am"])
b8= Business.create(name: "Jack In The Box", address: "4649 Geary Blvd ", city: "San Francisco", zipCode: 94118,lat: 37.78053,lng: -122.46928,phone: "(415) 752-4916", price: "$", creditCard: "Yes", parking: "Yes", takeOut: "Yes", delivery: "Yes", hours: ["09:00am-09:00am", "09:00am-09:00am", "09:00am-09:00am", "09:00am-09:00am", "09:00am-09:00am", "09:00am-09:00am", "09:00am-09:00am"])
b9= Business.create(name: "Super Duper Burgers", address: "2304 Market St ", city: "San Francisco", zipCode: 94114,lat: 37.7640087,lng: -122.433698,phone: "(415) 558-8123", price: "$", creditCard: "Yes", parking: "Yes", takeOut: "Yes", delivery: "Yes", hours: ["10:30am-11:00pm", "10:30am-11:00pm", "10:30am-11:00pm", "10:30am-11:00pm", "10:30am-11:00pm", "10:30am-11:00pm", "10:30am-11:00pm"])
b10= Business.create(name: "Popeyes Louisiana Kitchen", address: "599 Divisadero St ", city: "San Francisco", zipCode: 94117,lat: 37.774865,lng: -122.438013,phone: "(415) 346-3088", price: "$", creditCard: "Yes", parking: "Yes", takeOut: "Yes", delivery: "Yes", hours: ["10:00am-10:00pm", "10:00am-10:00pm", "10:00am-10:00pm", "10:00am-10:00pm", "10:00am-10:00pm", "11:00am-10:00pm", "11:00am-10:00pm"])
b11= Business.create(name: "Rooster & Rice", address: "125 Kearny St ", city: "San Francisco", zipCode: 94108,lat: 37.78923,lng: -122.40404,phone: "(415) 705-1500", price: "$$", creditCard: "Yes", parking: "Yes", takeOut: "Yes", delivery: "Yes", hours: ["11:00am-08:00pm", "11:00am-08:00pm", "11:00am-08:00pm", "11:00am-08:00pm", "11:00am-08:00pm", "11:00am-08:00pm"])
b12= Business.create(name: "Taco Bell", address: "710 3rd St ", city: "San Francisco", zipCode: 94107,lat: 37.778622,lng: -122.392791,phone: "(415) 979-1587", price: "$", creditCard: "Yes", parking: "Yes", takeOut: "Yes", delivery: "Yes", hours: ["07:00am-00:00am", "07:00am-00:00am", "07:00am-00:00am", "07:00am-00:00am", "07:00am-00:00am", "07:00am-00:00am", "07:00am-00:00am"])
b13= Business.create(name: "Smashburger", address: "2300 16th StSte 293 ", city: "San Francisco", zipCode: 94103,lat: 37.7662174804428,lng: -122.407808706329,phone: "(415) 890-2410", price: "$", creditCard: "Yes", parking: "Yes", takeOut: "Yes", delivery: "Yes", hours: ["10:00am-10:00pm", "10:00am-10:00pm", "10:00am-10:00pm", "10:00am-10:00pm", "10:00am-10:00pm", "10:00am-10:00pm", "10:00am-10:00pm"])
b14= Business.create(name: "Double Decker", address: "2956 24th St ", city: "San Francisco", zipCode: 94110,lat: 37.75279,lng: -122.41125,phone: "(415) 757-0523", price: "$", creditCard: "Yes", parking: "Yes", takeOut: "Yes", delivery: "Yes", hours: ["10:30am-09:00pm", "10:30am-09:00pm", "10:30am-09:00pm", "10:30am-09:00pm", "10:30am-09:00pm", "10:30am-09:00pm", "10:30am-09:00pm"])
b15= Business.create(name: "Jack In The Box", address: "366 Bayshore Blvd ", city: "San Francisco", zipCode: 94124,lat: 37.741606258187,lng: -122.40671351861,phone: "(415) 641-8467", price: "$", creditCard: "Yes", parking: "Yes", takeOut: "Yes", delivery: "Yes", hours: ["06:00am-06:00am", "06:00am-06:00am", "06:00am-06:00am", "06:00am-06:00am", "06:00am-06:00am", "06:00am-06:00am", "06:00am-06:00am"])
b16= Business.create(name: "Super Duper Burgers", address: "721 Market St ", city: "San Francisco", zipCode: 94103,lat: 37.7868540659939,lng: -122.403968274593,phone: "(415) 538-3437", price: "$$", creditCard: "Yes", parking: "Yes", takeOut: "Yes", delivery: "Yes", hours: ["08:00am-11:00pm", "08:00am-11:00pm", "08:00am-11:00pm", "08:00am-11:30pm", "08:00am-11:30pm", "10:30am-11:30pm", "10:30am-10:00pm"])
b17= Business.create(name: "Box Kitchen", address: "431 Natoma St ", city: "San Francisco", zipCode: 94103,lat: 37.7811510761365,lng: -122.40636505138,phone: "(415) 580-7170", price: "$$", creditCard: "Yes", parking: "Yes", takeOut: "Yes", delivery: "Yes", hours: ["11:00am-03:00pm", "04:30pm-01:00am", "11:00am-03:00pm", "04:30pm-01:00am", "11:00am-03:00pm", "04:30pm-01:00am", "11:00am-03:00pm", "04:30pm-01:00am", "11:00am-03:00pm", "04:30pm-01:00am", "04:30pm-01:00am", "04:30pm-01:00am"])
b18= Business.create(name: "El Chango Salteño", address: "Avenida Santa Fe 380 ", city: "Alberdi", zipCode: 5000,lat: -31.406772,lng: -64.199816,phone: "+54 351 425-2557", price: "", creditCard: "Yes", parking: "Yes", takeOut: "Yes", delivery: "Yes", hours: ["08:00pm-00:30am", "11:00am-03:30pm", "08:00pm-00:30am", "11:00am-03:30pm", "08:00pm-00:30am", "11:00am-03:30pm", "08:00pm-00:30am", "11:00am-03:30pm", "08:00pm-01:30am", "11:00am-03:30pm", "08:00pm-01:30am", "08:00pm-00:30am"])
b19= Business.create(name: "Jack In The Box", address: "400 Geary St ", city: "San Francisco", zipCode: 94102,lat: 37.7871912717819,lng: -122.410040125251,phone: "(415) 673-0868", price: "$", creditCard: "Yes", parking: "Yes", takeOut: "Yes", delivery: "Yes", hours: ["00:00am-00:00am", "00:00am-00:00am", "00:00am-00:00am", "00:00am-00:00am", "00:00am-00:00am", "00:00am-00:00am", "00:00am-00:00am"])
b20= Business.create(name: "McDonald's", address: "1100 Fillmore St ", city: "San Francisco", zipCode: 94102,lat: 37.7798712859482,lng: -122.431717225118,phone: "(415) 923-1138", price: "$", creditCard: "Yes", parking: "Yes", takeOut: "Yes", delivery: "Yes", hours: ["00:00am-00:00am", "00:00am-00:00am", "00:00am-00:00am", "00:00am-00:00am", "00:00am-00:00am", "00:00am-00:00am", "00:00am-00:00am"])
b21= Business.create(name: "Burger King", address: "3900 Geary Blvd ", city: "San Francisco", zipCode: 94118,lat: 37.78146,lng: -122.46126,phone: "(415) 386-8478", price: "$", creditCard: "Yes", parking: "Yes", takeOut: "Yes", delivery: "Yes", hours: ["05:00am-04:00am", "05:00am-04:00am", "05:00am-04:00am", "05:00am-04:00am", "05:00am-04:00am", "05:00am-04:00am", "05:00am-04:00am"])
b22= Business.create(name: "Panda Express", address: "1480 Fillmore St ", city: "San Francisco", zipCode: 94115,lat: 37.7830439060926,lng: -122.432602867484,phone: "(415) 292-9993", price: "$", creditCard: "Yes", parking: "Yes", takeOut: "Yes", delivery: "Yes", hours: ["10:30am-10:00pm", "10:30am-10:00pm", "10:30am-10:00pm", "10:30am-10:00pm", "10:30am-10:30pm", "10:30am-10:30pm", "10:30am-10:00pm"])





r1 = Review.create(body:'this place is the best',rating:5, user_id:u1.id, business_id: b1.id)

k4 = Keyword.create(name:'restaurant')
c4 = Category.create(keyword_id: k4.id, business_id: b1.id)
c5 = Category.create(keyword_id: k4.id, business_id: b2.id)
c10 =Category.create(keyword_id: k4.id, business_id: b3.id)
c6 = Category.create(keyword_id: k4.id, business_id: b4.id)
c11 = Category.create(keyword_id: k4.id, business_id: b5.id)


k1 = Keyword.create(name:'burger')
c1 = Category.create(keyword_id: k1.id, business_id:b1.id)
c7 = Category.create(keyword_id: k1.id, business_id:b4.id)
c8 = Category.create(keyword_id: k1.id, business_id:b3.id)


k2 = Keyword.create(name: 'Chinese')
c2 = Category.create(keyword_id: k2.id, business_id:b2.id)


k3 = Keyword.create(name: 'fast food')
c3 = Category.create(keyword_id: k3.id, business_id:b3.id)
c9 = Category.create(keyword_id: k3.id, business_id:b4.id)
