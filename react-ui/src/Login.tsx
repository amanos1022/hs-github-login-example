import React, { ReactElement } from 'react';

export type LoginParams = {
  clientId: string,
  redirectUri: string,
}

const Login: React.FC<LoginParams> = ({
  clientId,
  redirectUri,
}): ReactElement => {
  const scope = 'user';

  return (
    <a
      href={`https://github.com/login/oauth/authorize?client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}`}
    >
      Sign in with Github
    </a>
  )
};

export default Login;
