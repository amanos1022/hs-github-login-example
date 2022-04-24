
export type GithubResponseErrorData = {
  error: string, // bad_verification_code
  error_description?: string,
  error_uri?: string,
}

export type GithubAccessTokenResponseData = {
  access_token: string,
  // expires_in: number,
  // refresh_token: string,
  // refresh_token_expires_in: number,
}

export type GithubUserResponseData = {
  avatar_url: string,
  bio: string,
  login: string,
  email: string,
}

type GithubResponseData =
  | GithubAccessTokenResponseData
  | GithubUserResponseData;

export type GithubResponse = {
  status: number,
  statusText: string,
  data: GithubResponseData,
};

