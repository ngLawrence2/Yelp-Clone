class Business < ApplicationRecord
  validates :name,:lat,:lng,:zipCode,:hours,:price,:phone,:city,:address, :rating, presence:true

  has_many_attached :photo

  has_many :reviews

  has_many :category

  has_many :keywords,
  through: :category

  def getAverage
    reviews.average(:rating)
  end

  def self.in_bounds(bounds)
   self.where("lat < ?", bounds[:northEast][:lat])
     .where("lat > ?", bounds[:southWest][:lat])
     .where("lng > ?", bounds[:southWest][:lng])
     .where("lng < ?", bounds[:northEast][:lng])
 end


end
