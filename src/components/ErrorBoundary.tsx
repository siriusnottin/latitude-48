import { Component, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error) {
    console.error('Error caught by ErrorBoundary:', error);
  }

  componentDidUpdate(prevProps: Props) {
    // Reset error state when children change (e.g., route changes)
    if (prevProps.children !== this.props.children && this.state.hasError) {
      this.setState({ hasError: false, error: undefined });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div
            style={{
              padding: '2rem',
              textAlign: 'center',
              opacity: 1,
              visibility: 'visible',
              color: 'var(--text-color)',
              backgroundColor: 'var(--background-color)',
            }}
          >
            <h2>Something went wrong</h2>
            <p>
              {this.state.error?.message || 'An unexpected error occurred.'}
            </p>
            <div style={{ marginTop: '1rem' }}>
              <button
                onClick={() => window.location.reload()}
                style={{
                  padding: '0.5rem 1rem',
                  marginRight: '1rem',
                  cursor: 'pointer',
                  backgroundColor: 'var(--primary-color)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                }}
              >
                Refresh Page
              </button>
              <button
                onClick={() => window.history.back()}
                style={{
                  padding: '0.5rem 1rem',
                  cursor: 'pointer',
                  backgroundColor: 'transparent',
                  color: 'var(--text-color)',
                  border: '1px solid var(--text-color)',
                  borderRadius: '4px',
                }}
              >
                Go Back
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
