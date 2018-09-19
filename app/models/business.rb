class Business < ApplicationRecord
  validates :name,:lat,:lng,:zipCode,:hours,:price,:phone,:city,:address, presence:true

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

 #37.7638791 < 37.87537359551267
 #37.7638791 > 37.71259354249268
 #-122.1961996 > -122.50581242617187
 #-122.1961996 < -122.29981877382812 #false here in Oakland case
end
