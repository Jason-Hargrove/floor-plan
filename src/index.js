import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FloorPlan from './FloorPlan';


export default function Index() {
  return (
    <div>
      <FloorPlan />
    </div>
  )
};

// ========================================

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
