import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { CardsProvider } from './context/CardsContext';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

createRoot(rootElement).render(
  <React.StrictMode>
    <CardsProvider>
      <RouterProvider router={router} />
    </CardsProvider>
  </React.StrictMode>
);