import React from "react";
import "./style.css";

const AdminDetails = () => {
  return (
    <div className="admin-details">
      <div className="admin-details-header">
        <h2>Admin Details</h2>
      </div>
      <div className="admin-details-body">
        <div className="admin-details-row">
          <span className="admin-details-label">Name:</span>
          <span className="admin-details-value">Admin</span>
        </div>
        <div className="admin-details-row">
          <span className="admin-details-label">Email:</span>
          <span className="admin-details-value">Adminstrator@example.com</span>
        </div>
        <div className="admin-details-row">
          <span className="admin-details-label">Phone:</span>
          <span className="admin-details-value">999-555-5555</span>
        </div>
        <div className="admin-details-row">
          <span className="admin-details-label">Role:</span>
          <span className="admin-details-value">Administrator</span>
        </div>
      </div>
    </div>
  );
};

export default AdminDetails;
