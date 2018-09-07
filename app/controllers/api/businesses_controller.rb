class Api::BusinessesController < ApplicationController


  def index
      @businesses = Business.all

      # find, bounds



      if ((!params[:search][:find].nil?) && (params[:search][:find].length>0))
          if(params[:search][:find].length>0)
            @businesses = Business.joins(:keywords).includes(:keywords).where("keywords.name ILIKE ? OR businesses.name ILIKE ?", "%#{params[:search][:find]}%" ,"%#{params[:search][:find]}%")
          end
          if(bounds)
            @businesses = Business.joins(:keywords)
            .includes(:keywords)
            .where("keywords.name ILIKE ? OR businesses.name ILIKE ?", "%#{params[:search][:find]}%" ,"%#{params[:search][:find]}%")
            .in_bounds(bounds)
          end

        elsif (bounds)
          @business = Business.in_bounds(bounds)
      end
      debugger
      @businesses
      #change active storage query
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
      params[:search]["bounds"]
    end


end

# data: {
#   search: {
#     location: "San Francisco"
#   }
# }
