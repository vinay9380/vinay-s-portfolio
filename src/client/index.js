import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { loadableReady } from '@loadable/component';
import App from '../App';
import SSRErrorBoundary from '../Components/SSRErrorBoundary/index.js';
import { performanceMonitor } from '../utils/SSRPerformanceMonitor';

// Get the initial state that was embedded during SSR
const initialState = window.__INITIAL_STATE__;

const hydrate = async () => {
  try {
    // Wait for any loadable components to be ready
    await loadableReady();
    
    const root = document.getElementById('root');
    
    hydrateRoot(
      root,
      <BrowserRouter>
        <SSRErrorBoundary>
          <App initialState={initialState} />
        </SSRErrorBoundary>
      </BrowserRouter>
    );

    performanceMonitor.markHydrationComplete();
  } catch (error) {
    handleHydrationError(error);
  }
};

// Handle any hydration errors
const handleHydrationError = (error) => {
  console.error('Hydration failed:', error);
  // If hydration fails, fall back to client-side rendering
  const root = document.getElementById('root');
  root.innerHTML = '';
  hydrate();
};

try {
  // Start performance monitoring
  performanceMonitor.markFirstContentfulPaint();
  
  // Perform hydration
  hydrate();
  
  // Log performance metrics in development
  if (process.env.NODE_ENV === 'development') {
    performanceMonitor.logMetrics();
  }
} catch (error) {
  handleHydrationError(error);
}
