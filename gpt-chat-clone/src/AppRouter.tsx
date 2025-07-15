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
import Layout from './Layout';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<TestAuth />} />
          <Route element={<PrivateRoute />}>
            <Route path="/chat" element={<Chat />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
