import React from 'react';

import HomeHeader from '../src/containers/HomeHeader/HomeHeader';

import Nav from '../components/nav';
import './styles/Home.scss';
const Home = () => {
  return (
    <div className="home">
      <HomeHeader></HomeHeader>
    </div>
  );
};

export default Home;