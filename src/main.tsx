import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Routes } from '@generouted/react-router';
import { HelmetProvider } from 'react-helmet-async';
import ErrorBoundary from './components/ErrorBoundary';
import MouseTracker from './components/MouseTracker';
import 'modern-normalize/modern-normalize.css';
import '@fontsource/syne';
import './main.css';

const root = createRoot(document.getElementById('root')!);

createRoot(document.getElementById('root')!).render(
  <>
    <StrictMode>
      <MouseTracker />
      <ErrorBoundary>
        <Routes />
      </ErrorBoundary>
    </StrictMode>
  </>
);
