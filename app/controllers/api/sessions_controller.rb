class Api::SessionsController < ApplicationController
  def create
    @user=User.find_by_credentials(params[:user][:email],params[:user][:password])
    if @user.nil?
      render json: ["invalid credentials"], status: 401
    else
      log_in(@user)
      render "api/users/show"
    end
  end

  def destroy
    if logged_in?
      log_out
      render json: {}
    end
  end
end
