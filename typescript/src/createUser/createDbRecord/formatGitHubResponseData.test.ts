import formatGitHubResponseData from "./formatGitHubResponseData";

jest
  .useFakeTimers()
  .setSystemTime(new Date('2020-01-01'));

describe('formatGitHubResponseData', () => {
  it('formats data properly', () => {
    const userData = {
      avatar_url: 'src.com',
      bio: 'my bio',
      login: 'username',
      email: 'mail@here.com',
    };

    const createdAt = new Date('2020-01-01');

    expect(formatGitHubResponseData(userData, 'some access token')).toEqual({
      email: 'mail@here.com',
      githubUsername: 'username',
      githubToken: 'some access token',
      createdAt,
      updatedAt: createdAt,
    });
  });
});
