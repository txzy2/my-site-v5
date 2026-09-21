import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {RouterProvider} from 'react-router-dom';

import FloatingButtons from '@/components/FloatingButtons';
import {LanguageProvider} from '@/shared/i18n';
import {router} from '@/shared/router';
import {ThemeProvider} from '@/shared/theme';
import './assets/styles/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <RouterProvider router={router} />
        <FloatingButtons />
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>,
);
