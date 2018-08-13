class Api::BusinessesController < ApplicationController


  def index
    @businesses = Business.all
    render "api/businesses/index"
  end

  def update
    @business = Business.find(params[:id])

    @business.photo.attach(params[:business][:photos])
    render "api/businesses/show"
  end

  def show
    @business = Business.find(params[:id])
    render "api/businesses/show"
  end

  private
    def business_params
      params.require(:business).permit(photo:[])
    end
end
