import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../../app/store';
import { setUser, logout } from '../../app/authSlice';

const TestAuth: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, isAuth, loading } = useSelector(
    (state: RootState) => state.auth
  );

  const loginHandler = () => {
    dispatch(setUser({ id: '1', name: 'Iryna', email: 'iryna@example.com' }));
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h2>Тест авторизації</h2>
      {loading && <p>Завантаження...</p>}
      <p>Авторизований: {isAuth ? 'Так' : 'Ні'}</p>
      {user && (
        <div>
          <p>Користувач: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
      <button onClick={loginHandler}>Увійти</button>
      <button onClick={logoutHandler}>Вийти</button>
    </div>
  );
};

export default TestAuth;
