module User
  module Create
    module GetUserData
      class GetUserData
        def initialize(get_response = GetResponse.new, error_handler = RequestErrorHandler.new)
          @get_response = get_response
          @error_handler = error_handler
        end

        def call(access_token)
          res = @get_response.call(access_token)

          @error_handler.check(res)

          JSON.parse res.body.to_s
        end
      end
    end
  end
end