import React, { Component } from 'react';

import LinkToPage from '../../components/LinkToPage/LinkToPage';

class HomeHeaderBeltLeft extends Component {
  render() {
    return (
      <div className="belt-left">
        <LinkToPage className="belt-left belt-left__logo-title" pagePath="account">
          Market
        </LinkToPage>
      </div>
    );
  }
}

export default HomeHeaderBeltLeft;
