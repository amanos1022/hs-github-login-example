require "test_helper"

class FormatGithubResponseTest < ActiveSupport::TestCase
  def test_response_is_properly_formatted
    github_response = JSON.parse '{"data": {"login": "username", "email": "mail@here.com"}}'

    assert_equal(
      User::Create::FormatGithubResponse.call(github_response, 'some access token'),
      { 
        :email => 'mail@here.com',
        :github_username => 'username',
        :github_token => 'some access token'
      }
    )
  end
end