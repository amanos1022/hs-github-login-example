import getAccessToken from './getAccessToken';

describe('getAccessToken', () => {
  describe('code is invalid', () => {
    it('returns rejected promise', async () => {
      expect(async () => {
        await getAccessToken('bad code')
      }).rejects.toEqual('bad_verification_code');
    })
  });
});
