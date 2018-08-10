class Review < ApplicationRecord
  validates :body, :rating, presence:true

  belongs_to :user
  belongs_to :business

end
