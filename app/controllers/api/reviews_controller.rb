class Api::ReviewsController < ApplicationController

  def create
    @review=Review.new(review_params)
    if @review.save
      #render some jbuilder view
    else
      render json: @review.errors.full_messages, status: 404
    end
  end

  def update
    @review = Review.find(params[:id])
    if @review.update(review_params)
      # render some jbuilder view
    else
      render json: @review.errors.full_messages, status: 404
    end
  end

  private

  def review_params
    params.require(:review).permit(:body,:rating)
  end

end
