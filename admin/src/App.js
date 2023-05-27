//app.css
import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import SideBar from './components/Sidebar';
import DashboardHeader from './components/DashboardHeader';
import sidebar_menu from './constants/sidebar-menu';

import './App.css';
import Orders from './pages/Orders';
import Farmers from './pages/Farmers';
import Products  from './pages/Products/products';
import Dashboard from './pages/Dashboard/index';
import AdminDetails from './pages/Admin/index';

function App () {
  return(
    <Router>
      <div className='dashboard-container'>
        <SideBar menu={sidebar_menu} />
          <div className='dashboard-body'>
              <Routes>
                  <Route path="*" element={<div></div>} />
                  <Route exact path="/" element={< Dashboard/>} />
                  <Route exact path="/orders" element={< Orders/>} />
                  <Route exact path="/Farmers" element={< Farmers/>} />
                  <Route exact path="/products" element={< Products/>} />
                  <Route exact path="/locations" element={<div></div>} />
                  <Route exact path="/profile" element={< AdminDetails/>} />
              </Routes>
          </div>
      </div>
    </Router>
  )
}

export default App;