import axios from 'axios';
import { GithubUserResponseData } from './GithubResponseTypes';

export default async (accessToken: string): Promise<GithubUserResponseData> => {
  const headers = { headers: { Authorization: `token ${accessToken}` } };

  try {
    const { data } = await axios.get('https://api.github.com/user', headers);
    return Promise.resolve(data);
  } catch (e) {
    return Promise.reject('Unauthorized');
  }
}
