class Category < ApplicationRecord

  belongs_to :keyword
  belongs_to :business
end
