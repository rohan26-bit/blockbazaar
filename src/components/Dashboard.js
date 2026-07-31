import React from 'react';

function Dashboard({ products }) {
  return (
    <div className="row text-center mb-5">

      <div className="col-md-4 mb-3">
        <div
          className="card dashboard-card"
          style={{
            background:"#1e293b",
            border:"1px solid #334155",
            borderRadius:"15px"
          }}
        >
          <div className="card-body">
            <h2 className="text-info">
              {products.length}
            </h2>
            <p className="text-light mb-0">
              Total Products
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-3">
        <div
          className="card dashboard-card"
          style={{
            background:"#1e293b",
            border:"1px solid #334155",
            borderRadius:"15px"
          }}
        >
          <div className="card-body">
            <h2 className="text-success">
              {products.filter(p => !p.purchased).length}
            </h2>
            <p className="text-light mb-0">
              Available
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-3">
        <div
          className="card dashboard-card"
          style={{
            background:"#1e293b",
            border:"1px solid #334155",
            borderRadius:"15px"
          }}
        >
          <div className="card-body">
            <h2 className="text-warning">
              {products.filter(p => p.purchased).length}
            </h2>
            <p className="text-light mb-0">
              Sold
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Dashboard;