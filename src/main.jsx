import { createRoot } from 'react-dom/client';
/* eslint-disable-next-line no-unused-vars */
import { StrictMode } from 'react';
import './index.css';

/* eslint-disable-next-line no-unused-vars */
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
