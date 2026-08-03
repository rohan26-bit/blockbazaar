import React from 'react';

function Dashboard({ products }) {

  const totalProducts = products.length;

  const availableProducts = products.filter(
    p => !p.purchased
  ).length;

  const soldProducts = products.filter(
    p => p.purchased
  ).length;

  const totalValue = products.reduce(
    (sum, product) =>
      sum +
      Number(
        window.web3.utils.fromWei(
          product.price.toString(),
          'Ether'
        )
      ),
    0
  );

  const highestPrice =
    products.length > 0
      ? Math.max(
          ...products.map(product =>
            Number(
              window.web3.utils.fromWei(
                product.price.toString(),
                'Ether'
              )
            )
          )
        )
      : 0;

  const averagePrice =
    products.length > 0
      ? (totalValue / products.length).toFixed(2)
      : 0;

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
              {totalProducts}
            </h2>

            <p className="text-light mb-0">
              📦 Total Products
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
              {availableProducts}
            </h2>

            <p className="text-light mb-0">
              ✅ Available
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
              {soldProducts}
            </h2>

            <p className="text-light mb-0">
              🛒 Sold
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

            <h2 className="text-primary">
              {totalValue.toFixed(2)} ETH
            </h2>

            <p className="text-light mb-0">
              💰 Marketplace Value
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

            <h2 className="text-danger">
              {highestPrice.toFixed(2)} ETH
            </h2>

            <p className="text-light mb-0">
              🔥 Highest Price
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

            <h2 className="text-info">
              {averagePrice} ETH
            </h2>

            <p className="text-light mb-0">
              📈 Average Price
            </p>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Dashboard;