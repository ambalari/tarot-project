import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root';

const Home = lazy(() => import('./pages/Home'));
const CardDetail = lazy(() => import('./pages/CardDetail'));
const Reading = lazy(() => import('./pages/Reading'));

const router = createBrowserRouter([
{
    path: '/',
    element: <Root />,
    children: [
    { index: true, element: <Home /> },
    { path: 'card/:id', element: <CardDetail /> },
    { path: 'reading', element: <Reading /> }
    ]
}
]);

export default router;
