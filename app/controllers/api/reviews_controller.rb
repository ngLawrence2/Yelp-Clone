class Api::ReviewsController < ApplicationController

  def create
    @review=Review.new(review_params)
    @review.user_id = current_user.id
    if @review.save
    else
      render json: @review.errors.full_messages, status: 404
    end
  end

  def update
    @review = Review.find(params[:id])
    if @review.update(review_params)
    else
      render json: @review.errors.full_messages, status: 404
    end
  end

  private

  def review_params
    params.require(:review).permit(:body,:rating,:business_id)
  end

end
