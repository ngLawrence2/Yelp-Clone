class Api::UsersController < ApplicationController


  def create
    @user= User.new(user_params)
    if @user.save
      log_in(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 404
    end
  end

  def update
    @user = User.find(params[:id])
    debugger;
    @business.photo.attach(params[:user][:photos])
    render "api/users/show"
  end

  private
  def user_params
    params.require(:user).permit(:email,:password,:birthday,:fname,:lname,:zipCode)
  end
end
