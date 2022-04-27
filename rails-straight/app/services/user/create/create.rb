module User
  module Create
    class Create
      def initialize(
        get_access_token = GetAccessToken::GetAccessToken.new,
        get_user_data = GetUserData::GetUserData.new
      )
        @get_access_token = get_access_token
        @get_user_data = get_user_data
      end

      def call(code)
        access_token = @get_access_token.call(code)

        user_data = FormatGithubResponse.call(
          @get_user_data.call(access_token),
          access_token
        )

        store_user(user_data)
      end

      private 
      def store_user(user_data)
        user = MyUser.new

        user.email = user_data[:email]
        user.githubUsername = user_data[:github_username]
        user.githubToken = user_data[:github_token]

        user.save

        user
      end
    end
  end
end