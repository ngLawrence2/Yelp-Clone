json.set! :business do
  json.set! @business.id do
    json.partial! "api/businesses/business", business: @business
  end
end

json.set! :reviews do
  @business.reviews.each do |rev|
    json.extract! rev, :id,:user_id,:rating,:body
  end
end

json.set! :users do
  @business.reviews.each do |rev|
    json.set! rev.user.id do
      json.partial! "api/users/user", user: rev.user
    end
  end
end
