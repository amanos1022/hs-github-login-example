import { User } from '@prisma/client';
import createDbRecord from './createDbRecord/createDbRecord';
import formatGitHubResponseData from './createDbRecord/formatGitHubResponseData';
import getAccessToken from './getAccessToken';
import getUserData from './getUserData';

export default async (code: string): Promise<User> => {
  try {
    const accessToken = await getAccessToken(code);

    const userData = await getUserData(accessToken);

    return await createDbRecord(formatGitHubResponseData(userData, accessToken));
  } catch (e) {
    Promise.reject(e.message);
  }
}
