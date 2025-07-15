import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // Update state so the next render shows fallback UI
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // Log error info
  componentDidCatch(error, errorInfo) {
    console.error('🔴 UI Error caught:', error, errorInfo);

    // Optionally send to Firebase, Sentry, etc.
    // logErrorToService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center h-screen text-center p-4">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Something went wrong.
          </h1>
          <p className="text-purple-600">Please try refreshing the page.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
