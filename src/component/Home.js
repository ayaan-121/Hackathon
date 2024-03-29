import React, { useState } from 'react';
import './Home.css';
import digi from './digi.jpeg';
import logoutIcon from './logout.png';
import categoryIcon from './category.png';
import productIcon from './product.png';
import homeIcon from './home.png';

const Home = () => {
  const [showTable, setShowTable] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [newRow, setNewRow] = useState({ id: '', name: '', description: '', status: '' });
  const [rows, setRows] = useState([
    { id: 1, name: 'Product 1', description: 'Description of Product 1', status: 'Active' },
    { id: 2, name: 'Product 2', description: 'Description of Product 2', status: 'Inactive' },
    { id: 3, name: 'Product 3', description: 'Description of Product 3', status: 'Active' },
    { id: 4, name: 'Product 4', description: 'Description of Product 4', status: 'Active' },
    { id: 5, name: 'Product 5', description: 'Description of Product 5', status: 'Inactive' },
  ]);

  const handleCategoryClick = () => {
    setShowTable(true);
  };

  const handleHomeClick = () => {
    setShowTable(false);
  };

  const handleProductClick = () => {
    setShowTable(true);
  };

  const handleAddNewClick = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRow({ ...newRow, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  
    const newRowWithId = { ...newRow, id: rows.length + 1 };
    setRows([...rows, newRowWithId]);
    setShowPopup(false);
  };

  const handleLogout = () => {
    window.location.reload();
  };

  return (
    <>
    
        <header className="header">
          <img src={digi} alt="Digital Flake" className="logo" />
          <img src={logoutIcon} alt="Logout" className="logout-icon" onClick={handleLogout} />
        </header>

        <aside className="sidebar">
          <div className="sidebar-item" onClick={handleHomeClick}>
            <img src={homeIcon} alt="Home" className="sidebar-icon" />
            <span>Home</span>
          </div>
          <div className="sidebar-item" onClick={handleCategoryClick}>
            <img src={categoryIcon} alt="Category" className="sidebar-icon" />
            <span>Categories</span>
          </div>
          <div className="sidebar-item" onClick={handleProductClick}>
            <img src={productIcon} alt="Product" className="sidebar-icon" />
            <span>Products</span>
          </div>
        </aside>

        {!showTable && (
          <div className="home-content">
            <img src={digi} alt="Digital Flake" className='mainlogo'/>
            <h2 style={{marginLeft:'6rem'}}>Welcome to DigitalFlake Admin</h2>
          </div>
        )}

        {showTable && (
          <div style={{ height: 600, width: '100%', overflow: 'auto', width:'100%', marginTop:'5rem' }}>
            <table style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th >ID</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {rows.map(row => (
                  <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.name}</td>
                    <td>{row.description}</td>
                    <td>{row.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={handleAddNewClick} className="add-new-btn" style={{width:'10rem', marginLeft:'15rem',marginTop:'3rem'}}>Add New</button>
          </div>
        )}

        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <span className="close" onClick={handlePopupClose}>&times;</span>
              <h2>Add New Product</h2>
              <form onSubmit={handleFormSubmit}>
                <label>ID:</label>
                <input type="text" name="id" value={newRow.id} onChange={handleInputChange} />
                <label>Name:</label>
                <input type="text" name="name" value={newRow.name} onChange={handleInputChange} />
                <label>Description:</label>
                <input type="text" name="description" value={newRow.description} onChange={handleInputChange} />
                <label>Status:</label>
                <input type="text" name="status" value={newRow.status} onChange={handleInputChange} />
                <button type="submit" style={{marginLeft:'15rem', marginTop:'3rem'}}>Add</button>
              </form>
            </div>
          </div>
        )}
    </>
  );
};

export default Home;
