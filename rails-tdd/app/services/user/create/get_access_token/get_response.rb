
module User
  module Create
    module GetAccessToken
      class GetResponse
        def call(code)
          res = HTTP[:accept => "application/json"]
            .post('https://github.com/login/oauth/access_token', :json => { 
              :client_id => 'Iv1.8fb41a270ee0fd0d',
              :client_secret => '52df2e4abf3754eae30430e9995897589b88ea1a',
              :redirect_uri => 'https://7314-150-220-74-84.ngrok.io',
              :code => code,
            });

          JSON.parse res.body.to_s
        end
      end
    end
  end
end