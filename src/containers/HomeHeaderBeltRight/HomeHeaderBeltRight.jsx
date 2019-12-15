import React, { Component } from 'react';
import CartDisplay from '../../components/CartDisplay/CartDisplay';
import AccountDisplay from '../../components/AccountDisplay/AccountDisplay';

class HomeHeaderBeltRight extends Component {
  render() {
    return (
      <div className="belt-right">
        <AccountDisplay></AccountDisplay>
        <CartDisplay></CartDisplay>
      </div>
    );
  }
}

export default HomeHeaderBeltRight;
