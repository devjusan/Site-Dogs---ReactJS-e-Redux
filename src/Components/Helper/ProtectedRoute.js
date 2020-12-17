import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route } from 'react-router-dom';

const ProtectedRoute = (props) => {
  const { data } = useSelector((state) => state.user);

  if (data) return <Route {...props} />;
  else if (data === false) return <Navigate to="/login" />;
  else return null;
};

export default ProtectedRoute;
