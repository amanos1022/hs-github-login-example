
module User
  module Create
    module GetAccessToken
      class GetResponse
        def initialize(error_hander = User::Create::GetUserData::RequestErrorHandler.new)
          @error_handler = error_hander
        end

        def call(code)
          res = HTTP[:accept => "application/json"]
            .post('https://github.com/login/oauth/access_token', :json => { 
              :client_id => 'Iv1.8fb41a270ee0fd0d',
              :client_secret => '52df2e4abf3754eae30430e9995897589b88ea1a',
              :redirect_uri => 'https://db31-65-201-88-74.ngrok.io/',
              :code => code,
            });

          @error_handler.check(res)

          JSON.parse res.body.to_s
        end
      end
    end
  end
end
