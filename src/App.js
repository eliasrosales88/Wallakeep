import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
        <ErrorBoundary>
          <Layout>
            
          </Layout>
        </ErrorBoundary>
      </BrowserRouter>
      </div>
  );
}

export default App;
