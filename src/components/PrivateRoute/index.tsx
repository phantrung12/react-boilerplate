import React from 'react';
import { Navigate } from 'react-router';
import { paths } from '~/routes/paths';
import { isAuthenticated } from '~/utils/helper/auth';

interface IOwnProps {
  hasAnyAuthorities?: any[];
  children: React.ReactNode;
}

const PrivateRoute = ({ children }: IOwnProps) => {
  if (!isAuthenticated()) {
    localStorage.clear();
    return (
      <Navigate
        to={{
          pathname: paths.login,
          search: location.search,
        }}
      />
    );
  }
  if (isAuthenticated()) {
    return <div>{children}</div>;
  }
  return (
    <Navigate
      to={{
        pathname: paths.login,
        search: location.search,
      }}
    />
  );
};

export default PrivateRoute;
