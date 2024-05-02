// LoginPage.js
import React, { useState } from 'react';
import './TableContainter.css';

const TableContainter = () => {


  const [expandedRows, setExpandedRows] = useState([]);

  const toggleRow = (index) => {
    const currentIndex = expandedRows.indexOf(index);
    const newExpandedRows = [...expandedRows];
    if (currentIndex === -1) {
      newExpandedRows.push(index);
    } else {
      newExpandedRows.splice(currentIndex, 1);
    }
    setExpandedRows(newExpandedRows);
  };
  
  const data = [
    {
      userId:"Emp 1",
      name: 'John Doe',
     
      email: 'john@example.com',
      phone:"00-88-5545454",
      proj:"4",
      dest:"Senior Manager",
      action:"View",
      additionalInfo: 'Name : Jone Doe'
    },
    // Add more data objects as needed
  ];

  return (
    <table className="table">
    <thead>
      <tr>
        <th></th>
        <th>User ID</th>
        <th>User Name</th>
        <th>Email ID</th>
        <th>Phone</th>
        <th>No Projects</th>
        <th>Destination</th>
        <th>Action</th>




      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <tr onClick={() => toggleRow(index)}>
            <td>v</td>
            <td>{item.userId}</td>
            <td>{item.name}</td>
          
            
            <td>{item.email}</td>
            <td>{item.phone}</td>

            <td>{item.proj}</td>
            <td>{item.dest}</td>

            <td>{item.action}</td>

          </tr>
          {expandedRows.includes(index) && (
            <tr className="expanded-row">
              <td colSpan="8">
                <div className="expand-content">
                  <p>{item.additionalInfo}</p>
                </div>
              </td>
            </tr>
          )}
        </React.Fragment>
      ))}
    </tbody>
  </table>
  );
}

export default TableContainter;
