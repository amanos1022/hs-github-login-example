class UsersController < ApplicationController
  skip_forgery_protection

  def create
    render json: User::Create::Create.new.call(params['code'])
  end
end
