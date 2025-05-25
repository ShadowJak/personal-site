import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { MantineProvider } from '@mantine/core';

import '@mantine/core/styles.css';
import { cyanLime, electricIndigo, pumpkin } from './utils/consts.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider
      defaultColorScheme='light' // Light is used to make sure all elements are manually styled
      theme={{
        colors: {
          pumpkin,
          electricIndigo,
          cyanLime,
        },
        primaryColor: 'pumpkin',
      }}>
      <App />
    </MantineProvider>
  </StrictMode>,
)
