import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
  render() {
    const { isAuthorized } = this.props;
    return !isAuthorized ? <Redirect to="/login" /> : null;
  }
  // Реализуйте приватный роут.
  // Он должен проверять статус авторизации
  // и перенаправлять пользователя на страницу логина,
  // если тот не авторизован.
}

export default withAuth(PrivateRoute);
