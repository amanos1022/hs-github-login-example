require "test_helper"

class GetUserDataTest < ActiveSupport::TestCase
  def test_bad_code_raises_error
    # Feature/Functional test: no mocks, actuall makes bad call to GitHub
    assert_raises(User::Create::UnauthorizedError) { User::Create::GetUserData::GetUserData.new.call('bad access token') }
  end

  # Integration Test: We're just making sure GetAccessToken integrates GetResponse and RequestErrorHandler properly
  def test_bad_code_raises_error_with_mocks
    response = Minitest::Mock.new
    response.expect(:code, 403)

    get_response = Minitest::Mock.new
    get_response.expect(:call, response)

    assert_raises(User::Create::UnauthorizedError) { User::Create::GetUserData::GetUserData.new(get_response).call('bad access token') }
 end
end
