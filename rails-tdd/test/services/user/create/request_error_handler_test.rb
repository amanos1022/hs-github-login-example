require "test_helper"

class RequestErroHandlerTest < ActiveSupport::TestCase
  def test_request_raises_error_if_response_code_is_anything_but_200
    res = Minitest::Mock.new
    res.expect(:code, 403)

    assert_raises(User::Create::UnauthorizedError) do
      User::Create::RequestErrorHandler.new.check(res)
    end
  end

  def test_returns_nil_if_code_is_200
    res = Minitest::Mock.new
    res.expect(:code, 200)

    assert_equal(nil, User::Create::RequestErrorHandler.new.check(res))
  end 
end
