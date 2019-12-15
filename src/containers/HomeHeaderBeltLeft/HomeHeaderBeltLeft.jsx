import React, { Component } from 'react';
import TextLogoLink from '../../components/TextLogoLink/TextLogoLink';
import Router from 'next/router';
import './HomeHeaderBeltLeft.scss';
class HomeHeaderBeltLeft extends Component {
  handleClick = () => {
    console.log('here');
    Router.push('/account');
  };
  render() {
    return (
      <div className="belt-left">
        <TextLogoLink titleLogo="Market" link={this.handleClick}></TextLogoLink>
      </div>
    );
  }
}

export default HomeHeaderBeltLeft;
