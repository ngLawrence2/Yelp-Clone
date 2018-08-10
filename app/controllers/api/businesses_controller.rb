class Api::BusinessesController < ApplicationController
  before_action :require_login

  def index
    @businesses = Business.all
    render "api/businesses/index"
  end

  def show
    @business = Business.find(params[:id])
    render "api/businesses/show"
  end

end
