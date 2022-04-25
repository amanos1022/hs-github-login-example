module User
  module Create
    module GetAccessToken
      class GetAccessToken
        def initialize(get_response = GetResponse.new)
          @get_response = get_response
        end

        def call(code)
          res = @get_response.call(code)

          if res.has_key? :error
            raise "Could not get access token"
          end

          res['access_token'] 
        end
      end
    end
  end
end