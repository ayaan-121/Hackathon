import React from 'react';

const ProductTable = () => {
  const rows = [
    { id: 1, name: 'Product 1', packsize: 'Large', category: 'Category 1', mrp: '$10', image: 'image1.jpg', status: 'Active' },
    { id: 2, name: 'Product 2', packsize: 'Medium', category: 'Category 2', mrp: '$15', image: 'image2.jpg', status: 'Inactive' },
    { id: 3, name: 'Product 3', packsize: 'Small', category: 'Category 1', mrp: '$20', image: 'image3.jpg', status: 'Active' },
    { id: 4, name: 'Product 4', packsize: 'Large', category: 'Category 3', mrp: '$25', image: 'image4.jpg', status: 'Active' },
    { id: 5, name: 'Product 5', packsize: 'Medium', category: 'Category 2', mrp: '$30', image: 'image5.jpg', status: 'Inactive' },
  ];

  return (
    <div style={{ height: 600, width: '100%', overflow: 'auto', width:'100%', marginTop:'5rem' }}>
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Pack Size</th>
            <th>Category</th>
            <th>MRP</th>
            <th>Image</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.packsize}</td>
              <td>{row.category}</td>
              <td>{row.mrp}</td>
              <td>{row.image}</td>
              <td>{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
