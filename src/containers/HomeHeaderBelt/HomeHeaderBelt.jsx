import React, { Component } from 'react';

import HomeHeaderBeltLeft from '../HomeHeaderBeltLeft/HomeHeaderBeltLeft';
import HomeHeaderBeltRight from '../HomeHeaderBeltRight/HomeHeaderBeltRight';
import HomeHeaderBeltCenter from '../HomeHeaderBeltCenter/HomeHeaderBeltCenter';
class HomeHeaderBelt extends Component {
  render() {
    return (
      <div className="nav-belt">
        <HomeHeaderBeltLeft></HomeHeaderBeltLeft>
        <HomeHeaderBeltCenter></HomeHeaderBeltCenter>
        <HomeHeaderBeltRight></HomeHeaderBeltRight>
      </div>
    );
  }
}

export default HomeHeaderBelt;
