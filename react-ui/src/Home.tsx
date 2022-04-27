import React, { ReactElement, useState } from 'react';

const Home: React.FC<{userData: any}> = ({userData}): ReactElement => {
  const [redirect, setRedirect] = useState(false);

  if (redirect) {
    localStorage.removeItem('user')
    window.location.reload();
  }

  return (
    <div>
      <img src={userData.avatar_url} width={200}/>
      <div>
        <div>
          <h1>{`Welcome home ${userData.name}.`}</h1>
          <h2>{`Here's your bio: "${userData.bio}"`}</h2>

        </div>
        <button onClick={() => setRedirect(true)}>Log out</button>
      </div>
    </div>
  );
};

export default Home;
