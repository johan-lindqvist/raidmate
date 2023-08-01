import { createBrowserRouter } from 'react-router-dom';

import { routes } from 'app-constants';
import { LoginPage } from 'pages/Login';
import { NotFoundPage } from 'pages/404';
import { DashboardPage } from 'pages/Dashboard';
import { SummariesPage } from 'pages/Summaries';
import { LootSheetsPage } from 'pages/LootSheets';
import { SettingsPage } from 'pages/Settings';
import { GuildsPage } from 'pages/Guilds';
import { LoginBlizzardPage } from 'pages/LoginBlizzard';
import { LogoutPage } from 'pages/Logout';

import { Root } from './Root';

export const router = createBrowserRouter([
  {
    path: routes.root,
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [
      { path: routes.login, element: <LoginPage /> },
      { path: routes.logout, element: <LogoutPage /> },
      { path: routes.blizzardRedirect, element: <LoginBlizzardPage /> },
      { path: routes.dashboard, element: <DashboardPage /> },
      { path: routes.summaries, element: <SummariesPage /> },
      { path: routes.lootsheets, element: <LootSheetsPage /> },
      { path: routes.settings, element: <SettingsPage /> },
      { path: routes.guilds, element: <GuildsPage /> },
    ],
  },
]);
