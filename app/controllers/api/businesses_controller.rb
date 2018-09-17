class Api::BusinessesController < ApplicationController


  def index
      @businesses = Business.all




      #case for moving map with no near in params
      if(!bounds.nil? && params[:search][:find].length==0 )
        @businesses=Business.in_bounds(bounds)
        render 'api/businesses/index'
        return
      end

      if(!bounds.nil? && params[:search][:find].length!=0 )
      @businesses = Business.joins(:keywords).includes(:keywords).where("keywords.name ILIKE ? OR businesses.name ILIKE ?", "%#{params[:search][:find]}%" ,"%#{params[:search][:find]}%").in_bounds(bounds)
        render 'api/businesses/index'
        return
      end

      #case for splash pages

      #case 1 : params without find and no bounds
      if(params[:search][:find].length ==0 && bounds.nil? )
        searchNear = params[:search][:near].split.map{ |word| word.capitalize}.join(' ')
        @businesses = Business.where("city = ?", searchNear)
        render 'api/businesses/index'
        return
      end


      #case 2: params with find with no bounds
      if (params[:search][:find].length != 0 && bounds.nil?)
        @businesses = Business.joins(:keywords).includes(:keywords).where("keywords.name ILIKE ? OR businesses.name ILIKE ?", "%#{params[:search][:find]}%" ,"%#{params[:search][:find]}%")
        render 'api/businesses/index'
        return
      end

      if (params[:search][:find].length!=0 && !bounds.nil?)
        @businesses = Business.joins(:keywords).includes(:keywords).where("keywords.name ILIKE ? OR businesses.name ILIKE ?", "%#{params[:search][:find]}%" ,"%#{params[:search][:find]}%").in_bounds(bounds)
        render 'api/businesses/index'
        return
      end



      #case 2 : params without find with bounds

      if(!bounds.nil? && params[:search][:find].length == 0  )
        searchNear = params[:search][:near].split.map{ |word| word.capitalize}.join(' ')
        @businesses = Business.where("city = ?", searchNear).in_bounds(bounds)
        render 'api/businesses/index'
        return
      end










      # if ((!params[:search][:find].nil?) && (params[:search][:find].length>0))
      #
      #     if(params[:search][:find].length>0)
      #       @businesses = Business.joins(:keywords).includes(:keywords).where("keywords.name ILIKE ? OR businesses.name ILIKE ?", "%#{params[:search][:find]}%" ,"%#{params[:search][:find]}%")
      #     end
      #     if(bounds)
      #
      #       @businesses = Business.joins(:keywords)
      #       .includes(:keywords)
      #       .where("keywords.name ILIKE ? OR businesses.name ILIKE ?", "%#{params[:search][:find]}%" ,"%#{params[:search][:find]}%")
      #       .in_bounds(bounds)
      #     end
      #   elsif (bounds)
      #     @business = Business.in_bounds(bounds)
      # end
      debugger;

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
