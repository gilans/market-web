import React, { Component } from 'react';
import { connect } from 'react-redux';

import { login } from '../../store/modules/auth/auth.state';

import '../../styles/main-styles.scss';

class Account extends Component {
  handleClick = e => {
    const { login, user } = this.props;
    console.log('user', user);
    login('suarezgilberto@gmail.com', 'xyz');
  };
  render() {
    return (
      <div>
        <div>Bienvenido a cuenta</div>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}

export default connect(
  state => ({
    user: state.auth.get('user').toJS(),
  }),
  { login }
)(Account);
