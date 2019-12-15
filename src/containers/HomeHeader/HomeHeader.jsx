import React, { Component } from 'react';

import './HomeHeader.scss';

import HomeHeaderBelt from '../HomeHeaderBelt/HomeHeaderBelt';
import HomeHeaderNav from '../HomeHeaderNav/HomeHeaderNav';
class HomeHeader extends Component {
  render() {
    return (
      <div className="header">
        <HomeHeaderBelt></HomeHeaderBelt>
        <HomeHeaderNav></HomeHeaderNav>
      </div>
    );
  }
}

export default HomeHeader;
