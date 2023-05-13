import { createBrowserRouter } from 'react-router-dom';

import { LoginPage } from 'pages/Login';
import { DashboardPage } from 'pages/Dashboard';
import { GuildsPage } from 'pages/Guilds';
import { NotFoundPage } from 'pages/404';
import { LoginBlizzardPage } from 'pages/LoginBlizzard';

import { Root } from './Root';

export const router = createBrowserRouter([
  { path: '/', element: <LoginPage />, errorElement: <NotFoundPage /> },
  { path: '/blizzard-login', element: <LoginBlizzardPage /> },
  {
    element: <Root />,
    children: [
      { path: '/dashboard', element: <DashboardPage /> },
      { path: '/guilds', element: <GuildsPage /> },
    ],
  },
]);
