require "test_helper"

class GetAccessTokenTest < ActiveSupport::TestCase
  def test_bad_code_raises_error
    # resBodyString = "{\"error\":\"bad_verification_code\",\"error_description\":\"The code passed is incorrect or expired.\",\"error_uri\":\"https://docs.github.com/apps/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors/#bad-verification-code\"}"

    # mock = Minitest::Mock.new
    # mock.expect(:call, JSON.parse(resBodyString))

    assert_raises(Exception) do
      res = User::Create::GetAccessToken.new(mock).call('bad code')
    end
  end
end
