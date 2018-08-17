@businesses.each do |business|
  json.set! business.id do
    json.partial! '/api/businesses/business', business:business
    json.businessPhoto url_for(business.photo.first)
    json.averageRating business.getAverage
    testArr = []
    business.keywords.each do |k|
      testArr << k.name
    end
    json.keywords testArr

    if(business.reviews.first)
      json.reviewPreview business.reviews.first.body
    else
      json.reviewPreview nil
    end
  end
end
