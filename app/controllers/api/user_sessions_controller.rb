class Api::UserSessionsController < ApplicationController
  require 'byebug'
  def new

  end

  def create
    if login(params[:email], params[:password])
      redirect_to(movies_path, notice: 'Logged in Successfully')
    else
      flash.now[:errors] = "Login Failed"
      render action: :new
    end
end


  def destroy
    logout
    redirect_to(movies_path, notice: 'Logged Out')
  end
end
