class Api::SessionsController < ApplicationController
  def create
    @user=User.find_by_credentials(params[:user][:email],params[:user][:password])
    if @user.nil?
      render json: ["invalid credentials"], status: 401
    else
      log_in(@user)
    end
  end

  def destroy
    if logged_in?
      log_out
    end
  end
end
