class UsersController < ApplicationController
  skip_forgery_protection

  def create
    create = User::Create::Create.new(
      User::Create::GetAccessToken::GetAccessToken.new(
        User::Create::GetAccessToken::GetResponse.new
      )
    ) 

    render json: create.call(params['code'])
  end
end
