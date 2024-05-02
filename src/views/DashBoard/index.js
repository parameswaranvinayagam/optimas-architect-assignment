// LoginPage.js
import React, { useState } from 'react';

import Footer from '../Footer';
import Header from '../Header';
import TableContainter from './TableContainter';
import './DashBoard.css'; // Import CSS file for styling

function DashBoard({ onLogin }) {
   

  return (
    <div className='dashboard-container' >
      <Header />
      <div className="table-content">
        {/* Your main content goes here */}
        <p className='heading'>Admin</p>
        <TableContainter />

      </div>
      <Footer />
    </div>
  );
}

export default DashBoard;
