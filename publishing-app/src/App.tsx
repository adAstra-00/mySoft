import React, { Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';

const Dashboard = React.lazy(() => 
  import('./pages/Dashboard').then((module) => ({ default: module.Dashboard }))
);

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={
            <Layout>
              <Dashboard />
            </Layout>
          }/>
        </Routes>
      </Suspense>
    </Router>
  );
};

console.log('App is rendering');

export default App;