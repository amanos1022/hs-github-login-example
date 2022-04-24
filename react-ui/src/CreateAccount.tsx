import axios from 'axios';
import React, { ReactElement, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export type CreateAccountParams = {
  client_id: string,
  client_secret: string,
  redirect_uri: string,
}

const CreateAccount: React.FC<CreateAccountParams> = (props): ReactElement => {
  const [loginData, setLoginData] = useState<any>(null);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    axios.post(
      'https://7314-150-220-74-84.ngrok.io/user',
      { code: searchParams.get('code') },
    ).then(({ data }) => { setLoginData(data) });
  }, [])

  if (loginData === null) return <div>Logging you in...</div>

  return (
    <div>hi {loginData.githubUsername}! Last step is to verify your account. An email has been sent to {loginData.email}. You know the drill :)</div>
  );
};

export default CreateAccount;
