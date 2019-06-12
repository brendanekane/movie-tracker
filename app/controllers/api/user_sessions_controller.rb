class Api::UserSessionsController < ApplicationController
  require 'byebug'
  def new

  end

  def create
    if login(params[:user][:email], params[:user][:password])
      @user = User.find_by(email: params[:user][:email])
      # redirect_to(movies_path, notice: 'Logged in Successfully')
      render "api/users/show"
    else
      flash.now[:errors] = "Login Failed"
      render plain: "LOGIN FAILED"
    end
end


  def destroy
    logout
    redirect_to(movies_path, notice: 'Logged Out')
  end
end
