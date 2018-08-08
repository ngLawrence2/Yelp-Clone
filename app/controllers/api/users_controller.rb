class Api::UsersController < ApplicationController

  def create
    @user= User.new(user_params)
    if @user.save
      log_in(@user)
    else
      render json: @user.errors.full_messages, status: 404
    end
  end

  private
  def user_params
    params.require(:user).permit(:email,:password,:birthday,:fname,:lname,:zipCode)
  end
end
