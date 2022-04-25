module User
  module Create
    class GetUserData
      def self.call(access_token)
        p access_token
        res = HTTP[:Authorization => "token #{access_token}"]
          .get('https://api.github.com/user')

        parsedBody = JSON.parse res.body.to_s

        if res.code != 200 
          raise "Could not get user data"
        end

        if parsedBody.has_key? :error
          raise "Could not get user data"
        end

        parsedBody 
      end
    end
  end
end