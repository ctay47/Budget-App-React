import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Budgets from './Components/Budgets';
import BudgetNew from './Components/BudgetNew';
import BudgetDetail from './Components/BudgetDetail';
import BudgetEdit from './Components/BudgetEdit';

function App() {
  return (
 
    
      <div className="App">
        <Router>
          <NavBar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/budgets" element={<Budgets />} />
              <Route path="/budgets/new" element={<BudgetNew />} />
              <Route path="/budgets/:index" element={<BudgetDetail />} />
              <Route path="/budgets/:index/edit" element={<BudgetEdit />} />
            </Routes>
          </main>
        </Router>
      </div>
   
  );
}

export default App;
