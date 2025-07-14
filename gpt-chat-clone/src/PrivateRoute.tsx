import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { onAuthStateChanged, getAuth } from 'firebase/auth';

const PrivateRoute: React.FC = () => {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuth(!!user);
    });
    return unsubscribe;
  }, [auth]);

  if (isAuth === null) {
    return <div>Loading...</div>;
  }

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }
  // If the user is authenticated, render the child components
  return <Outlet />;
};

export default PrivateRoute;
