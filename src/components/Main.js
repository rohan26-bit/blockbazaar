import React, { Component } from 'react';
import Hero from './Hero';
import Dashboard from './Dashboard';

class Main extends Component {

  render() {
    return (
      <div id="content" className="container mt-5 text-light">

        <Hero />

        <Dashboard products={this.props.products} />

        <div
          className="card mb-5"
          style={{
            background: "#1e293b",
            border: "1px solid #334155",
            borderRadius: "15px"
          }}
        >

          <div className="card-body">

            <h3 className="text-light font-weight-bold mb-4">
              📦 List a New Product
            </h3>

            <p className="text-muted mb-4">
              Enter product details below and publish them on the blockchain.
            </p>

            <form
              onSubmit={(event) => {
                event.preventDefault()

                const name = this.productName.value

                const price = window.web3.utils.toWei(
                  this.productPrice.value.toString(),
                  'Ether'
                )

                this.props.createProduct(name, price)
              }}
            >

              <div className="form-group mr-sm-2">

                <input
                  id="productName"
                  type="text"
                  ref={(input) => {
                    this.productName = input
                  }}
                  className="form-control"
                  placeholder="Product Name"
                  required
                />

              </div>

              <div className="form-group mr-sm-2">

                <input
                  id="productPrice"
                  type="text"
                  ref={(input) => {
                    this.productPrice = input
                  }}
                  className="form-control"
                  placeholder="Price (ETH)"
                  required
                />

              </div>

              <button
                type="submit"
                className="btn btn-primary"
              >
                Add Product
              </button>

            </form>

          </div>

        </div>

        <h2 className="mb-4 text-light">
          Available Products
        </h2>

        <div className="row">

          {this.props.products.map((product, key) => (

            <div
              className="col-md-4 mb-4"
              key={key}
            >

              <div
                className="card h-100 product-card"
                style={{
                  background: "#1e293b",
                  border: "1px solid #334155",
                  borderRadius: "15px"
                }}
              >

                <div className="card-body">

                  <h3 className="text-light font-weight-bold mb-3">
                    📦 {product.name}
                  </h3>

                  <hr
                    style={{
                      borderColor: "#334155"
                    }}
                  />

                  <p className="text-info mb-2">
                    💰 {window.web3.utils.fromWei(
                      product.price.toString(),
                      'Ether'
                    )} ETH
                  </p>

                  <p
                    style={{
                      color: "#94a3b8",
                      fontSize: "13px",
                      wordBreak: "break-all"
                    }}
                  >
                    👤 {product.owner}
                  </p>

                  {
                    !product.purchased
                                      ? (
                    <>
                      <span className="badge badge-success mb-3">
                        ✅ Available
                      </span>

                      <button
                        className="btn btn-primary btn-block mt-3"
                        name={product.id}
                        value={product.price}
                        onClick={(event) => {
                          this.props.purchaseProduct(
                            event.target.name,
                            event.target.value
                          )
                        }}
                      >
                        🛒 Buy Now
                      </button>
                    </>
                  ) : (
                    <>
                      <span className="badge badge-secondary mb-3">
                        ✔ Sold
                      </span>

                      <button
                        className="btn btn-success btn-block mt-3"
                        disabled
                      >
                        Purchased
                      </button>
                    </>
                  )}

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    );
  }
}

export default Main;