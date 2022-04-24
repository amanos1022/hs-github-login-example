import { GithubUserResponseData } from "../GithubResponseTypes";

export default (userData: GithubUserResponseData, githubToken: string): any => {
  const {
    login,
    email,
  } = userData;

  const createdAt = new Date;

  return {
    githubToken,
    githubUsername: login,
    email,
    updatedAt: createdAt,
    createdAt,
  };
}
