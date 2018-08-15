class Api::BusinessesController < ApplicationController


  def index
      @businesses = Business.all
    if (!params[:search].nil? && (params[:search][:find].length>0 || params[:search][:near].length>0))
        # @businesses = Business.includes(:keywords).where(keywords: {name: params[:search][:find]})
        if(params[:search][:find].length>0)
          @businesses = Business.joins(:keywords).includes(:keywords).where("keywords.name ILIKE ? OR businesses.name ILIKE ?", "%#{params[:search][:find]}%" ,"%#{params[:search][:find]}%")
        end
        if(params[:search][:near].length>0)
          
        end
        puts bounds

    else
      @businesses
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

    def bounds
      params[:bounds]
    end


end

# data: {
#   search: {
#     location: "San Francisco"
#   }
# }
