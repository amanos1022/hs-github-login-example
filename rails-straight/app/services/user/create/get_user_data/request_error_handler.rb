module User
  module Create
    module GetUserData
      class RequestErrorHandler
        def check(res)
          raise UnauthorizedError unless res.code == 200 
        end
      end
    end
  end
end
