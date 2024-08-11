// src/pages/LandingPage.js
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LandingPage = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <div className="landing-page">
      <h1>Welcome to Our App</h1>
      {!isAuthenticated ? (
        <button onClick={() => loginWithRedirect()}>Login</button>
      ) : (
        <>
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Logout
          </button>
          <button onClick={() => window.location.href = '/profile'}>Go to Profile</button>
        </>
      )}
    </div>
  );
};

export default LandingPage;
