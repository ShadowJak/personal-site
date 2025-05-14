import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import '@mantine/core/styles/baseline.css';
// import '@mantine/core/styles/default-css-variables.css';
// import '@mantine/core/styles/global.css';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { MenuBar } from './components/Menu/MenuBar.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider>
      <MenuBar />
    </MantineProvider>
  </StrictMode>,
)
