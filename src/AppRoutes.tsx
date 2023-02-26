import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Navigate,
} from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout';
import UserProfilePage from './pages/UserProfilePage';
import UsersListPage from './pages/UsersListPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="users" replace />} />
        <Route path="users" element={<UsersListPage />} />
        <Route path="users/:id" element={<UserProfilePage />} />
      </Route>
      <Route path="*" element={<div>Page not found</div>} />
    </>,
  ),
);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
