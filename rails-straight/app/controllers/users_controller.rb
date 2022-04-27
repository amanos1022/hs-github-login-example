class UsersController < ApplicationController
  skip_forgery_protection

  def create
    begin
      res = HTTP[:accept => "application/json"]
        .post('https://github.com/login/oauth/access_token', :json => { 
          :client_id => 'Iv1.8fb41a270ee0fd0d',
          :client_secret => '52df2e4abf3754eae30430e9995897589b88ea1a',
          :redirect_uri => 'https://db31-65-201-88-74.ngrok.io/',
          :code => params['code'],
        });

      body = JSON.parse res.body.to_s

      if body.has_key? 'error'
        raise "Error getting access token"
      end

      res = HTTP[:Authorization => "token #{body['access_token']}"]
            .get('https://api.github.com/user')

      raise "Unauthorized" unless res.code == 200 
      
      user_data = JSON.parse res.body.to_s

      user = MyUser.new

      user.email = user_data['email']
      user.githubUsername = user_data['login']
      user.githubToken = body['access_token']

      user.save

      render json: user
    rescue StandardError => e
      render json: {:message => e.to_s}, status: 500 
    end
  end
end
