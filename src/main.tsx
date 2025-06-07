import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes } from '@generouted/react-router';
import 'modern-normalize/modern-normalize.css';
import '@fontsource/syne';
import './styles/index.css';
import ErrorBoundary from './components/ErrorBoundary';
import MouseTracker from './components/MouseTracker';

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
