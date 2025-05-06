import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Dashboard = React.lazy(() => 
  import('./pages/Dashboard').then((module) => ({ default: module.Dashboard }))
);

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

console.log('App is rendering');

export default App;