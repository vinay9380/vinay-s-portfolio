import React from 'react';

class SSRErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    if (typeof window === 'undefined') {
      console.error('Server-side render error:', error);
      console.error('Error details:', errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <h1>Something went wrong.</h1>
          <p>The application encountered an error. Please try refreshing the page.</p>
          {process.env.NODE_ENV === 'development' && (
            <pre style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.error?.toString()}
            </pre>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}
