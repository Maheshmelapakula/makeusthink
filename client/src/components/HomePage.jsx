import React from 'react';
import NavigationBar from './NavigationBar';

const HomePage = () => {
  return (
    <div>
      <NavigationBar />
      <div style={{ padding: '20px' }}>
        <h1>Welcome to MakeUSThink</h1>
        <p>
          This is the homepage of our EdTech application. You can add more content here to showcase
          your app's features, courses, testimonials, etc.
        </p>
        {/* Add more components and content for your homepage */}
      </div>
    </div>
  );
};

export default HomePage;
