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
        {`Welcome home ${userData.name}. Here's your bio: ${userData.bio}`}
        <button onClick={() => setRedirect(true)}>Log out</button>
      </div>
    </div>
  );
};

export default Home;
