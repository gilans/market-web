import React, { Component } from 'react';
import { Observable } from 'rxjs';
import { connect } from 'react-redux';
class Account extends Component {
  handleClick = e => {
    const { user } = this.props;
    console.log('Click', user);
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
    user: state.auth.user, //.get('user').toJS(),
  }),
  {}
)(Account);
