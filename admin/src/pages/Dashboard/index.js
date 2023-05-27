import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const products = [
    { name: 'Product A', revenue: 5000, cost: 4000 },
    { name: 'Product B', revenue: 7000, cost: 5500 },
    { name: 'Product C', revenue: 4000, cost: 3200 },
    { name: 'Product D', revenue: 9000, cost: 7500 },
    { name: 'Product E', revenue: 12000, cost: 11000 },
  ];

  const totalRevenue = products.reduce((acc, curr) => acc + curr.revenue, 0);
  const totalCost = products.reduce((acc, curr) => acc + curr.cost, 0);
  const totalProfit = totalRevenue - totalCost;
  const profitMargin = ((totalRevenue - totalCost) / totalRevenue) * 100;

  return (
    <div className="dashboard-table">
      <h1>Product Profit/Loss Statistics</h1>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Revenue</th>
            <th>Cost</th>
            <th>Profit/Loss</th>
            <th>Profit Margin</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product}>
              <td>{product.name}</td>
              <td>{product.revenue}</td>
              <td>{product.cost}</td>
              <td>{product.revenue - product.cost}</td>
              <td>{((product.revenue - product.cost) / product.revenue * 100).toFixed(1)}%</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>{totalRevenue}</td>
            <td>{totalCost}</td>
            <td>{totalProfit}</td>
            <td>{profitMargin.toFixed(2)}%</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Dashboard;
