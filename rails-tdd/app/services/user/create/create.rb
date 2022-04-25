module User
  module Create
    class Create
      def initialize(get_access_token)
        @get_access_token = get_access_token
      end

      def call(code)
        access_token = @get_access_token.call(code)

        user_data = FormatGithubResponse.call(
          GetUserData.call(access_token),
          access_token
        )
        
        user = MyUser.new

        user.githubUsername = user_data[:github_username]
        user.githubToken = user_data[:github_token]

        user.save

        user
      end
    end
  end
end