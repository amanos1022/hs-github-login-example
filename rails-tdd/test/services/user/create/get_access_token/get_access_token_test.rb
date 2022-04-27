require "test_helper"

class GetAccessTokenTest < ActiveSupport::TestCase
  def test_bad_code_raises_error
    resBodyString = "{\"error\":\"bad_verification_code\",\"error_description\":\"The code passed is incorrect or expired.\",\"error_uri\":\"https://docs.github.com/apps/managing-oauth-apps/troubleshooting-oauth-app-access-token-request-errors/#bad-verification-code\"}"

    get_response = Minitest::Mock.new
    get_response.expect(:call, JSON.parse(resBodyString))

    assert_raises(Exception) do
      User::Create::GetAccessToken::GetAccessToken.new(get_response).call('bad code')
    end
  end

  def test_success_response
    resBodyString = "{\"access_token\":\"all is well\"}"

    get_response = Minitest::Mock.new
    get_response.expect(:call, JSON.parse(resBodyString), ['good code'])

    access_token = User::Create::GetAccessToken::GetAccessToken.new(get_response).call('good code')

    assert_equal('all is well', access_token)
  end
end
