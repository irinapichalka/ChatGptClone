import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Імпортуйте або створіть компоненти сторінок
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Chat from './pages/Chat';
import NotFound from './pages/NotFound';
import PrivateRoute from './PrivateRoute';
import TestAuth from './app/components/TestAuth';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/test" element={<TestAuth />} />
        <Route element={<PrivateRoute />}>
          <Route path="/chat" element={<Chat />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
