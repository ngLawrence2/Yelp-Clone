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

  # def self.sameCategory(category)
  #   debugger;
  #   self.where(:keyword => category)
  # end

end
