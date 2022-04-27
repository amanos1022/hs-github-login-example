module User
  module Create
    module GetAccessToken
      class ResponseBodyErrorHandler
        def check(body)
          if body.has_key? 'error'
            raise ResponseBodyError
          end
        end
      end
    end
  end
end
