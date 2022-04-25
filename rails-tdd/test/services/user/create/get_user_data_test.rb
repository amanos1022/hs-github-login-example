require "test_helper"

class GetUserDataTest < ActiveSupport::TestCase
  def test_bad_code_raises_error
    assert_raises(Exception) do
      res = User::Create::GetUserDataTest.call('bad access token')
    end
  end
end
