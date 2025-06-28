import { createBrowserRouter } from 'react-router-dom';

import App from '@/App';
import Layout from '@/components/Layout';
import { NotFound } from '@/pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />
      }
    ]
  },
  { path: '*', element: <NotFound /> }
]);
