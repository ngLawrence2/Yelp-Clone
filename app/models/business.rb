class Business < ApplicationRecord
  validates :name,:lat,:lng,:zipCode,:hours,:price,:phone,:city,:address, :rating, presence:true

  has_many :reviews
  
end
