module User
  module Create
    module GetUserData
      class GetResponse
        def initialize(error_handler = RequestErrorHandler.new)
          @error_handler = error_handler
        end

        def call(access_token)
          HTTP[:Authorization => "token #{access_token}"]
            .get('https://api.github.com/user')
        end
      end
    end
  end
end