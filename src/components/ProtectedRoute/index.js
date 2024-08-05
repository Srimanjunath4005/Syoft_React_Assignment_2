import { Navigate } from 'react-router-dom';
import React from 'react';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const user = JSON.parse(localStorage.getItem('user'));

  return user ? (
    React.createElement(Component, rest)
  ) : (
    <Navigate to="/signup" />
  );
};

export default ProtectedRoute;