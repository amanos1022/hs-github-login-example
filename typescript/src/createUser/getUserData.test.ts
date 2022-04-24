import getUserData from './getUserData';

describe('getUserData', () => {
  describe('access_token invalid', () => {
    it('returns rejected promise', async () => {
      expect(async () => {
        await getUserData('bad access token')
      }).rejects.toEqual('Unauthorized')
    })
  });
});