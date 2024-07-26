import React from 'react';
import Navigation from '../components/Navigation';
import Mouse from '../components/Mouse';

const Home = () => {
  return (
    <div className='home'>
      <Navigation/>
      <Mouse/>
    </div>
  );
};

export default Home;