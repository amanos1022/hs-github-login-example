module User
  module Create
    class FormatGithubResponse
      def self.call(github_response, access_token)
        {
          :email => github_response['email'],
          :github_username => github_response['login'],
          :github_token => access_token
        }
      end
    end
  end
end