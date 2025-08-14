import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { CardsProvider } from './context/CardsContext';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CardsProvider>
      <RouterProvider router={router} />
    </CardsProvider>
  </React.StrictMode>
);
