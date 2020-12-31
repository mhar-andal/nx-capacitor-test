import React from 'react';

import './explore-container.css';

export const ExploreContainer = () => {
  return (
    <div className="container">
      <h1>Welcome to mobile-app!</h1>
      <strong>Ready to create an app?</strong>
      <p>
        Start with Ionic{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ionicframework.com/docs/components"
        >
          UI Components
        </a>
      </p>
    </div>
  );
};

export default ExploreContainer;
