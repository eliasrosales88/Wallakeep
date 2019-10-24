import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';



function App() {
  return (
    <div>
      <ErrorBoundary>
        <Layout>
          <p>App works!</p>
      </Layout>
    </ErrorBoundary>
      </div>
  );
}

export default App;
