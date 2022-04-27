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
    <>
      <h1>Welcome to our site!</h1>
      <h2>Login to continue</h2>
      <a
        href={`https://github.com/login/oauth/authorize?client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}`}
      >
        Sign in with Github
      </a>
    </>
    
  )
};

export default Login;
