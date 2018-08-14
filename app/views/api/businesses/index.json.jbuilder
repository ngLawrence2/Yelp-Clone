@businesses.each do |business|
  json.set! business.id do
    json.partial! '/api/businesses/business', business:business
    json.businessPhoto url_for(business.photo.first)
    if(business.reviews.first)
      json.reviewPreview business.reviews.first.body
    else
      json.reviewPreview nil
    end
  end
end
