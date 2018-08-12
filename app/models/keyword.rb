class Keyword < ApplicationRecord
  validates :name, presence:true

  has_many :category

  has_many :business,
  through: :category

end
