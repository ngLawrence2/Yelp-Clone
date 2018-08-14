class Api::BusinessesController < ApplicationController


  def index
    if (params[:search][:find].length>0 || params[:search][:near].length>0)
      @businesses = Business.includes(:keywords).where(keywords: {name: params[:search][:find]})
    else
      @businesses = Business.all
    end
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

# data: {
#   search: {
#     location: "San Francisco"
#   }
# }
