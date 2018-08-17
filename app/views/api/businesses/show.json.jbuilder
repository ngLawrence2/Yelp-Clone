json.set! :business do
  json.set! @business.id do
    json.partial! "api/businesses/business", business: @business
      json.averageRating @business.getAverage
  end
end

json.set! :keywords do
  @business.keywords.each do |k|
    json.set! k.id do
      json.extract! k, :id,:name
    end
  end
end

json.set! :photos do
  @business.photo.each do |ph|
    json.set! ph.id do
      json.extract! ph, :id
      json.photoUrl url_for(ph)
    end
  end
end

json.set! :reviews do
  @business.reviews.each do |rev|
    json.set! rev.id do
      json.extract! rev, :id,:user_id,:rating,:body
    end
  end
end

json.set! :users do
  @business.reviews.each do |rev|
    json.set! rev.user.id do
      json.partial! "api/users/user", user: rev.user
    end
  end
end
