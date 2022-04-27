import axios from 'axios';
import React, { ReactElement, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';


const CreateAccount: React.FC = (): ReactElement => {
  const [loginData, setLoginData] = useState<any>(null);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    axios.post(
      '/api/users',
      { 
        code: searchParams.get('code'),
        // client_id: '193900',
        // client_secret: 'b3319ccda018b2be2fade986d476afd6c7be4973',
        // redirect_uri: 'https://db31-65-201-88-74.ngrok.io/',
      },
    ).then(({ data }) => { 
      localStorage.setItem('user', JSON.stringify(data))
      setLoginData(data) 
    });
  }, [])

  if (loginData === null) return <div>Logging you in...</div>

  return (
    <>
      <h1>Hi <strong>{loginData.githubUsername}</strong>!</h1> 
      <h2>Last step is to verify your account. An email has been sent to <strong>{loginData.email}</strong>. You know the drill :)</h2>
      <Link to={'/'}>Go to your home</Link>
    </>

  );
};

export default CreateAccount;
