module User
  module Create
    module GetAccessToken
      class GetAccessToken
        def initialize(get_response = GetResponse.new, error_handler = ResponseBodyErrorHandler.new)
          @get_response = get_response
          @error_handler = error_handler
        end

        def call(code)
          body = @get_response.call(code)

          @error_handler.check(body)

          body['access_token'] 
        end
      end
    end
  end
end