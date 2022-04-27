import React, { useEffect, useState } from 'react';
import Login, { LoginParams } from './Login';
import Home from './Home';
import axios from 'axios';

const getUser = () => {
  const userString = localStorage.getItem('user');

  if(!userString) return null;

  return JSON.parse(userString);
}

const App: React.FC<LoginParams> = (loginParams) => {
  const [loginStatus, setLoginStatus] = useState(0); // 0: loading -1: false, 1: true
  const [user] = useState(getUser()); // 0: loading -1: false, 1: true
  const [userData, setUserData] = useState(null); // 0: loading -1: false, 1: true

  useEffect(() => {
    if(user && user.githubToken) {
      axios.get('https://api.github.com/user', {headers: {"Authorization": `token ${user.githubToken}`}})
        .then(({data}) => {
          setUserData(data)
          setLoginStatus(1)
        })
        .catch(() => {
          setLoginStatus(-1)
        })
    }

    if(!user || !user.githubToken) {
      setLoginStatus(-1)
    }
  }, [user])

  if (loginStatus === 0) return <div>Checking credentials</div>
  if (loginStatus === -1) return <Login {...loginParams} />

  return <Home userData={userData} />
}

export default App;