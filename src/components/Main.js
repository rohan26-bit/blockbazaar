import React, { Component } from 'react';
import Hero from './Hero';
import Dashboard from './Dashboard';
import Insights from './Insights';

import phone from '../assets/phone.jpg';
import laptop from '../assets/laptop.jpg';
import headphones from '../assets/headphones.jpg';
import keyboard from '../assets/keyboard.jpg';
import mouse from '../assets/mouse.jpg';
import watch from '../assets/watch.jpg';
import camera from '../assets/camera.jpg';
import speaker from '../assets/speaker.jpg';
import tablet from '../assets/tablet.jpg';
import book from '../assets/book.jpg';
import defaultImage from '../assets/default.jpg';

class Main extends Component {
  constructor(props) {
  super(props);

  this.state = {
  search: "",
  category: "all",
  sort: "newest"
};
}

  getProductImage(name) {

  const product = name.toLowerCase().trim();

  // Headphones FIRST (before phone)
  if (
    product.includes("headphone") ||
    product.includes("headphones") ||
    product.includes("earphone") ||
    product.includes("earphones") ||
    product.includes("earbud") ||
    product.includes("earbuds")
  )
    return headphones;

  // Tablet BEFORE Samsung phone
  if (
    product.includes("tablet") ||
    product.includes("ipad")
  )
    return tablet;

  if (
    product.includes("laptop") ||
    product.includes("macbook") ||
    product.includes("notebook")
  )
    return laptop;

  if (product.includes("keyboard"))
    return keyboard;

  if (product.includes("mouse"))
    return mouse;

  if (product.includes("watch"))
    return watch;

  if (product.includes("camera"))
    return camera;

  if (
    product.includes("speaker") ||
    product.includes("jbl") ||
    product.includes("sound")
  )
    return speaker;

  // Phone LAST
  if (
    product.includes("iphone") ||
    product.includes("mobile") ||
    product.includes("smartphone") ||
    product.includes("phone") ||
    product.includes("samsung")
  )
    return phone;

  return defaultImage;
}

  render() {

    return (

      <div id="content" className="container mt-5 text-light">

        <Hero />

        <Dashboard products={this.props.products} />

        <Insights products={this.props.products} />

        <div
          className="card mb-5 shadow-lg"
          style={{
            background: "#1e293b",
            border: "1px solid #334155",
            borderRadius: "18px"
          }}
        >

          <div className="card-body p-4">

            <h2 className="font-weight-bold mb-3">
              📦 List a New Product
            </h2>

            <p className="text-muted mb-4">
              Publish your product securely on the blockchain marketplace.
            </p>

            <form
              onSubmit={(event) => {

                event.preventDefault();

                const name = this.productName.value;

                const price = window.web3.utils.toWei(
                  this.productPrice.value.toString(),
                  'Ether'
                );

                this.props.createProduct(name, price);

              }}
            >

              <div className="form-group">

                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Product Name"
                  required
                  ref={(input) => {
                    this.productName = input;
                  }}
                />

              </div>

              <div className="form-group">

                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Price (ETH)"
                  required
                  ref={(input) => {
                    this.productPrice = input;
                  }}
                />

              </div>

              <button
                className="btn btn-primary btn-lg px-5"
                type="submit"
              >
                🚀 Add Product
              </button>

            </form>

          </div>

        </div>

        <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">

  <h2 className="font-weight-bold mb-3">
    🛍 Marketplace
  </h2>

  <div className="d-flex align-items-center mb-3">

    <input
      type="text"
      className="form-control mr-3"
      placeholder="🔍 Search Products..."
      style={{ width: "260px" }}
      value={this.state.search}
      onChange={(e) =>
        this.setState({
          search: e.target.value
        })
      }
    />
    <select
  className="form-control mr-3"
  style={{ width: "190px" }}
  value={this.state.sort}
  onChange={(e) =>
    this.setState({
      sort: e.target.value
    })
  }
>

  <option value="newest">
    Newest
  </option>

  <option value="low">
    Price: Low → High
  </option>

  <option value="high">
    Price: High → Low
  </option>

  <option value="available">
    Available Only
  </option>

</select>

    <span
      className="badge badge-info p-2"
      style={{ fontSize: "15px" }}
    >
      {this.props.products.length} Products
    </span>

  </div>

</div>
<div className="mb-4">

  <button
    className={`btn mr-2 mb-2 ${
      this.state.category === "all"
        ? "btn-primary"
        : "btn-outline-light"
    }`}
    onClick={() =>
      this.setState({ category: "all" })
    }
  >
    All
  </button>

  <button
    className={`btn mr-2 mb-2 ${
      this.state.category === "phone"
        ? "btn-primary"
        : "btn-outline-light"
    }`}
    onClick={() =>
      this.setState({ category: "phone" })
    }
  >
    📱 Phones
  </button>

  <button
    className={`btn mr-2 mb-2 ${
      this.state.category === "laptop"
        ? "btn-primary"
        : "btn-outline-light"
    }`}
    onClick={() =>
      this.setState({ category: "laptop" })
    }
  >
    💻 Laptops
  </button>

  <button
    className={`btn mr-2 mb-2 ${
      this.state.category === "audio"
        ? "btn-primary"
        : "btn-outline-light"
    }`}
    onClick={() =>
      this.setState({ category: "audio" })
    }
  >
    🎧 Audio
  </button>

  <button
    className={`btn mr-2 mb-2 ${
      this.state.category === "camera"
        ? "btn-primary"
        : "btn-outline-light"
    }`}
    onClick={() =>
      this.setState({ category: "camera" })
    }
  >
    📷 Camera
  </button>

  <button
    className={`btn mr-2 mb-2 ${
      this.state.category === "watch"
        ? "btn-primary"
        : "btn-outline-light"
    }`}
    onClick={() =>
      this.setState({ category: "watch" })
    }
  >
    ⌚ Watches
  </button>

</div>

        <div className="row">

         {this.props.products.length === 0 ? (

<div
className="col-12 text-center py-5"
>

<h1
style={{fontSize:"70px"}}
>
📦
</h1>

<h3
className="mt-3"
>
No Products Available
</h3>

<p
className="text-muted"
>
Be the first seller on BlockBazaar!
</p>

</div>

) : (

this.props.products
  .filter(product => {

  const name = product.name.toLowerCase();

  const matchesSearch =
    name.includes(
      this.state.search.toLowerCase()
    );
    
  
  

  let matchesCategory = true;

  switch (this.state.category) {

    case "phone":
      matchesCategory =
        name.includes("phone") ||
        name.includes("iphone") ||
        name.includes("samsung");
      break;

    case "laptop":
      matchesCategory =
        name.includes("laptop") ||
        name.includes("macbook");
      break;

    case "audio":
      matchesCategory =
        name.includes("headphone") ||
        name.includes("speaker");
      break;

    case "camera":
      matchesCategory =
        name.includes("camera");
      break;

    case "watch":
      matchesCategory =
        name.includes("watch");
      break;

    default:
      matchesCategory = true;

  }

  return matchesSearch && matchesCategory;

})
  .map((product, key) => (

            <div
              className="col-lg-4 col-md-6 mb-4"
              key={key}
            >

              <div
                className="card product-card h-100 shadow"
                style={{
                  background: "#1e293b",
                  border: "1px solid #334155",
                  borderRadius: "20px",
                  overflow: "hidden"
                }}
              >

                <img
                  src={this.getProductImage(product.name)}
                  alt={product.name}
                  style={{
                    height: "220px",
                    width: "100%",
                    objectFit: "cover"
                  }}
                />

                <div className="card-body d-flex flex-column">

                  <h4 className="font-weight-bold mb-3">

                    {product.name}

                  </h4>

                  <div className="mb-3">

                    <span
                      className="badge badge-warning p-2"
                      style={{ fontSize: "15px" }}
                    >
                      💰 {window.web3.utils.fromWei(
                        product.price.toString(),
                        'Ether'
                      )} ETH
                    </span>

                  </div>

                  <small
                    className="text-muted"
                    style={{
                      wordBreak: "break-word"
                    }}
                  >
                    👤 {product.owner}
                  </small>

                  <div className="mt-auto pt-4">
                                        {
                      !product.purchased ? (
                        <>

                          <span
                            className="badge badge-success px-3 py-2 mb-3"
                            style={{
                              fontSize: "14px"
                            }}
                          >
                            ✅ Available
                          </span>

                          <button
                            className="btn btn-primary btn-lg btn-block"
                            name={product.id}
                            value={product.price}
                            onClick={(event) => {

                              this.props.purchaseProduct(
                                event.target.name,
                                event.target.value
                              );

                            }}
                          >
                            🛒 Buy Now
                          </button>

                        </>
                      ) : (
                        <>

                          <span
                            className="badge badge-secondary px-3 py-2 mb-3"
                            style={{
                              fontSize: "14px"
                            }}
                          >
                            ✔ Sold
                          </span>

                          <button
                            className="btn btn-success btn-lg btn-block"
                            disabled
                          >
                            Purchased
                          </button>

                        </>
                      )
                    }

                  </div>

                </div>

              </div>

            </div>

          ))

)}

        </div>

      </div>

    );
  }
}

export default Main;