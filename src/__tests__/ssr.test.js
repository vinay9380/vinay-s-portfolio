import React from 'react';
import { render } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom/server';
import { ServerStyleSheet } from 'styled-components';
import App from '../src/App';

describe('Server Side Rendering', () => {
  it('renders without crashing', () => {
    const sheet = new ServerStyleSheet();
    const context = {};
    
    const tree = (
      <StaticRouter location="/" context={context}>
        <App />
      </StaticRouter>
    );

    try {
      const { container } = render(sheet.collectStyles(tree));
      expect(container).toBeTruthy();
      expect(context).toEqual({});
    } finally {
      sheet.seal();
    }
  });

  it('generates styled-components styles', () => {
    const sheet = new ServerStyleSheet();
    const context = {};
    
    const tree = (
      <StaticRouter location="/" context={context}>
        <App />
      </StaticRouter>
    );

    try {
      render(sheet.collectStyles(tree));
      const styles = sheet.getStyleTags();
      expect(styles).toContain('styled');
    } finally {
      sheet.seal();
    }
  });

  it('handles different routes', async () => {
    const routes = ['/', '/about', '/projects', '/contact'];
    const sheet = new ServerStyleSheet();

    for (const route of routes) {
      const context = {};
      const tree = (
        <StaticRouter location={route} context={context}>
          <App />
        </StaticRouter>
      );

      try {
        const { container } = render(sheet.collectStyles(tree));
        expect(container).toBeTruthy();
        expect(context.statusCode).not.toBe(404);
      } finally {
        sheet.seal();
      }
    }
  });
});
